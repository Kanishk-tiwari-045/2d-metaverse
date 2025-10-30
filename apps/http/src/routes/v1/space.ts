import { Router } from 'express';
import client from '@repo/db/client';
import { userMiddleware } from '../../middleware/user';
import {
  AddElementSchema,
  CreateElementSchema,
  CreateSpaceSchema,
  DeleteElementSchema,
} from '../../types';
export const spaceRouter = Router();

spaceRouter.post('/', userMiddleware, async (req, res) => {
  console.log('endopibnt');
  const parsedData = CreateSpaceSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log(JSON.stringify(parsedData));
    res.status(400).json({ message: 'Validation failed' });
    return;
  }

  if (!parsedData.data.mapId) {
    const space = await client.space.create({
      data: {
        name: parsedData.data.name,
        width: parseInt(parsedData.data.dimensions.split('x')[0]),
        height: parseInt(parsedData.data.dimensions.split('x')[1]),
        ownerId: parseInt(req.userId!),
      },
    });
    res.json({ spaceId: space.id });
    return;
  }

  const map = await client.map.findFirst({
    where: {
      id: parseInt(parsedData.data.mapId),
    },
    select: {
      mapElements: true,
      width: true,
      height: true,
    },
  });
  console.log('after');
  if (!map) {
    res.status(400).json({ message: 'Map not found' });
    return;
  }
  console.log('map.mapElements.length');
  console.log(map.mapElements.length);
  let space = await client.$transaction(async () => {
    const space = await client.space.create({
      data: {
        name: parsedData.data.name,
        width: map.width,
        height: map.height,
        ownerId: parseInt(req.userId!),
      },
    });

    await client.spaceElement.createMany({
      data: map.mapElements.map((e) => ({
        spaceId: space.id,
        elementId: e.elementId,
        x: e.x,
        y: e.y,
      })),
    });

    return space;
  });
  console.log('space crated');
  res.json({ spaceId: space.id });
});

spaceRouter.delete('/element', userMiddleware, async (req, res) => {
  console.log('spaceElement?.space1 ');
  const parsedData = DeleteElementSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: 'Validation failed' });
    return;
  }
  const spaceElement = await client.spaceElement.findFirst({
    where: {
      id: parseInt(parsedData.data.id),
    },
    include: {
      space: true,
    },
  });
  console.log(spaceElement?.space);
  console.log('spaceElement?.space');
  if (
    !spaceElement?.space.ownerId ||
    spaceElement.space.ownerId !== parseInt(req.userId!)
  ) {
    res.status(403).json({ message: 'Unauthorized' });
    return;
  }
  await client.spaceElement.delete({
    where: {
      id: parseInt(parsedData.data.id),
    },
  });
  res.json({ message: 'Element deleted' });
});

spaceRouter.delete('/:spaceId', userMiddleware, async (req, res) => {
  console.log('req.params.spaceId', req.params.spaceId);
  const space = await client.space.findUnique({
    where: {
      id: parseInt(req.params.spaceId),
    },
    select: {
      ownerId: true,
    },
  });
  if (!space) {
    res.status(400).json({ message: 'Space not found' });
    return;
  }

  if (space.ownerId !== parseInt(req.userId!)) {
    console.log('code should reach here');
    res.status(403).json({ message: 'Unauthorized' });
    return;
  }

  await client.space.delete({
    where: {
      id: parseInt(req.params.spaceId),
    },
  });
  res.json({ message: 'Space deleted' });
});

spaceRouter.get('/all', userMiddleware, async (req, res) => {
  const spaces = await client.space.findMany({
    where: {
      ownerId: parseInt(req.userId!),
    },
  });

  res.json({
    spaces: spaces.map((s) => ({
      id: s.id,
      name: s.name,
      thumbnail: s.thumbnail,
      dimensions: `${s.width}x${s.height}`,
      width: s.width,
      height: s.height,
    })),
  });
});

spaceRouter.get('/public', userMiddleware, async (req, res) => {
  const spaces = await client.space.findMany({
    include: {
      owner: {
        select: {
          username: true,
        },
      },
    },
  });

  res.json({
    spaces: spaces.map((s) => ({
      id: s.id,
      name: s.name,
      thumbnail: s.thumbnail,
      dimensions: `${s.width}x${s.height}`,
      width: s.width,
      height: s.height,
      owner: s.owner.username,
      isOwner: s.ownerId === parseInt(req.userId!),
    })),
  });
});

spaceRouter.post('/element', userMiddleware, async (req, res) => {
  const parsedData = AddElementSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: 'Validation failed' });
    return;
  }
  const space = await client.space.findUnique({
    where: {
      id: parseInt(req.body.spaceId),
      ownerId: parseInt(req.userId!),
    },
    select: {
      width: true,
      height: true,
    },
  });

  if (
    req.body.x < 0 ||
    req.body.y < 0 ||
    req.body.x > space?.width! ||
    req.body.y > space?.height!
  ) {
    res.status(400).json({ message: 'Point is outside of the boundary' });
    return;
  }

  if (!space) {
    res.status(400).json({ message: 'Space not found' });
    return;
  }
  await client.spaceElement.create({
    data: {
      spaceId: parseInt(req.body.spaceId),
      elementId: parseInt(req.body.elementId),
      x: req.body.x,
      y: req.body.y,
    },
  });

  res.json({ message: 'Element added' });
});

spaceRouter.get('/:spaceId', userMiddleware, async (req, res) => {
  const space = await client.space.findUnique({
    where: {
      id: parseInt(req.params.spaceId),
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
    res.status(400).json({ message: 'Space not found' });
    return;
  }

  res.json({
    id: space.id,
    name: space.name,
    width: space.width,
    height: space.height,
    ownerId: space.ownerId,
    elements: space.elements.map((e) => ({
      id: e.id,
      elementId: e.elementId,
      x: e.x,
      y: e.y,
      element: {
        id: e.element.id,
        imageUrl: e.element.imageUrl,
        width: e.element.width,
        height: e.element.height,
        isStatic: e.element.isStatic,
      },
    })),
  });
});

// Get messages for a space
spaceRouter.get('/:spaceId/messages', userMiddleware, async (req, res) => {
  try {
    const spaceId = parseInt(req.params.spaceId);

    if (isNaN(spaceId)) {
      res.status(400).json({ message: 'Invalid space ID' });
      return;
    }

    // Verify space exists
    const space = await client.space.findUnique({
      where: { id: spaceId },
    });

    if (!space) {
      res.status(404).json({ message: 'Space not found' });
      return;
    }

    // Fetch messages for the space
    const messages = await client.message.findMany({
      where: {
        spaceId: spaceId,
      },
      orderBy: {
        createdAt: 'asc',
      },
      take: 100, // Limit to last 100 messages
    });

    res.json({
      messages: messages.map((msg) => ({
        id: msg.id,
        userId: msg.userId,
        displayName: msg.displayName,
        text: msg.text,
        createdAt: msg.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
