import { WebSocket } from 'ws';
import { RoomManager } from './RoomManager';
import { OutgoingMessage } from './types';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_PASSWORD } from './config';
import client from '@repo/db/client';

function getRandomString(length: number) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv1234567890!@#$%^&*';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += chars[Math.floor(Math.random() * chars.length)];
  }

  return randomString;
}

export class User {
  public id: string;
  public userId?: string;
  public username?: string;
  public avatar?: { avatarIdle: string; avatarRun: string };
  private space?: { spaceId: string; height: number; width: number };
  private spaceId?: string;
  private mapId?: string;
  private roomType?: 'space' | 'map';
  public x: number;
  public y: number;
  private ws: WebSocket;

  constructor(ws: WebSocket) {
    this.id = getRandomString(10);
    this.ws = ws;
    this.x = 0;
    this.y = 0;
    this.initHandlers();
  }

  initHandlers() {
    this.ws.addEventListener('message', async (event) => {
      const data = event.data;
      const parseData = JSON.parse(data.toString());

      if (parseData.class === 'game') {
        await this.handleGameMessage(parseData);
      } else if (parseData.class === 'chat') {
        await this.handleChatMessage(parseData);
      }
    });
  }

  private async handleGameMessage(parseData: any) {
    switch (parseData.type) {
      case 'join':
        try {
          const token = parseData.payload.token;
          const spaceId = parseData.payload.spaceId;
          //verify token:
          const userId = (jwt.verify(token, JWT_PASSWORD) as JwtPayload).userId;
          if (!userId) {
            this.ws.close();
            throw new Error('invalid jwt token');
          }
          this.userId = userId;

          //get username and avatarImg from database:
          const user = await client.user.findUnique({
            where: {
              id: parseInt(userId),
            },
          });

          this.username = user?.username;

          if (user?.avatarId) {
            const avatar = await client.avatar.findUnique({
              where: {
                id: user.avatarId,
              },
            });
            if (!avatar) throw new Error('avatar not found!');
            this.avatar = {
              avatarIdle:
                avatar.avatarIdle || '/assets/Adam_idle_anim_16x16.png',
              avatarRun: avatar.avatarRun || '/assets/Adam_run_16x16.png',
            };
          } else {
            // Default avatar
            this.avatar = {
              avatarIdle: '/assets/Adam_idle_anim_16x16.png',
              avatarRun: '/assets/Adam_run_16x16.png',
            };
          }

          //verify spaceId:
          const space = await client.space.findUnique({
            where: {
              id: parseInt(spaceId),
            },
            include: {
              elements: {
                include: {
                  element: true,
                },
              },
            },
          });

          if (!space) {
            this.ws.close();
            throw new Error('Space not found');
          }

          this.space = {
            spaceId: spaceId,
            height: space.height,
            width: space.width,
          };

          //check if user has already joined this space:
          RoomManager.getInstance()
            .rooms.get(spaceId)
            ?.forEach((u) => {
              if (u.userId === this.userId) {
                console.log('Same User found', u.username);
                throw new Error('user has already joined this space');
              }
            });

          //set spawn coords:
          RoomManager.getInstance().addUser(spaceId, this);
          this.x = Math.floor(Math.random() * space.width);
          this.y = Math.floor(Math.random() * space.height);

          // Create compatible space object with spaceElements
          const spaceWithElements = {
            ...space,
            spaceElements: space.elements.map((e: any) => ({
              x: e.x,
              y: e.y,
              element: {
                elementImg: e.element.imageUrl,
                width: e.element.width,
                height: e.element.height,
                static: e.element.isStatic,
              },
            })),
          };

          //sendspace joined message to user:
          this.send({
            class: 'game',
            type: 'space-joined',
            payload: {
              userId: this.userId,
              spawn: {
                x: this.x,
                y: this.y,
              },
              username: this.username,
              avatar: this.avatar,
              users: RoomManager.getInstance()
                .rooms.get(spaceId)
                ?.filter((x) => x.id !== this.id),
              space: spaceWithElements,
            },
          });

          //broadcast to other users:
          RoomManager.getInstance().broadcast(
            {
              type: 'user-joined',
              payload: {
                userId: this.userId,
                coords: {
                  x: this.x,
                  y: this.y,
                },
                username: this.username,
                avatar: this.avatar,
              },
            },
            this,
            this.space!.spaceId
          );
        } catch (error) {
          console.log(error);
        }

        break;

      case 'move':
        console.log('Move received:', parseData.payload);
        const moveX = parseInt(parseData.payload.coords.x);
        const moveY = parseInt(parseData.payload.coords.y);
        const direction = parseData.payload.direction;

        console.log(
          `User ${this.userId} attempting to move from (${this.x}, ${this.y}) to (${moveX}, ${moveY})`
        );

        const xDisplacement = Math.abs(this.x - moveX);
        const yDisplacement = Math.abs(this.y - moveY);

        const validMove =
          (xDisplacement <= 1 && yDisplacement == 0) ||
          (xDisplacement == 0 && yDisplacement <= 1);

        //check if user moved two blocks at once:
        if (validMove) {
          console.log('Movement accepted, broadcasting to other users');
          this.x = moveX;
          this.y = moveY;
          RoomManager.getInstance().broadcast(
            {
              class: 'game',
              type: 'user-moved',
              payload: {
                userId: this.userId,
                coords: {
                  x: this.x,
                  y: this.y,
                },
                direction: direction,
              },
            },
            this,
            this.space!.spaceId
          );

          break;
        }

        console.log('Movement rejected:', {
          validMove,
          xDisplacement,
          yDisplacement,
        });
        this.send({
          class: 'game',
          type: 'movement-rejected',
          payload: {
            coords: {
              x: this.x,
              y: this.y,
            },
          },
        });

        break;
    }
  }

  private async handleChatMessage(parseData: any) {
    if (!this.userId || !this.space) return;

    switch (parseData.type) {
      case 'send-message':
        try {
          const messageText = parseData.payload.text;
          const spaceId = parseData.payload.spaceId;

          if (spaceId !== parseInt(this.space.spaceId)) {
            console.error('Space ID mismatch');
            return;
          }

          // Save message to database
          const message = await client.message.create({
            data: {
              spaceId: spaceId,
              userId: parseInt(this.userId),
              displayName: this.username || 'Unknown User',
              text: messageText,
            },
          });

          // Broadcast to all users in the space including sender
          const chatMessage = {
            class: 'game',
            type: 'chat-message',
            payload: {
              id: message.id,
              userId: message.userId,
              displayName: message.displayName,
              text: message.text,
              createdAt: message.createdAt.toISOString(),
            },
          };

          // Send to all other users
          RoomManager.getInstance().broadcast(
            chatMessage,
            this,
            this.space.spaceId
          );

          // Also send to sender
          this.send(chatMessage);
        } catch (error) {
          console.error('Error sending chat message:', error);
        }
        break;
    }
  }

  async validateMovement(
    newX: number,
    newY: number,
    xDisplacement: number,
    yDisplacement: number,
    isTeleport: boolean = false
  ): Promise<boolean> {
    try {
      // 1. Movement validation: allow teleport or single step movement
      if (
        !isTeleport &&
        !(
          (xDisplacement == 1 && yDisplacement == 0) ||
          (xDisplacement == 0 && yDisplacement == 1)
        )
      ) {
        return false;
      }

      // 2. Quick check: collision with other players (no DB query needed)
      const roomKey = this.spaceId
        ? `space_${this.spaceId}`
        : `map_${this.mapId}`;
      const roomUsers = RoomManager.getInstance().rooms.get(roomKey) || [];
      for (const otherUser of roomUsers) {
        if (
          otherUser.id !== this.id &&
          otherUser.x === newX &&
          otherUser.y === newY
        ) {
          return false; // Player collision
        }
      }

      // 3. Get room data based on type
      if (this.spaceId) {
        // Handle space validation
        const space = await client.space.findFirst({
          where: { id: parseInt(this.spaceId) },
          select: {
            width: true,
            height: true,
            elements: {
              select: {
                x: true,
                y: true,
                element: {
                  select: {
                    width: true,
                    height: true,
                  },
                },
              },
            },
          },
        });

        if (!space) {
          return false;
        }

        // Check boundaries
        if (
          newX < 0 ||
          newX >= space.width ||
          newY < 0 ||
          newY >= space.height
        ) {
          return false;
        }

        // Check element collisions
        for (const spaceElement of space.elements) {
          const element = spaceElement.element;

          if (
            newX >= spaceElement.x &&
            newX < spaceElement.x + element.width &&
            newY >= spaceElement.y &&
            newY < spaceElement.y + element.height
          ) {
            return false; // Element collision
          }
        }
      } else if (this.mapId) {
        // Handle map validation
        const map = await client.map.findFirst({
          where: { id: parseInt(this.mapId) },
          select: {
            width: true,
            height: true,
            mapElements: {
              select: {
                x: true,
                y: true,
                element: {
                  select: {
                    width: true,
                    height: true,
                  },
                },
              },
            },
          },
        });

        if (!map) {
          return false;
        }

        // Check boundaries
        if (newX < 0 || newX >= map.width || newY < 0 || newY >= map.height) {
          return false;
        }

        // Check element collisions
        for (const mapElement of map.mapElements) {
          const element = mapElement.element;

          if (
            newX >= mapElement.x &&
            newX < mapElement.x + element.width &&
            newY >= mapElement.y &&
            newY < mapElement.y + element.height
          ) {
            return false; // Element collision
          }
        }
      } else {
        return false; // Neither space nor map
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  destroy() {
    const roomKey = this.spaceId
      ? `space_${this.spaceId}`
      : `map_${this.mapId}`;

    if (roomKey && (this.spaceId || this.mapId)) {
      RoomManager.getInstance().broadcast(
        {
          type: 'user-left',
          payload: {
            userId: this.userId,
          },
        },
        this,
        roomKey
      );
      RoomManager.getInstance().removeUser(roomKey, this);
    }
  }

  send(payload: OutgoingMessage) {
    this.ws.send(JSON.stringify(payload));
  }
}
