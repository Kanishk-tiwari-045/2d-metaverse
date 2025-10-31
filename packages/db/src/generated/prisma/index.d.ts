/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Avatar
 *
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>;
/**
 * Model Element
 *
 */
export type Element = $Result.DefaultSelection<Prisma.$ElementPayload>;
/**
 * Model Map
 *
 */
export type Map = $Result.DefaultSelection<Prisma.$MapPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model ActivityLog
 *
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>;
/**
 * Model Space
 *
 */
export type Space = $Result.DefaultSelection<Prisma.$SpacePayload>;
/**
 * Model MapElement
 *
 */
export type MapElement = $Result.DefaultSelection<Prisma.$MapElementPayload>;
/**
 * Model MapSpace
 *
 */
export type MapSpace = $Result.DefaultSelection<Prisma.$MapSpacePayload>;
/**
 * Model SpaceElement
 *
 */
export type SpaceElement =
  $Result.DefaultSelection<Prisma.$SpaceElementPayload>;
/**
 * Model Message
 *
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>;
/**
 * Model user_map_visits
 *
 */
export type user_map_visits =
  $Result.DefaultSelection<Prisma.$user_map_visitsPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
    admin: 'admin';
    user: 'user';
  };

  export type UserRole = (typeof UserRole)[keyof typeof UserRole];
}

export type UserRole = $Enums.UserRole;

export const UserRole: typeof $Enums.UserRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Avatars
 * const avatars = await prisma.avatar.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Avatars
   * const avatars = await prisma.avatar.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Avatars
   * const avatars = await prisma.avatar.findMany()
   * ```
   */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.element`: Exposes CRUD operations for the **Element** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Elements
   * const elements = await prisma.element.findMany()
   * ```
   */
  get element(): Prisma.ElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.map`: Exposes CRUD operations for the **Map** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Maps
   * const maps = await prisma.map.findMany()
   * ```
   */
  get map(): Prisma.MapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ActivityLogs
   * const activityLogs = await prisma.activityLog.findMany()
   * ```
   */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.space`: Exposes CRUD operations for the **Space** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Spaces
   * const spaces = await prisma.space.findMany()
   * ```
   */
  get space(): Prisma.SpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapElement`: Exposes CRUD operations for the **MapElement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MapElements
   * const mapElements = await prisma.mapElement.findMany()
   * ```
   */
  get mapElement(): Prisma.MapElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapSpace`: Exposes CRUD operations for the **MapSpace** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MapSpaces
   * const mapSpaces = await prisma.mapSpace.findMany()
   * ```
   */
  get mapSpace(): Prisma.MapSpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spaceElement`: Exposes CRUD operations for the **SpaceElement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SpaceElements
   * const spaceElements = await prisma.spaceElement.findMany()
   * ```
   */
  get spaceElement(): Prisma.SpaceElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_map_visits`: Exposes CRUD operations for the **user_map_visits** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_map_visits
   * const user_map_visits = await prisma.user_map_visits.findMany()
   * ```
   */
  get user_map_visits(): Prisma.user_map_visitsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Avatar: 'Avatar';
    Element: 'Element';
    Map: 'Map';
    User: 'User';
    ActivityLog: 'ActivityLog';
    Space: 'Space';
    MapElement: 'MapElement';
    MapSpace: 'MapSpace';
    SpaceElement: 'SpaceElement';
    Message: 'Message';
    user_map_visits: 'user_map_visits';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'avatar'
        | 'element'
        | 'map'
        | 'user'
        | 'activityLog'
        | 'space'
        | 'mapElement'
        | 'mapSpace'
        | 'spaceElement'
        | 'message'
        | 'user_map_visits';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>;
        fields: Prisma.AvatarFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
          };
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
          };
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[];
          };
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
          };
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[];
          };
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
          };
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
          };
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[];
          };
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
          };
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAvatar>;
          };
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AvatarGroupByOutputType>[];
          };
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>;
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number;
          };
        };
      };
      Element: {
        payload: Prisma.$ElementPayload<ExtArgs>;
        fields: Prisma.ElementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ElementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ElementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>;
          };
          findFirst: {
            args: Prisma.ElementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ElementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>;
          };
          findMany: {
            args: Prisma.ElementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>[];
          };
          create: {
            args: Prisma.ElementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>;
          };
          createMany: {
            args: Prisma.ElementCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ElementCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>[];
          };
          delete: {
            args: Prisma.ElementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>;
          };
          update: {
            args: Prisma.ElementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>;
          };
          deleteMany: {
            args: Prisma.ElementDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ElementUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ElementUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>[];
          };
          upsert: {
            args: Prisma.ElementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElementPayload>;
          };
          aggregate: {
            args: Prisma.ElementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateElement>;
          };
          groupBy: {
            args: Prisma.ElementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ElementGroupByOutputType>[];
          };
          count: {
            args: Prisma.ElementCountArgs<ExtArgs>;
            result: $Utils.Optional<ElementCountAggregateOutputType> | number;
          };
        };
      };
      Map: {
        payload: Prisma.$MapPayload<ExtArgs>;
        fields: Prisma.MapFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MapFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MapFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>;
          };
          findFirst: {
            args: Prisma.MapFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MapFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>;
          };
          findMany: {
            args: Prisma.MapFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[];
          };
          create: {
            args: Prisma.MapCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>;
          };
          createMany: {
            args: Prisma.MapCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MapCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[];
          };
          delete: {
            args: Prisma.MapDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>;
          };
          update: {
            args: Prisma.MapUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>;
          };
          deleteMany: {
            args: Prisma.MapDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MapUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MapUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[];
          };
          upsert: {
            args: Prisma.MapUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapPayload>;
          };
          aggregate: {
            args: Prisma.MapAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMap>;
          };
          groupBy: {
            args: Prisma.MapGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MapGroupByOutputType>[];
          };
          count: {
            args: Prisma.MapCountArgs<ExtArgs>;
            result: $Utils.Optional<MapCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>;
        fields: Prisma.ActivityLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
          };
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
          };
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[];
          };
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
          };
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[];
          };
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
          };
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
          };
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[];
          };
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
          };
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateActivityLog>;
          };
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ActivityLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ActivityLogCountAggregateOutputType>
              | number;
          };
        };
      };
      Space: {
        payload: Prisma.$SpacePayload<ExtArgs>;
        fields: Prisma.SpaceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SpaceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SpaceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>;
          };
          findFirst: {
            args: Prisma.SpaceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SpaceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>;
          };
          findMany: {
            args: Prisma.SpaceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[];
          };
          create: {
            args: Prisma.SpaceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>;
          };
          createMany: {
            args: Prisma.SpaceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SpaceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[];
          };
          delete: {
            args: Prisma.SpaceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>;
          };
          update: {
            args: Prisma.SpaceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>;
          };
          deleteMany: {
            args: Prisma.SpaceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SpaceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SpaceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[];
          };
          upsert: {
            args: Prisma.SpaceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>;
          };
          aggregate: {
            args: Prisma.SpaceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSpace>;
          };
          groupBy: {
            args: Prisma.SpaceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SpaceGroupByOutputType>[];
          };
          count: {
            args: Prisma.SpaceCountArgs<ExtArgs>;
            result: $Utils.Optional<SpaceCountAggregateOutputType> | number;
          };
        };
      };
      MapElement: {
        payload: Prisma.$MapElementPayload<ExtArgs>;
        fields: Prisma.MapElementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MapElementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MapElementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>;
          };
          findFirst: {
            args: Prisma.MapElementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MapElementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>;
          };
          findMany: {
            args: Prisma.MapElementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>[];
          };
          create: {
            args: Prisma.MapElementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>;
          };
          createMany: {
            args: Prisma.MapElementCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MapElementCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>[];
          };
          delete: {
            args: Prisma.MapElementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>;
          };
          update: {
            args: Prisma.MapElementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>;
          };
          deleteMany: {
            args: Prisma.MapElementDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MapElementUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MapElementUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>[];
          };
          upsert: {
            args: Prisma.MapElementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapElementPayload>;
          };
          aggregate: {
            args: Prisma.MapElementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMapElement>;
          };
          groupBy: {
            args: Prisma.MapElementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MapElementGroupByOutputType>[];
          };
          count: {
            args: Prisma.MapElementCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MapElementCountAggregateOutputType>
              | number;
          };
        };
      };
      MapSpace: {
        payload: Prisma.$MapSpacePayload<ExtArgs>;
        fields: Prisma.MapSpaceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MapSpaceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MapSpaceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>;
          };
          findFirst: {
            args: Prisma.MapSpaceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MapSpaceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>;
          };
          findMany: {
            args: Prisma.MapSpaceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>[];
          };
          create: {
            args: Prisma.MapSpaceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>;
          };
          createMany: {
            args: Prisma.MapSpaceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MapSpaceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>[];
          };
          delete: {
            args: Prisma.MapSpaceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>;
          };
          update: {
            args: Prisma.MapSpaceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>;
          };
          deleteMany: {
            args: Prisma.MapSpaceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MapSpaceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MapSpaceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>[];
          };
          upsert: {
            args: Prisma.MapSpaceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MapSpacePayload>;
          };
          aggregate: {
            args: Prisma.MapSpaceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMapSpace>;
          };
          groupBy: {
            args: Prisma.MapSpaceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MapSpaceGroupByOutputType>[];
          };
          count: {
            args: Prisma.MapSpaceCountArgs<ExtArgs>;
            result: $Utils.Optional<MapSpaceCountAggregateOutputType> | number;
          };
        };
      };
      SpaceElement: {
        payload: Prisma.$SpaceElementPayload<ExtArgs>;
        fields: Prisma.SpaceElementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SpaceElementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SpaceElementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>;
          };
          findFirst: {
            args: Prisma.SpaceElementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SpaceElementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>;
          };
          findMany: {
            args: Prisma.SpaceElementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>[];
          };
          create: {
            args: Prisma.SpaceElementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>;
          };
          createMany: {
            args: Prisma.SpaceElementCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SpaceElementCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>[];
          };
          delete: {
            args: Prisma.SpaceElementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>;
          };
          update: {
            args: Prisma.SpaceElementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>;
          };
          deleteMany: {
            args: Prisma.SpaceElementDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SpaceElementUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SpaceElementUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>[];
          };
          upsert: {
            args: Prisma.SpaceElementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SpaceElementPayload>;
          };
          aggregate: {
            args: Prisma.SpaceElementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSpaceElement>;
          };
          groupBy: {
            args: Prisma.SpaceElementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SpaceElementGroupByOutputType>[];
          };
          count: {
            args: Prisma.SpaceElementCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SpaceElementCountAggregateOutputType>
              | number;
          };
        };
      };
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>;
        fields: Prisma.MessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMessage>;
          };
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>;
            result: $Utils.Optional<MessageCountAggregateOutputType> | number;
          };
        };
      };
      user_map_visits: {
        payload: Prisma.$user_map_visitsPayload<ExtArgs>;
        fields: Prisma.user_map_visitsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_map_visitsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_map_visitsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>;
          };
          findFirst: {
            args: Prisma.user_map_visitsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_map_visitsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>;
          };
          findMany: {
            args: Prisma.user_map_visitsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>[];
          };
          create: {
            args: Prisma.user_map_visitsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>;
          };
          createMany: {
            args: Prisma.user_map_visitsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.user_map_visitsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>[];
          };
          delete: {
            args: Prisma.user_map_visitsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>;
          };
          update: {
            args: Prisma.user_map_visitsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>;
          };
          deleteMany: {
            args: Prisma.user_map_visitsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.user_map_visitsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.user_map_visitsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>[];
          };
          upsert: {
            args: Prisma.user_map_visitsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_map_visitsPayload>;
          };
          aggregate: {
            args: Prisma.User_map_visitsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_map_visits>;
          };
          groupBy: {
            args: Prisma.user_map_visitsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_map_visitsGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_map_visitsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<User_map_visitsCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    avatar?: AvatarOmit;
    element?: ElementOmit;
    map?: MapOmit;
    user?: UserOmit;
    activityLog?: ActivityLogOmit;
    space?: SpaceOmit;
    mapElement?: MapElementOmit;
    mapSpace?: MapSpaceOmit;
    spaceElement?: SpaceElementOmit;
    message?: MessageOmit;
    user_map_visits?: user_map_visitsOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AvatarCountOutputType
   */

  export type AvatarCountOutputType = {
    users: number;
  };

  export type AvatarCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | AvatarCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes
  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AvatarCountOutputType
     */
    select?: AvatarCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * Count Type ElementCountOutputType
   */

  export type ElementCountOutputType = {
    mapElements: number;
    spaceElements: number;
  };

  export type ElementCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mapElements?: boolean | ElementCountOutputTypeCountMapElementsArgs;
    spaceElements?: boolean | ElementCountOutputTypeCountSpaceElementsArgs;
  };

  // Custom InputTypes
  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElementCountOutputType
     */
    select?: ElementCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeCountMapElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapElementWhereInput;
  };

  /**
   * ElementCountOutputType without action
   */
  export type ElementCountOutputTypeCountSpaceElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SpaceElementWhereInput;
  };

  /**
   * Count Type MapCountOutputType
   */

  export type MapCountOutputType = {
    mapElements: number;
    mapSpaces: number;
    childMaps: number;
    messages: number;
    user_map_visits: number;
  };

  export type MapCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mapElements?: boolean | MapCountOutputTypeCountMapElementsArgs;
    mapSpaces?: boolean | MapCountOutputTypeCountMapSpacesArgs;
    childMaps?: boolean | MapCountOutputTypeCountChildMapsArgs;
    messages?: boolean | MapCountOutputTypeCountMessagesArgs;
    user_map_visits?: boolean | MapCountOutputTypeCountUser_map_visitsArgs;
  };

  // Custom InputTypes
  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapCountOutputType
     */
    select?: MapCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountMapElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapElementWhereInput;
  };

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountMapSpacesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapSpaceWhereInput;
  };

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountChildMapsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapWhereInput;
  };

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountUser_map_visitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_map_visitsWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    spaces: number;
    createdAvatars: number;
    createdElements: number;
    createdMaps: number;
    messages: number;
    activityLogs: number;
    user_map_visits: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    spaces?: boolean | UserCountOutputTypeCountSpacesArgs;
    createdAvatars?: boolean | UserCountOutputTypeCountCreatedAvatarsArgs;
    createdElements?: boolean | UserCountOutputTypeCountCreatedElementsArgs;
    createdMaps?: boolean | UserCountOutputTypeCountCreatedMapsArgs;
    messages?: boolean | UserCountOutputTypeCountMessagesArgs;
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs;
    user_map_visits?: boolean | UserCountOutputTypeCountUser_map_visitsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpacesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SpaceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedAvatarsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AvatarWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ElementWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMapsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActivityLogWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_map_visitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_map_visitsWhereInput;
  };

  /**
   * Count Type SpaceCountOutputType
   */

  export type SpaceCountOutputType = {
    mapSpaces: number;
    messages: number;
    elements: number;
  };

  export type SpaceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mapSpaces?: boolean | SpaceCountOutputTypeCountMapSpacesArgs;
    messages?: boolean | SpaceCountOutputTypeCountMessagesArgs;
    elements?: boolean | SpaceCountOutputTypeCountElementsArgs;
  };

  // Custom InputTypes
  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceCountOutputType
     */
    select?: SpaceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountMapSpacesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapSpaceWhereInput;
  };

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SpaceElementWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null;
    _avg: AvatarAvgAggregateOutputType | null;
    _sum: AvatarSumAggregateOutputType | null;
    _min: AvatarMinAggregateOutputType | null;
    _max: AvatarMaxAggregateOutputType | null;
  };

  export type AvatarAvgAggregateOutputType = {
    id: number | null;
    creatorId: number | null;
  };

  export type AvatarSumAggregateOutputType = {
    id: number | null;
    creatorId: number | null;
  };

  export type AvatarMinAggregateOutputType = {
    id: number | null;
    imageUrl: string | null;
    name: string | null;
    avatarIdle: string | null;
    avatarRun: string | null;
    creatorId: number | null;
  };

  export type AvatarMaxAggregateOutputType = {
    id: number | null;
    imageUrl: string | null;
    name: string | null;
    avatarIdle: string | null;
    avatarRun: string | null;
    creatorId: number | null;
  };

  export type AvatarCountAggregateOutputType = {
    id: number;
    imageUrl: number;
    name: number;
    avatarIdle: number;
    avatarRun: number;
    creatorId: number;
    _all: number;
  };

  export type AvatarAvgAggregateInputType = {
    id?: true;
    creatorId?: true;
  };

  export type AvatarSumAggregateInputType = {
    id?: true;
    creatorId?: true;
  };

  export type AvatarMinAggregateInputType = {
    id?: true;
    imageUrl?: true;
    name?: true;
    avatarIdle?: true;
    avatarRun?: true;
    creatorId?: true;
  };

  export type AvatarMaxAggregateInputType = {
    id?: true;
    imageUrl?: true;
    name?: true;
    avatarIdle?: true;
    avatarRun?: true;
    creatorId?: true;
  };

  export type AvatarCountAggregateInputType = {
    id?: true;
    imageUrl?: true;
    name?: true;
    avatarIdle?: true;
    avatarRun?: true;
    creatorId?: true;
    _all?: true;
  };

  export type AvatarAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Avatars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Avatars
     **/
    _count?: true | AvatarCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AvatarAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AvatarSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AvatarMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AvatarMaxAggregateInputType;
  };

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
    [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>;
  };

  export type AvatarGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AvatarWhereInput;
    orderBy?:
      | AvatarOrderByWithAggregationInput
      | AvatarOrderByWithAggregationInput[];
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum;
    having?: AvatarScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvatarCountAggregateInputType | true;
    _avg?: AvatarAvgAggregateInputType;
    _sum?: AvatarSumAggregateInputType;
    _min?: AvatarMinAggregateInputType;
    _max?: AvatarMaxAggregateInputType;
  };

  export type AvatarGroupByOutputType = {
    id: number;
    imageUrl: string;
    name: string;
    avatarIdle: string | null;
    avatarRun: string | null;
    creatorId: number;
    _count: AvatarCountAggregateOutputType | null;
    _avg: AvatarAvgAggregateOutputType | null;
    _sum: AvatarSumAggregateOutputType | null;
    _min: AvatarMinAggregateOutputType | null;
    _max: AvatarMaxAggregateOutputType | null;
  };

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AvatarGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AvatarGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>;
        }
      >
    >;

  export type AvatarSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      imageUrl?: boolean;
      name?: boolean;
      avatarIdle?: boolean;
      avatarRun?: boolean;
      creatorId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
      users?: boolean | Avatar$usersArgs<ExtArgs>;
      _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['avatar']
  >;

  export type AvatarSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      imageUrl?: boolean;
      name?: boolean;
      avatarIdle?: boolean;
      avatarRun?: boolean;
      creatorId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['avatar']
  >;

  export type AvatarSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      imageUrl?: boolean;
      name?: boolean;
      avatarIdle?: boolean;
      avatarRun?: boolean;
      creatorId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['avatar']
  >;

  export type AvatarSelectScalar = {
    id?: boolean;
    imageUrl?: boolean;
    name?: boolean;
    avatarIdle?: boolean;
    avatarRun?: boolean;
    creatorId?: boolean;
  };

  export type AvatarOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'imageUrl' | 'name' | 'avatarIdle' | 'avatarRun' | 'creatorId',
    ExtArgs['result']['avatar']
  >;
  export type AvatarInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
    users?: boolean | Avatar$usersArgs<ExtArgs>;
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AvatarIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AvatarIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $AvatarPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Avatar';
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>;
      users: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        imageUrl: string;
        name: string;
        avatarIdle: string | null;
        avatarRun: string | null;
        creatorId: number;
      },
      ExtArgs['result']['avatar']
    >;
    composites: {};
  };

  type AvatarGetPayload<
    S extends boolean | null | undefined | AvatarDefaultArgs,
  > = $Result.GetResult<Prisma.$AvatarPayload, S>;

  type AvatarCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvatarCountAggregateInputType | true;
  };

  export interface AvatarDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Avatar'];
      meta: { name: 'Avatar' };
    };
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(
      args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(
      args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     *
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AvatarFindManyArgs>(
      args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     *
     */
    create<T extends AvatarCreateArgs>(
      args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AvatarCreateManyArgs>(
      args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     *
     */
    delete<T extends AvatarDeleteArgs>(
      args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AvatarUpdateArgs>(
      args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AvatarDeleteManyArgs>(
      args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AvatarUpdateManyArgs>(
      args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Avatars and returns the data updated in the database.
     * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(
      args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
     **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AvatarAggregateArgs>(
      args: Subset<T, AvatarAggregateArgs>
    ): Prisma.PrismaPromise<GetAvatarAggregateType<T>>;

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAvatarGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Avatar model
     */
    readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    users<T extends Avatar$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Avatar$usersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly id: FieldRef<'Avatar', 'Int'>;
    readonly imageUrl: FieldRef<'Avatar', 'String'>;
    readonly name: FieldRef<'Avatar', 'String'>;
    readonly avatarIdle: FieldRef<'Avatar', 'String'>;
    readonly avatarRun: FieldRef<'Avatar', 'String'>;
    readonly creatorId: FieldRef<'Avatar', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput;
  };

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput;
  };

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Avatars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[];
  };

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Avatars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[];
  };

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Avatars.
     */
    skip?: number;
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[];
  };

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>;
  };

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>;
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput;
  };

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>;
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput;
    /**
     * Limit how many Avatars to update.
     */
    limit?: number;
  };

  /**
   * Avatar updateManyAndReturn
   */
  export type AvatarUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>;
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput;
    /**
     * Limit how many Avatars to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput;
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>;
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>;
  };

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput;
  };

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput;
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number;
  };

  /**
   * Avatar.users
   */
  export type Avatar$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
  };

  /**
   * Model Element
   */

  export type AggregateElement = {
    _count: ElementCountAggregateOutputType | null;
    _avg: ElementAvgAggregateOutputType | null;
    _sum: ElementSumAggregateOutputType | null;
    _min: ElementMinAggregateOutputType | null;
    _max: ElementMaxAggregateOutputType | null;
  };

  export type ElementAvgAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    creatorId: number | null;
  };

  export type ElementSumAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    creatorId: number | null;
  };

  export type ElementMinAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    imageUrl: string | null;
    isStatic: boolean | null;
    creatorId: number | null;
  };

  export type ElementMaxAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    imageUrl: string | null;
    isStatic: boolean | null;
    creatorId: number | null;
  };

  export type ElementCountAggregateOutputType = {
    id: number;
    width: number;
    height: number;
    imageUrl: number;
    isStatic: number;
    creatorId: number;
    _all: number;
  };

  export type ElementAvgAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    creatorId?: true;
  };

  export type ElementSumAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    creatorId?: true;
  };

  export type ElementMinAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    imageUrl?: true;
    isStatic?: true;
    creatorId?: true;
  };

  export type ElementMaxAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    imageUrl?: true;
    isStatic?: true;
    creatorId?: true;
  };

  export type ElementCountAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    imageUrl?: true;
    isStatic?: true;
    creatorId?: true;
    _all?: true;
  };

  export type ElementAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Element to aggregate.
     */
    where?: ElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elements to fetch.
     */
    orderBy?:
      | ElementOrderByWithRelationInput
      | ElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Elements
     **/
    _count?: true | ElementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ElementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ElementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ElementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ElementMaxAggregateInputType;
  };

  export type GetElementAggregateType<T extends ElementAggregateArgs> = {
    [P in keyof T & keyof AggregateElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElement[P]>
      : GetScalarType<T[P], AggregateElement[P]>;
  };

  export type ElementGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ElementWhereInput;
    orderBy?:
      | ElementOrderByWithAggregationInput
      | ElementOrderByWithAggregationInput[];
    by: ElementScalarFieldEnum[] | ElementScalarFieldEnum;
    having?: ElementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ElementCountAggregateInputType | true;
    _avg?: ElementAvgAggregateInputType;
    _sum?: ElementSumAggregateInputType;
    _min?: ElementMinAggregateInputType;
    _max?: ElementMaxAggregateInputType;
  };

  export type ElementGroupByOutputType = {
    id: number;
    width: number;
    height: number;
    imageUrl: string;
    isStatic: boolean;
    creatorId: number;
    _count: ElementCountAggregateOutputType | null;
    _avg: ElementAvgAggregateOutputType | null;
    _sum: ElementSumAggregateOutputType | null;
    _min: ElementMinAggregateOutputType | null;
    _max: ElementMaxAggregateOutputType | null;
  };

  type GetElementGroupByPayload<T extends ElementGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ElementGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ElementGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElementGroupByOutputType[P]>
            : GetScalarType<T[P], ElementGroupByOutputType[P]>;
        }
      >
    >;

  export type ElementSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      width?: boolean;
      height?: boolean;
      imageUrl?: boolean;
      isStatic?: boolean;
      creatorId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
      mapElements?: boolean | Element$mapElementsArgs<ExtArgs>;
      spaceElements?: boolean | Element$spaceElementsArgs<ExtArgs>;
      _count?: boolean | ElementCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['element']
  >;

  export type ElementSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      width?: boolean;
      height?: boolean;
      imageUrl?: boolean;
      isStatic?: boolean;
      creatorId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['element']
  >;

  export type ElementSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      width?: boolean;
      height?: boolean;
      imageUrl?: boolean;
      isStatic?: boolean;
      creatorId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['element']
  >;

  export type ElementSelectScalar = {
    id?: boolean;
    width?: boolean;
    height?: boolean;
    imageUrl?: boolean;
    isStatic?: boolean;
    creatorId?: boolean;
  };

  export type ElementOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'width' | 'height' | 'imageUrl' | 'isStatic' | 'creatorId',
    ExtArgs['result']['element']
  >;
  export type ElementInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
    mapElements?: boolean | Element$mapElementsArgs<ExtArgs>;
    spaceElements?: boolean | Element$spaceElementsArgs<ExtArgs>;
    _count?: boolean | ElementCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ElementIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ElementIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ElementPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Element';
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>;
      mapElements: Prisma.$MapElementPayload<ExtArgs>[];
      spaceElements: Prisma.$SpaceElementPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        width: number;
        height: number;
        imageUrl: string;
        isStatic: boolean;
        creatorId: number;
      },
      ExtArgs['result']['element']
    >;
    composites: {};
  };

  type ElementGetPayload<
    S extends boolean | null | undefined | ElementDefaultArgs,
  > = $Result.GetResult<Prisma.$ElementPayload, S>;

  type ElementCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ElementCountAggregateInputType | true;
  };

  export interface ElementDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Element'];
      meta: { name: 'Element' };
    };
    /**
     * Find zero or one Element that matches the filter.
     * @param {ElementFindUniqueArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementFindUniqueArgs>(
      args: SelectSubset<T, ElementFindUniqueArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Element that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementFindUniqueOrThrowArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ElementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Element that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindFirstArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementFindFirstArgs>(
      args?: SelectSubset<T, ElementFindFirstArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Element that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindFirstOrThrowArgs} args - Arguments to find a Element
     * @example
     * // Get one Element
     * const element = await prisma.element.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ElementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Elements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elements
     * const elements = await prisma.element.findMany()
     *
     * // Get first 10 Elements
     * const elements = await prisma.element.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const elementWithIdOnly = await prisma.element.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ElementFindManyArgs>(
      args?: SelectSubset<T, ElementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Element.
     * @param {ElementCreateArgs} args - Arguments to create a Element.
     * @example
     * // Create one Element
     * const Element = await prisma.element.create({
     *   data: {
     *     // ... data to create a Element
     *   }
     * })
     *
     */
    create<T extends ElementCreateArgs>(
      args: SelectSubset<T, ElementCreateArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Elements.
     * @param {ElementCreateManyArgs} args - Arguments to create many Elements.
     * @example
     * // Create many Elements
     * const element = await prisma.element.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ElementCreateManyArgs>(
      args?: SelectSubset<T, ElementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Elements and returns the data saved in the database.
     * @param {ElementCreateManyAndReturnArgs} args - Arguments to create many Elements.
     * @example
     * // Create many Elements
     * const element = await prisma.element.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Elements and only return the `id`
     * const elementWithIdOnly = await prisma.element.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ElementCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ElementCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Element.
     * @param {ElementDeleteArgs} args - Arguments to delete one Element.
     * @example
     * // Delete one Element
     * const Element = await prisma.element.delete({
     *   where: {
     *     // ... filter to delete one Element
     *   }
     * })
     *
     */
    delete<T extends ElementDeleteArgs>(
      args: SelectSubset<T, ElementDeleteArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Element.
     * @param {ElementUpdateArgs} args - Arguments to update one Element.
     * @example
     * // Update one Element
     * const element = await prisma.element.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ElementUpdateArgs>(
      args: SelectSubset<T, ElementUpdateArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Elements.
     * @param {ElementDeleteManyArgs} args - Arguments to filter Elements to delete.
     * @example
     * // Delete a few Elements
     * const { count } = await prisma.element.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ElementDeleteManyArgs>(
      args?: SelectSubset<T, ElementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elements
     * const element = await prisma.element.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ElementUpdateManyArgs>(
      args: SelectSubset<T, ElementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Elements and returns the data updated in the database.
     * @param {ElementUpdateManyAndReturnArgs} args - Arguments to update many Elements.
     * @example
     * // Update many Elements
     * const element = await prisma.element.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Elements and only return the `id`
     * const elementWithIdOnly = await prisma.element.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ElementUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ElementUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Element.
     * @param {ElementUpsertArgs} args - Arguments to update or create a Element.
     * @example
     * // Update or create a Element
     * const element = await prisma.element.upsert({
     *   create: {
     *     // ... data to create a Element
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Element we want to update
     *   }
     * })
     */
    upsert<T extends ElementUpsertArgs>(
      args: SelectSubset<T, ElementUpsertArgs<ExtArgs>>
    ): Prisma__ElementClient<
      $Result.GetResult<
        Prisma.$ElementPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementCountArgs} args - Arguments to filter Elements to count.
     * @example
     * // Count the number of Elements
     * const count = await prisma.element.count({
     *   where: {
     *     // ... the filter for the Elements we want to count
     *   }
     * })
     **/
    count<T extends ElementCountArgs>(
      args?: Subset<T, ElementCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Element.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ElementAggregateArgs>(
      args: Subset<T, ElementAggregateArgs>
    ): Prisma.PrismaPromise<GetElementAggregateType<T>>;

    /**
     * Group by Element.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElementGroupByArgs['orderBy'] }
        : { orderBy?: ElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ElementGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetElementGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Element model
     */
    readonly fields: ElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Element.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    mapElements<T extends Element$mapElementsArgs<ExtArgs> = {}>(
      args?: Subset<T, Element$mapElementsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MapElementPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    spaceElements<T extends Element$spaceElementsArgs<ExtArgs> = {}>(
      args?: Subset<T, Element$spaceElementsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SpaceElementPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Element model
   */
  interface ElementFieldRefs {
    readonly id: FieldRef<'Element', 'Int'>;
    readonly width: FieldRef<'Element', 'Int'>;
    readonly height: FieldRef<'Element', 'Int'>;
    readonly imageUrl: FieldRef<'Element', 'String'>;
    readonly isStatic: FieldRef<'Element', 'Boolean'>;
    readonly creatorId: FieldRef<'Element', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Element findUnique
   */
  export type ElementFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * Filter, which Element to fetch.
     */
    where: ElementWhereUniqueInput;
  };

  /**
   * Element findUniqueOrThrow
   */
  export type ElementFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * Filter, which Element to fetch.
     */
    where: ElementWhereUniqueInput;
  };

  /**
   * Element findFirst
   */
  export type ElementFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * Filter, which Element to fetch.
     */
    where?: ElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elements to fetch.
     */
    orderBy?:
      | ElementOrderByWithRelationInput
      | ElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Elements.
     */
    cursor?: ElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[];
  };

  /**
   * Element findFirstOrThrow
   */
  export type ElementFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * Filter, which Element to fetch.
     */
    where?: ElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elements to fetch.
     */
    orderBy?:
      | ElementOrderByWithRelationInput
      | ElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Elements.
     */
    cursor?: ElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[];
  };

  /**
   * Element findMany
   */
  export type ElementFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * Filter, which Elements to fetch.
     */
    where?: ElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elements to fetch.
     */
    orderBy?:
      | ElementOrderByWithRelationInput
      | ElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Elements.
     */
    cursor?: ElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elements.
     */
    skip?: number;
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[];
  };

  /**
   * Element create
   */
  export type ElementCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * The data needed to create a Element.
     */
    data: XOR<ElementCreateInput, ElementUncheckedCreateInput>;
  };

  /**
   * Element createMany
   */
  export type ElementCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Elements.
     */
    data: ElementCreateManyInput | ElementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Element createManyAndReturn
   */
  export type ElementCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * The data used to create many Elements.
     */
    data: ElementCreateManyInput | ElementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Element update
   */
  export type ElementUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * The data needed to update a Element.
     */
    data: XOR<ElementUpdateInput, ElementUncheckedUpdateInput>;
    /**
     * Choose, which Element to update.
     */
    where: ElementWhereUniqueInput;
  };

  /**
   * Element updateMany
   */
  export type ElementUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Elements.
     */
    data: XOR<ElementUpdateManyMutationInput, ElementUncheckedUpdateManyInput>;
    /**
     * Filter which Elements to update
     */
    where?: ElementWhereInput;
    /**
     * Limit how many Elements to update.
     */
    limit?: number;
  };

  /**
   * Element updateManyAndReturn
   */
  export type ElementUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * The data used to update Elements.
     */
    data: XOR<ElementUpdateManyMutationInput, ElementUncheckedUpdateManyInput>;
    /**
     * Filter which Elements to update
     */
    where?: ElementWhereInput;
    /**
     * Limit how many Elements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Element upsert
   */
  export type ElementUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * The filter to search for the Element to update in case it exists.
     */
    where: ElementWhereUniqueInput;
    /**
     * In case the Element found by the `where` argument doesn't exist, create a new Element with this data.
     */
    create: XOR<ElementCreateInput, ElementUncheckedCreateInput>;
    /**
     * In case the Element was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElementUpdateInput, ElementUncheckedUpdateInput>;
  };

  /**
   * Element delete
   */
  export type ElementDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    /**
     * Filter which Element to delete.
     */
    where: ElementWhereUniqueInput;
  };

  /**
   * Element deleteMany
   */
  export type ElementDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Elements to delete
     */
    where?: ElementWhereInput;
    /**
     * Limit how many Elements to delete.
     */
    limit?: number;
  };

  /**
   * Element.mapElements
   */
  export type Element$mapElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    where?: MapElementWhereInput;
    orderBy?:
      | MapElementOrderByWithRelationInput
      | MapElementOrderByWithRelationInput[];
    cursor?: MapElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MapElementScalarFieldEnum | MapElementScalarFieldEnum[];
  };

  /**
   * Element.spaceElements
   */
  export type Element$spaceElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    where?: SpaceElementWhereInput;
    orderBy?:
      | SpaceElementOrderByWithRelationInput
      | SpaceElementOrderByWithRelationInput[];
    cursor?: SpaceElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[];
  };

  /**
   * Element without action
   */
  export type ElementDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
  };

  /**
   * Model Map
   */

  export type AggregateMap = {
    _count: MapCountAggregateOutputType | null;
    _avg: MapAvgAggregateOutputType | null;
    _sum: MapSumAggregateOutputType | null;
    _min: MapMinAggregateOutputType | null;
    _max: MapMaxAggregateOutputType | null;
  };

  export type MapAvgAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    creatorId: number | null;
    templateId: number | null;
  };

  export type MapSumAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    creatorId: number | null;
    templateId: number | null;
  };

  export type MapMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    width: number | null;
    height: number | null;
    bgImg: string | null;
    tilemapUrl: string | null;
    creatorId: number | null;
    isTemplate: boolean | null;
    accessCode: string | null;
    templateId: number | null;
  };

  export type MapMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    width: number | null;
    height: number | null;
    bgImg: string | null;
    tilemapUrl: string | null;
    creatorId: number | null;
    isTemplate: boolean | null;
    accessCode: string | null;
    templateId: number | null;
  };

  export type MapCountAggregateOutputType = {
    id: number;
    name: number;
    width: number;
    height: number;
    bgImg: number;
    tilemapUrl: number;
    creatorId: number;
    isTemplate: number;
    accessCode: number;
    templateId: number;
    _all: number;
  };

  export type MapAvgAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    creatorId?: true;
    templateId?: true;
  };

  export type MapSumAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    creatorId?: true;
    templateId?: true;
  };

  export type MapMinAggregateInputType = {
    id?: true;
    name?: true;
    width?: true;
    height?: true;
    bgImg?: true;
    tilemapUrl?: true;
    creatorId?: true;
    isTemplate?: true;
    accessCode?: true;
    templateId?: true;
  };

  export type MapMaxAggregateInputType = {
    id?: true;
    name?: true;
    width?: true;
    height?: true;
    bgImg?: true;
    tilemapUrl?: true;
    creatorId?: true;
    isTemplate?: true;
    accessCode?: true;
    templateId?: true;
  };

  export type MapCountAggregateInputType = {
    id?: true;
    name?: true;
    width?: true;
    height?: true;
    bgImg?: true;
    tilemapUrl?: true;
    creatorId?: true;
    isTemplate?: true;
    accessCode?: true;
    templateId?: true;
    _all?: true;
  };

  export type MapAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Map to aggregate.
     */
    where?: MapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Maps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Maps
     **/
    _count?: true | MapCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MapAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MapSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MapMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MapMaxAggregateInputType;
  };

  export type GetMapAggregateType<T extends MapAggregateArgs> = {
    [P in keyof T & keyof AggregateMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap[P]>
      : GetScalarType<T[P], AggregateMap[P]>;
  };

  export type MapGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapWhereInput;
    orderBy?: MapOrderByWithAggregationInput | MapOrderByWithAggregationInput[];
    by: MapScalarFieldEnum[] | MapScalarFieldEnum;
    having?: MapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MapCountAggregateInputType | true;
    _avg?: MapAvgAggregateInputType;
    _sum?: MapSumAggregateInputType;
    _min?: MapMinAggregateInputType;
    _max?: MapMaxAggregateInputType;
  };

  export type MapGroupByOutputType = {
    id: number;
    name: string;
    width: number;
    height: number;
    bgImg: string | null;
    tilemapUrl: string | null;
    creatorId: number;
    isTemplate: boolean;
    accessCode: string | null;
    templateId: number | null;
    _count: MapCountAggregateOutputType | null;
    _avg: MapAvgAggregateOutputType | null;
    _sum: MapSumAggregateOutputType | null;
    _min: MapMinAggregateOutputType | null;
    _max: MapMaxAggregateOutputType | null;
  };

  type GetMapGroupByPayload<T extends MapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MapGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MapGroupByOutputType[P]>
          : GetScalarType<T[P], MapGroupByOutputType[P]>;
      }
    >
  >;

  export type MapSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      width?: boolean;
      height?: boolean;
      bgImg?: boolean;
      tilemapUrl?: boolean;
      creatorId?: boolean;
      isTemplate?: boolean;
      accessCode?: boolean;
      templateId?: boolean;
      mapElements?: boolean | Map$mapElementsArgs<ExtArgs>;
      mapSpaces?: boolean | Map$mapSpacesArgs<ExtArgs>;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
      template?: boolean | Map$templateArgs<ExtArgs>;
      childMaps?: boolean | Map$childMapsArgs<ExtArgs>;
      messages?: boolean | Map$messagesArgs<ExtArgs>;
      user_map_visits?: boolean | Map$user_map_visitsArgs<ExtArgs>;
      _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['map']
  >;

  export type MapSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      width?: boolean;
      height?: boolean;
      bgImg?: boolean;
      tilemapUrl?: boolean;
      creatorId?: boolean;
      isTemplate?: boolean;
      accessCode?: boolean;
      templateId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
      template?: boolean | Map$templateArgs<ExtArgs>;
    },
    ExtArgs['result']['map']
  >;

  export type MapSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      width?: boolean;
      height?: boolean;
      bgImg?: boolean;
      tilemapUrl?: boolean;
      creatorId?: boolean;
      isTemplate?: boolean;
      accessCode?: boolean;
      templateId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
      template?: boolean | Map$templateArgs<ExtArgs>;
    },
    ExtArgs['result']['map']
  >;

  export type MapSelectScalar = {
    id?: boolean;
    name?: boolean;
    width?: boolean;
    height?: boolean;
    bgImg?: boolean;
    tilemapUrl?: boolean;
    creatorId?: boolean;
    isTemplate?: boolean;
    accessCode?: boolean;
    templateId?: boolean;
  };

  export type MapOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'width'
    | 'height'
    | 'bgImg'
    | 'tilemapUrl'
    | 'creatorId'
    | 'isTemplate'
    | 'accessCode'
    | 'templateId',
    ExtArgs['result']['map']
  >;
  export type MapInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mapElements?: boolean | Map$mapElementsArgs<ExtArgs>;
    mapSpaces?: boolean | Map$mapSpacesArgs<ExtArgs>;
    creator?: boolean | UserDefaultArgs<ExtArgs>;
    template?: boolean | Map$templateArgs<ExtArgs>;
    childMaps?: boolean | Map$childMapsArgs<ExtArgs>;
    messages?: boolean | Map$messagesArgs<ExtArgs>;
    user_map_visits?: boolean | Map$user_map_visitsArgs<ExtArgs>;
    _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type MapIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
    template?: boolean | Map$templateArgs<ExtArgs>;
  };
  export type MapIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
    template?: boolean | Map$templateArgs<ExtArgs>;
  };

  export type $MapPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Map';
    objects: {
      mapElements: Prisma.$MapElementPayload<ExtArgs>[];
      mapSpaces: Prisma.$MapSpacePayload<ExtArgs>[];
      creator: Prisma.$UserPayload<ExtArgs>;
      template: Prisma.$MapPayload<ExtArgs> | null;
      childMaps: Prisma.$MapPayload<ExtArgs>[];
      messages: Prisma.$MessagePayload<ExtArgs>[];
      user_map_visits: Prisma.$user_map_visitsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        width: number;
        height: number;
        bgImg: string | null;
        tilemapUrl: string | null;
        creatorId: number;
        isTemplate: boolean;
        accessCode: string | null;
        templateId: number | null;
      },
      ExtArgs['result']['map']
    >;
    composites: {};
  };

  type MapGetPayload<S extends boolean | null | undefined | MapDefaultArgs> =
    $Result.GetResult<Prisma.$MapPayload, S>;

  type MapCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MapCountAggregateInputType | true;
  };

  export interface MapDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Map'];
      meta: { name: 'Map' };
    };
    /**
     * Find zero or one Map that matches the filter.
     * @param {MapFindUniqueArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapFindUniqueArgs>(
      args: SelectSubset<T, MapFindUniqueArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Map that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapFindUniqueOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MapFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapFindFirstArgs>(
      args?: SelectSubset<T, MapFindFirstArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MapFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maps
     * const maps = await prisma.map.findMany()
     *
     * // Get first 10 Maps
     * const maps = await prisma.map.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mapWithIdOnly = await prisma.map.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MapFindManyArgs>(
      args?: SelectSubset<T, MapFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Map.
     * @param {MapCreateArgs} args - Arguments to create a Map.
     * @example
     * // Create one Map
     * const Map = await prisma.map.create({
     *   data: {
     *     // ... data to create a Map
     *   }
     * })
     *
     */
    create<T extends MapCreateArgs>(
      args: SelectSubset<T, MapCreateArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Maps.
     * @param {MapCreateManyArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MapCreateManyArgs>(
      args?: SelectSubset<T, MapCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Maps and returns the data saved in the database.
     * @param {MapCreateManyAndReturnArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MapCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MapCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Map.
     * @param {MapDeleteArgs} args - Arguments to delete one Map.
     * @example
     * // Delete one Map
     * const Map = await prisma.map.delete({
     *   where: {
     *     // ... filter to delete one Map
     *   }
     * })
     *
     */
    delete<T extends MapDeleteArgs>(
      args: SelectSubset<T, MapDeleteArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Map.
     * @param {MapUpdateArgs} args - Arguments to update one Map.
     * @example
     * // Update one Map
     * const map = await prisma.map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MapUpdateArgs>(
      args: SelectSubset<T, MapUpdateArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Maps.
     * @param {MapDeleteManyArgs} args - Arguments to filter Maps to delete.
     * @example
     * // Delete a few Maps
     * const { count } = await prisma.map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MapDeleteManyArgs>(
      args?: SelectSubset<T, MapDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MapUpdateManyArgs>(
      args: SelectSubset<T, MapUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Maps and returns the data updated in the database.
     * @param {MapUpdateManyAndReturnArgs} args - Arguments to update many Maps.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MapUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MapUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Map.
     * @param {MapUpsertArgs} args - Arguments to update or create a Map.
     * @example
     * // Update or create a Map
     * const map = await prisma.map.upsert({
     *   create: {
     *     // ... data to create a Map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map we want to update
     *   }
     * })
     */
    upsert<T extends MapUpsertArgs>(
      args: SelectSubset<T, MapUpsertArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapCountArgs} args - Arguments to filter Maps to count.
     * @example
     * // Count the number of Maps
     * const count = await prisma.map.count({
     *   where: {
     *     // ... the filter for the Maps we want to count
     *   }
     * })
     **/
    count<T extends MapCountArgs>(
      args?: Subset<T, MapCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MapAggregateArgs>(
      args: Subset<T, MapAggregateArgs>
    ): Prisma.PrismaPromise<GetMapAggregateType<T>>;

    /**
     * Group by Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MapGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetMapGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Map model
     */
    readonly fields: MapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    mapElements<T extends Map$mapElementsArgs<ExtArgs> = {}>(
      args?: Subset<T, Map$mapElementsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MapElementPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    mapSpaces<T extends Map$mapSpacesArgs<ExtArgs> = {}>(
      args?: Subset<T, Map$mapSpacesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MapSpacePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    template<T extends Map$templateArgs<ExtArgs> = {}>(
      args?: Subset<T, Map$templateArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    childMaps<T extends Map$childMapsArgs<ExtArgs> = {}>(
      args?: Subset<T, Map$childMapsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MapPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    messages<T extends Map$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Map$messagesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MessagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    user_map_visits<T extends Map$user_map_visitsArgs<ExtArgs> = {}>(
      args?: Subset<T, Map$user_map_visitsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$user_map_visitsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Map model
   */
  interface MapFieldRefs {
    readonly id: FieldRef<'Map', 'Int'>;
    readonly name: FieldRef<'Map', 'String'>;
    readonly width: FieldRef<'Map', 'Int'>;
    readonly height: FieldRef<'Map', 'Int'>;
    readonly bgImg: FieldRef<'Map', 'String'>;
    readonly tilemapUrl: FieldRef<'Map', 'String'>;
    readonly creatorId: FieldRef<'Map', 'Int'>;
    readonly isTemplate: FieldRef<'Map', 'Boolean'>;
    readonly accessCode: FieldRef<'Map', 'String'>;
    readonly templateId: FieldRef<'Map', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Map findUnique
   */
  export type MapFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput;
  };

  /**
   * Map findUniqueOrThrow
   */
  export type MapFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput;
  };

  /**
   * Map findFirst
   */
  export type MapFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Maps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[];
  };

  /**
   * Map findFirstOrThrow
   */
  export type MapFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Maps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[];
  };

  /**
   * Map findMany
   */
  export type MapFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * Filter, which Maps to fetch.
     */
    where?: MapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Maps.
     */
    cursor?: MapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Maps.
     */
    skip?: number;
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[];
  };

  /**
   * Map create
   */
  export type MapCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * The data needed to create a Map.
     */
    data: XOR<MapCreateInput, MapUncheckedCreateInput>;
  };

  /**
   * Map createMany
   */
  export type MapCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Map createManyAndReturn
   */
  export type MapCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Map update
   */
  export type MapUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * The data needed to update a Map.
     */
    data: XOR<MapUpdateInput, MapUncheckedUpdateInput>;
    /**
     * Choose, which Map to update.
     */
    where: MapWhereUniqueInput;
  };

  /**
   * Map updateMany
   */
  export type MapUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>;
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput;
    /**
     * Limit how many Maps to update.
     */
    limit?: number;
  };

  /**
   * Map updateManyAndReturn
   */
  export type MapUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>;
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput;
    /**
     * Limit how many Maps to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Map upsert
   */
  export type MapUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * The filter to search for the Map to update in case it exists.
     */
    where: MapWhereUniqueInput;
    /**
     * In case the Map found by the `where` argument doesn't exist, create a new Map with this data.
     */
    create: XOR<MapCreateInput, MapUncheckedCreateInput>;
    /**
     * In case the Map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapUpdateInput, MapUncheckedUpdateInput>;
  };

  /**
   * Map delete
   */
  export type MapDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    /**
     * Filter which Map to delete.
     */
    where: MapWhereUniqueInput;
  };

  /**
   * Map deleteMany
   */
  export type MapDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Maps to delete
     */
    where?: MapWhereInput;
    /**
     * Limit how many Maps to delete.
     */
    limit?: number;
  };

  /**
   * Map.mapElements
   */
  export type Map$mapElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    where?: MapElementWhereInput;
    orderBy?:
      | MapElementOrderByWithRelationInput
      | MapElementOrderByWithRelationInput[];
    cursor?: MapElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MapElementScalarFieldEnum | MapElementScalarFieldEnum[];
  };

  /**
   * Map.mapSpaces
   */
  export type Map$mapSpacesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    where?: MapSpaceWhereInput;
    orderBy?:
      | MapSpaceOrderByWithRelationInput
      | MapSpaceOrderByWithRelationInput[];
    cursor?: MapSpaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MapSpaceScalarFieldEnum | MapSpaceScalarFieldEnum[];
  };

  /**
   * Map.template
   */
  export type Map$templateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    where?: MapWhereInput;
  };

  /**
   * Map.childMaps
   */
  export type Map$childMapsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    where?: MapWhereInput;
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[];
    cursor?: MapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[];
  };

  /**
   * Map.messages
   */
  export type Map$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Map.user_map_visits
   */
  export type Map$user_map_visitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    where?: user_map_visitsWhereInput;
    orderBy?:
      | user_map_visitsOrderByWithRelationInput
      | user_map_visitsOrderByWithRelationInput[];
    cursor?: user_map_visitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | User_map_visitsScalarFieldEnum
      | User_map_visitsScalarFieldEnum[];
  };

  /**
   * Map without action
   */
  export type MapDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
    avatarId: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
    avatarId: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    avatarId: number | null;
    avatarName: string | null;
    role: $Enums.UserRole | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    avatarId: number | null;
    avatarName: string | null;
    role: $Enums.UserRole | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    avatarId: number;
    avatarName: number;
    role: number;
    lastLoginAt: number;
    createdAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
    avatarId?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
    avatarId?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    avatarId?: true;
    avatarName?: true;
    role?: true;
    lastLoginAt?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    avatarId?: true;
    avatarName?: true;
    role?: true;
    lastLoginAt?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    avatarId?: true;
    avatarName?: true;
    role?: true;
    lastLoginAt?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    username: string;
    password: string;
    avatarId: number | null;
    avatarName: string | null;
    role: $Enums.UserRole;
    lastLoginAt: Date | null;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      password?: boolean;
      avatarId?: boolean;
      avatarName?: boolean;
      role?: boolean;
      lastLoginAt?: boolean;
      createdAt?: boolean;
      avatar?: boolean | User$avatarArgs<ExtArgs>;
      spaces?: boolean | User$spacesArgs<ExtArgs>;
      createdAvatars?: boolean | User$createdAvatarsArgs<ExtArgs>;
      createdElements?: boolean | User$createdElementsArgs<ExtArgs>;
      createdMaps?: boolean | User$createdMapsArgs<ExtArgs>;
      messages?: boolean | User$messagesArgs<ExtArgs>;
      activityLogs?: boolean | User$activityLogsArgs<ExtArgs>;
      user_map_visits?: boolean | User$user_map_visitsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      password?: boolean;
      avatarId?: boolean;
      avatarName?: boolean;
      role?: boolean;
      lastLoginAt?: boolean;
      createdAt?: boolean;
      avatar?: boolean | User$avatarArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      password?: boolean;
      avatarId?: boolean;
      avatarName?: boolean;
      role?: boolean;
      lastLoginAt?: boolean;
      createdAt?: boolean;
      avatar?: boolean | User$avatarArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
    avatarId?: boolean;
    avatarName?: boolean;
    role?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'username'
    | 'password'
    | 'avatarId'
    | 'avatarName'
    | 'role'
    | 'lastLoginAt'
    | 'createdAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    avatar?: boolean | User$avatarArgs<ExtArgs>;
    spaces?: boolean | User$spacesArgs<ExtArgs>;
    createdAvatars?: boolean | User$createdAvatarsArgs<ExtArgs>;
    createdElements?: boolean | User$createdElementsArgs<ExtArgs>;
    createdMaps?: boolean | User$createdMapsArgs<ExtArgs>;
    messages?: boolean | User$messagesArgs<ExtArgs>;
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>;
    user_map_visits?: boolean | User$user_map_visitsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    avatar?: boolean | User$avatarArgs<ExtArgs>;
  };
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    avatar?: boolean | User$avatarArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      avatar: Prisma.$AvatarPayload<ExtArgs> | null;
      spaces: Prisma.$SpacePayload<ExtArgs>[];
      createdAvatars: Prisma.$AvatarPayload<ExtArgs>[];
      createdElements: Prisma.$ElementPayload<ExtArgs>[];
      createdMaps: Prisma.$MapPayload<ExtArgs>[];
      messages: Prisma.$MessagePayload<ExtArgs>[];
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[];
      user_map_visits: Prisma.$user_map_visitsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        username: string;
        password: string;
        avatarId: number | null;
        avatarName: string | null;
        role: $Enums.UserRole;
        lastLoginAt: Date | null;
        createdAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    avatar<T extends User$avatarArgs<ExtArgs> = {}>(
      args?: Subset<T, User$avatarArgs<ExtArgs>>
    ): Prisma__AvatarClient<
      $Result.GetResult<
        Prisma.$AvatarPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    spaces<T extends User$spacesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$spacesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SpacePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdAvatars<T extends User$createdAvatarsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdAvatarsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AvatarPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdElements<T extends User$createdElementsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdElementsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ElementPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdMaps<T extends User$createdMapsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdMapsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MapPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    messages<T extends User$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$messagesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MessagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$activityLogsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ActivityLogPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    user_map_visits<T extends User$user_map_visitsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$user_map_visitsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$user_map_visitsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly avatarId: FieldRef<'User', 'Int'>;
    readonly avatarName: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'UserRole'>;
    readonly lastLoginAt: FieldRef<'User', 'DateTime'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.avatar
   */
  export type User$avatarArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    where?: AvatarWhereInput;
  };

  /**
   * User.spaces
   */
  export type User$spacesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    where?: SpaceWhereInput;
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[];
    cursor?: SpaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[];
  };

  /**
   * User.createdAvatars
   */
  export type User$createdAvatarsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null;
    where?: AvatarWhereInput;
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[];
    cursor?: AvatarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[];
  };

  /**
   * User.createdElements
   */
  export type User$createdElementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Element
     */
    select?: ElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Element
     */
    omit?: ElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementInclude<ExtArgs> | null;
    where?: ElementWhereInput;
    orderBy?:
      | ElementOrderByWithRelationInput
      | ElementOrderByWithRelationInput[];
    cursor?: ElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ElementScalarFieldEnum | ElementScalarFieldEnum[];
  };

  /**
   * User.createdMaps
   */
  export type User$createdMapsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    where?: MapWhereInput;
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[];
    cursor?: MapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[];
  };

  /**
   * User.messages
   */
  export type User$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    where?: ActivityLogWhereInput;
    orderBy?:
      | ActivityLogOrderByWithRelationInput
      | ActivityLogOrderByWithRelationInput[];
    cursor?: ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[];
  };

  /**
   * User.user_map_visits
   */
  export type User$user_map_visitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    where?: user_map_visitsWhereInput;
    orderBy?:
      | user_map_visitsOrderByWithRelationInput
      | user_map_visitsOrderByWithRelationInput[];
    cursor?: user_map_visitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | User_map_visitsScalarFieldEnum
      | User_map_visitsScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null;
    _avg: ActivityLogAvgAggregateOutputType | null;
    _sum: ActivityLogSumAggregateOutputType | null;
    _min: ActivityLogMinAggregateOutputType | null;
    _max: ActivityLogMaxAggregateOutputType | null;
  };

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type ActivityLogSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type ActivityLogMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    date: Date | null;
  };

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    date: Date | null;
  };

  export type ActivityLogCountAggregateOutputType = {
    id: number;
    userId: number;
    date: number;
    _all: number;
  };

  export type ActivityLogAvgAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type ActivityLogSumAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type ActivityLogMinAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
  };

  export type ActivityLogMaxAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
  };

  export type ActivityLogCountAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
    _all?: true;
  };

  export type ActivityLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?:
      | ActivityLogOrderByWithRelationInput
      | ActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ActivityLogs
     **/
    _count?: true | ActivityLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ActivityLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ActivityLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ActivityLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ActivityLogMaxAggregateInputType;
  };

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> =
    {
      [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateActivityLog[P]>
        : GetScalarType<T[P], AggregateActivityLog[P]>;
    };

  export type ActivityLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActivityLogWhereInput;
    orderBy?:
      | ActivityLogOrderByWithAggregationInput
      | ActivityLogOrderByWithAggregationInput[];
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum;
    having?: ActivityLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityLogCountAggregateInputType | true;
    _avg?: ActivityLogAvgAggregateInputType;
    _sum?: ActivityLogSumAggregateInputType;
    _min?: ActivityLogMinAggregateInputType;
    _max?: ActivityLogMaxAggregateInputType;
  };

  export type ActivityLogGroupByOutputType = {
    id: number;
    userId: number;
    date: Date;
    _count: ActivityLogCountAggregateOutputType | null;
    _avg: ActivityLogAvgAggregateOutputType | null;
    _sum: ActivityLogSumAggregateOutputType | null;
    _min: ActivityLogMinAggregateOutputType | null;
    _max: ActivityLogMaxAggregateOutputType | null;
  };

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ActivityLogGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ActivityLogGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>;
        }
      >
    >;

  export type ActivityLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      date?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['activityLog']
  >;

  export type ActivityLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      date?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['activityLog']
  >;

  export type ActivityLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      date?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['activityLog']
  >;

  export type ActivityLogSelectScalar = {
    id?: boolean;
    userId?: boolean;
    date?: boolean;
  };

  export type ActivityLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'date',
    ExtArgs['result']['activityLog']
  >;
  export type ActivityLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ActivityLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ActivityLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ActivityLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ActivityLog';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        userId: number;
        date: Date;
      },
      ExtArgs['result']['activityLog']
    >;
    composites: {};
  };

  type ActivityLogGetPayload<
    S extends boolean | null | undefined | ActivityLogDefaultArgs,
  > = $Result.GetResult<Prisma.$ActivityLogPayload, S>;

  type ActivityLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ActivityLogFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ActivityLogCountAggregateInputType | true;
  };

  export interface ActivityLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'];
      meta: { name: 'ActivityLog' };
    };
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(
      args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(
      args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     *
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ActivityLogFindManyArgs>(
      args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     *
     */
    create<T extends ActivityLogCreateArgs>(
      args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ActivityLogCreateManyArgs>(
      args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     *
     */
    delete<T extends ActivityLogDeleteArgs>(
      args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ActivityLogUpdateArgs>(
      args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(
      args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(
      args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(
      args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>
    ): Prisma__ActivityLogClient<
      $Result.GetResult<
        Prisma.$ActivityLogPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
     **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ActivityLogAggregateArgs>(
      args: Subset<T, ActivityLogAggregateArgs>
    ): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>;

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetActivityLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ActivityLog model
     */
    readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<'ActivityLog', 'Int'>;
    readonly userId: FieldRef<'ActivityLog', 'Int'>;
    readonly date: FieldRef<'ActivityLog', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput;
  };

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput;
  };

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?:
      | ActivityLogOrderByWithRelationInput
      | ActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[];
  };

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?:
      | ActivityLogOrderByWithRelationInput
      | ActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[];
  };

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?:
      | ActivityLogOrderByWithRelationInput
      | ActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityLogs.
     */
    skip?: number;
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[];
  };

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>;
  };

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>;
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput;
  };

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<
      ActivityLogUpdateManyMutationInput,
      ActivityLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput;
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number;
  };

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<
      ActivityLogUpdateManyMutationInput,
      ActivityLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput;
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput;
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>;
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>;
  };

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput;
  };

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput;
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number;
  };

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null;
  };

  /**
   * Model Space
   */

  export type AggregateSpace = {
    _count: SpaceCountAggregateOutputType | null;
    _avg: SpaceAvgAggregateOutputType | null;
    _sum: SpaceSumAggregateOutputType | null;
    _min: SpaceMinAggregateOutputType | null;
    _max: SpaceMaxAggregateOutputType | null;
  };

  export type SpaceAvgAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    ownerId: number | null;
  };

  export type SpaceSumAggregateOutputType = {
    id: number | null;
    width: number | null;
    height: number | null;
    ownerId: number | null;
  };

  export type SpaceMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    width: number | null;
    height: number | null;
    thumbnail: string | null;
    bgImg: string | null;
    tilemapUrl: string | null;
    ownerId: number | null;
  };

  export type SpaceMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    width: number | null;
    height: number | null;
    thumbnail: string | null;
    bgImg: string | null;
    tilemapUrl: string | null;
    ownerId: number | null;
  };

  export type SpaceCountAggregateOutputType = {
    id: number;
    name: number;
    width: number;
    height: number;
    thumbnail: number;
    bgImg: number;
    tilemapUrl: number;
    ownerId: number;
    _all: number;
  };

  export type SpaceAvgAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    ownerId?: true;
  };

  export type SpaceSumAggregateInputType = {
    id?: true;
    width?: true;
    height?: true;
    ownerId?: true;
  };

  export type SpaceMinAggregateInputType = {
    id?: true;
    name?: true;
    width?: true;
    height?: true;
    thumbnail?: true;
    bgImg?: true;
    tilemapUrl?: true;
    ownerId?: true;
  };

  export type SpaceMaxAggregateInputType = {
    id?: true;
    name?: true;
    width?: true;
    height?: true;
    thumbnail?: true;
    bgImg?: true;
    tilemapUrl?: true;
    ownerId?: true;
  };

  export type SpaceCountAggregateInputType = {
    id?: true;
    name?: true;
    width?: true;
    height?: true;
    thumbnail?: true;
    bgImg?: true;
    tilemapUrl?: true;
    ownerId?: true;
    _all?: true;
  };

  export type SpaceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Space to aggregate.
     */
    where?: SpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Spaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Spaces
     **/
    _count?: true | SpaceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SpaceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SpaceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SpaceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SpaceMaxAggregateInputType;
  };

  export type GetSpaceAggregateType<T extends SpaceAggregateArgs> = {
    [P in keyof T & keyof AggregateSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpace[P]>
      : GetScalarType<T[P], AggregateSpace[P]>;
  };

  export type SpaceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SpaceWhereInput;
    orderBy?:
      | SpaceOrderByWithAggregationInput
      | SpaceOrderByWithAggregationInput[];
    by: SpaceScalarFieldEnum[] | SpaceScalarFieldEnum;
    having?: SpaceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SpaceCountAggregateInputType | true;
    _avg?: SpaceAvgAggregateInputType;
    _sum?: SpaceSumAggregateInputType;
    _min?: SpaceMinAggregateInputType;
    _max?: SpaceMaxAggregateInputType;
  };

  export type SpaceGroupByOutputType = {
    id: number;
    name: string;
    width: number;
    height: number;
    thumbnail: string | null;
    bgImg: string | null;
    tilemapUrl: string | null;
    ownerId: number;
    _count: SpaceCountAggregateOutputType | null;
    _avg: SpaceAvgAggregateOutputType | null;
    _sum: SpaceSumAggregateOutputType | null;
    _min: SpaceMinAggregateOutputType | null;
    _max: SpaceMaxAggregateOutputType | null;
  };

  type GetSpaceGroupByPayload<T extends SpaceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SpaceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SpaceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceGroupByOutputType[P]>;
        }
      >
    >;

  export type SpaceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      width?: boolean;
      height?: boolean;
      thumbnail?: boolean;
      bgImg?: boolean;
      tilemapUrl?: boolean;
      ownerId?: boolean;
      mapSpaces?: boolean | Space$mapSpacesArgs<ExtArgs>;
      messages?: boolean | Space$messagesArgs<ExtArgs>;
      elements?: boolean | Space$elementsArgs<ExtArgs>;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
      _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['space']
  >;

  export type SpaceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      width?: boolean;
      height?: boolean;
      thumbnail?: boolean;
      bgImg?: boolean;
      tilemapUrl?: boolean;
      ownerId?: boolean;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['space']
  >;

  export type SpaceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      width?: boolean;
      height?: boolean;
      thumbnail?: boolean;
      bgImg?: boolean;
      tilemapUrl?: boolean;
      ownerId?: boolean;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['space']
  >;

  export type SpaceSelectScalar = {
    id?: boolean;
    name?: boolean;
    width?: boolean;
    height?: boolean;
    thumbnail?: boolean;
    bgImg?: boolean;
    tilemapUrl?: boolean;
    ownerId?: boolean;
  };

  export type SpaceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'width'
    | 'height'
    | 'thumbnail'
    | 'bgImg'
    | 'tilemapUrl'
    | 'ownerId',
    ExtArgs['result']['space']
  >;
  export type SpaceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mapSpaces?: boolean | Space$mapSpacesArgs<ExtArgs>;
    messages?: boolean | Space$messagesArgs<ExtArgs>;
    elements?: boolean | Space$elementsArgs<ExtArgs>;
    owner?: boolean | UserDefaultArgs<ExtArgs>;
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SpaceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SpaceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SpacePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Space';
    objects: {
      mapSpaces: Prisma.$MapSpacePayload<ExtArgs>[];
      messages: Prisma.$MessagePayload<ExtArgs>[];
      elements: Prisma.$SpaceElementPayload<ExtArgs>[];
      owner: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        width: number;
        height: number;
        thumbnail: string | null;
        bgImg: string | null;
        tilemapUrl: string | null;
        ownerId: number;
      },
      ExtArgs['result']['space']
    >;
    composites: {};
  };

  type SpaceGetPayload<
    S extends boolean | null | undefined | SpaceDefaultArgs,
  > = $Result.GetResult<Prisma.$SpacePayload, S>;

  type SpaceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SpaceCountAggregateInputType | true;
  };

  export interface SpaceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Space'];
      meta: { name: 'Space' };
    };
    /**
     * Find zero or one Space that matches the filter.
     * @param {SpaceFindUniqueArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceFindUniqueArgs>(
      args: SelectSubset<T, SpaceFindUniqueArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Space that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceFindUniqueOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SpaceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceFindFirstArgs>(
      args?: SelectSubset<T, SpaceFindFirstArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Space that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SpaceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spaces
     * const spaces = await prisma.space.findMany()
     *
     * // Get first 10 Spaces
     * const spaces = await prisma.space.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const spaceWithIdOnly = await prisma.space.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SpaceFindManyArgs>(
      args?: SelectSubset<T, SpaceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Space.
     * @param {SpaceCreateArgs} args - Arguments to create a Space.
     * @example
     * // Create one Space
     * const Space = await prisma.space.create({
     *   data: {
     *     // ... data to create a Space
     *   }
     * })
     *
     */
    create<T extends SpaceCreateArgs>(
      args: SelectSubset<T, SpaceCreateArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Spaces.
     * @param {SpaceCreateManyArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SpaceCreateManyArgs>(
      args?: SelectSubset<T, SpaceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Spaces and returns the data saved in the database.
     * @param {SpaceCreateManyAndReturnArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SpaceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SpaceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Space.
     * @param {SpaceDeleteArgs} args - Arguments to delete one Space.
     * @example
     * // Delete one Space
     * const Space = await prisma.space.delete({
     *   where: {
     *     // ... filter to delete one Space
     *   }
     * })
     *
     */
    delete<T extends SpaceDeleteArgs>(
      args: SelectSubset<T, SpaceDeleteArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Space.
     * @param {SpaceUpdateArgs} args - Arguments to update one Space.
     * @example
     * // Update one Space
     * const space = await prisma.space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SpaceUpdateArgs>(
      args: SelectSubset<T, SpaceUpdateArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Spaces.
     * @param {SpaceDeleteManyArgs} args - Arguments to filter Spaces to delete.
     * @example
     * // Delete a few Spaces
     * const { count } = await prisma.space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SpaceDeleteManyArgs>(
      args?: SelectSubset<T, SpaceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SpaceUpdateManyArgs>(
      args: SelectSubset<T, SpaceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Spaces and returns the data updated in the database.
     * @param {SpaceUpdateManyAndReturnArgs} args - Arguments to update many Spaces.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SpaceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SpaceUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Space.
     * @param {SpaceUpsertArgs} args - Arguments to update or create a Space.
     * @example
     * // Update or create a Space
     * const space = await prisma.space.upsert({
     *   create: {
     *     // ... data to create a Space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Space we want to update
     *   }
     * })
     */
    upsert<T extends SpaceUpsertArgs>(
      args: SelectSubset<T, SpaceUpsertArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceCountArgs} args - Arguments to filter Spaces to count.
     * @example
     * // Count the number of Spaces
     * const count = await prisma.space.count({
     *   where: {
     *     // ... the filter for the Spaces we want to count
     *   }
     * })
     **/
    count<T extends SpaceCountArgs>(
      args?: Subset<T, SpaceCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SpaceAggregateArgs>(
      args: Subset<T, SpaceAggregateArgs>
    ): Prisma.PrismaPromise<GetSpaceAggregateType<T>>;

    /**
     * Group by Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceGroupByArgs['orderBy'] }
        : { orderBy?: SpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SpaceGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetSpaceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Space model
     */
    readonly fields: SpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    mapSpaces<T extends Space$mapSpacesArgs<ExtArgs> = {}>(
      args?: Subset<T, Space$mapSpacesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MapSpacePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    messages<T extends Space$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Space$messagesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MessagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    elements<T extends Space$elementsArgs<ExtArgs> = {}>(
      args?: Subset<T, Space$elementsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SpaceElementPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Space model
   */
  interface SpaceFieldRefs {
    readonly id: FieldRef<'Space', 'Int'>;
    readonly name: FieldRef<'Space', 'String'>;
    readonly width: FieldRef<'Space', 'Int'>;
    readonly height: FieldRef<'Space', 'Int'>;
    readonly thumbnail: FieldRef<'Space', 'String'>;
    readonly bgImg: FieldRef<'Space', 'String'>;
    readonly tilemapUrl: FieldRef<'Space', 'String'>;
    readonly ownerId: FieldRef<'Space', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Space findUnique
   */
  export type SpaceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput;
  };

  /**
   * Space findUniqueOrThrow
   */
  export type SpaceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput;
  };

  /**
   * Space findFirst
   */
  export type SpaceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Spaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[];
  };

  /**
   * Space findFirstOrThrow
   */
  export type SpaceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Spaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[];
  };

  /**
   * Space findMany
   */
  export type SpaceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * Filter, which Spaces to fetch.
     */
    where?: SpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Spaces.
     */
    cursor?: SpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Spaces.
     */
    skip?: number;
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[];
  };

  /**
   * Space create
   */
  export type SpaceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Space.
     */
    data: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>;
  };

  /**
   * Space createMany
   */
  export type SpaceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Space createManyAndReturn
   */
  export type SpaceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Space update
   */
  export type SpaceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Space.
     */
    data: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>;
    /**
     * Choose, which Space to update.
     */
    where: SpaceWhereUniqueInput;
  };

  /**
   * Space updateMany
   */
  export type SpaceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>;
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput;
    /**
     * Limit how many Spaces to update.
     */
    limit?: number;
  };

  /**
   * Space updateManyAndReturn
   */
  export type SpaceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>;
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput;
    /**
     * Limit how many Spaces to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Space upsert
   */
  export type SpaceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Space to update in case it exists.
     */
    where: SpaceWhereUniqueInput;
    /**
     * In case the Space found by the `where` argument doesn't exist, create a new Space with this data.
     */
    create: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>;
    /**
     * In case the Space was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>;
  };

  /**
   * Space delete
   */
  export type SpaceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    /**
     * Filter which Space to delete.
     */
    where: SpaceWhereUniqueInput;
  };

  /**
   * Space deleteMany
   */
  export type SpaceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Spaces to delete
     */
    where?: SpaceWhereInput;
    /**
     * Limit how many Spaces to delete.
     */
    limit?: number;
  };

  /**
   * Space.mapSpaces
   */
  export type Space$mapSpacesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    where?: MapSpaceWhereInput;
    orderBy?:
      | MapSpaceOrderByWithRelationInput
      | MapSpaceOrderByWithRelationInput[];
    cursor?: MapSpaceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MapSpaceScalarFieldEnum | MapSpaceScalarFieldEnum[];
  };

  /**
   * Space.messages
   */
  export type Space$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Space.elements
   */
  export type Space$elementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    where?: SpaceElementWhereInput;
    orderBy?:
      | SpaceElementOrderByWithRelationInput
      | SpaceElementOrderByWithRelationInput[];
    cursor?: SpaceElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[];
  };

  /**
   * Space without action
   */
  export type SpaceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
  };

  /**
   * Model MapElement
   */

  export type AggregateMapElement = {
    _count: MapElementCountAggregateOutputType | null;
    _avg: MapElementAvgAggregateOutputType | null;
    _sum: MapElementSumAggregateOutputType | null;
    _min: MapElementMinAggregateOutputType | null;
    _max: MapElementMaxAggregateOutputType | null;
  };

  export type MapElementAvgAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapElementSumAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapElementMinAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapElementMaxAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapElementCountAggregateOutputType = {
    id: number;
    mapId: number;
    elementId: number;
    x: number;
    y: number;
    _all: number;
  };

  export type MapElementAvgAggregateInputType = {
    id?: true;
    mapId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type MapElementSumAggregateInputType = {
    id?: true;
    mapId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type MapElementMinAggregateInputType = {
    id?: true;
    mapId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type MapElementMaxAggregateInputType = {
    id?: true;
    mapId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type MapElementCountAggregateInputType = {
    id?: true;
    mapId?: true;
    elementId?: true;
    x?: true;
    y?: true;
    _all?: true;
  };

  export type MapElementAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MapElement to aggregate.
     */
    where?: MapElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapElements to fetch.
     */
    orderBy?:
      | MapElementOrderByWithRelationInput
      | MapElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MapElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MapElements
     **/
    _count?: true | MapElementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MapElementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MapElementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MapElementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MapElementMaxAggregateInputType;
  };

  export type GetMapElementAggregateType<T extends MapElementAggregateArgs> = {
    [P in keyof T & keyof AggregateMapElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapElement[P]>
      : GetScalarType<T[P], AggregateMapElement[P]>;
  };

  export type MapElementGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapElementWhereInput;
    orderBy?:
      | MapElementOrderByWithAggregationInput
      | MapElementOrderByWithAggregationInput[];
    by: MapElementScalarFieldEnum[] | MapElementScalarFieldEnum;
    having?: MapElementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MapElementCountAggregateInputType | true;
    _avg?: MapElementAvgAggregateInputType;
    _sum?: MapElementSumAggregateInputType;
    _min?: MapElementMinAggregateInputType;
    _max?: MapElementMaxAggregateInputType;
  };

  export type MapElementGroupByOutputType = {
    id: number;
    mapId: number;
    elementId: number;
    x: number;
    y: number;
    _count: MapElementCountAggregateOutputType | null;
    _avg: MapElementAvgAggregateOutputType | null;
    _sum: MapElementSumAggregateOutputType | null;
    _min: MapElementMinAggregateOutputType | null;
    _max: MapElementMaxAggregateOutputType | null;
  };

  type GetMapElementGroupByPayload<T extends MapElementGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MapElementGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MapElementGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapElementGroupByOutputType[P]>
            : GetScalarType<T[P], MapElementGroupByOutputType[P]>;
        }
      >
    >;

  export type MapElementSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mapId?: boolean;
      elementId?: boolean;
      x?: boolean;
      y?: boolean;
      element?: boolean | ElementDefaultArgs<ExtArgs>;
      map?: boolean | MapDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mapElement']
  >;

  export type MapElementSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mapId?: boolean;
      elementId?: boolean;
      x?: boolean;
      y?: boolean;
      element?: boolean | ElementDefaultArgs<ExtArgs>;
      map?: boolean | MapDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mapElement']
  >;

  export type MapElementSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mapId?: boolean;
      elementId?: boolean;
      x?: boolean;
      y?: boolean;
      element?: boolean | ElementDefaultArgs<ExtArgs>;
      map?: boolean | MapDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mapElement']
  >;

  export type MapElementSelectScalar = {
    id?: boolean;
    mapId?: boolean;
    elementId?: boolean;
    x?: boolean;
    y?: boolean;
  };

  export type MapElementOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'mapId' | 'elementId' | 'x' | 'y',
    ExtArgs['result']['mapElement']
  >;
  export type MapElementInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    element?: boolean | ElementDefaultArgs<ExtArgs>;
    map?: boolean | MapDefaultArgs<ExtArgs>;
  };
  export type MapElementIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    element?: boolean | ElementDefaultArgs<ExtArgs>;
    map?: boolean | MapDefaultArgs<ExtArgs>;
  };
  export type MapElementIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    element?: boolean | ElementDefaultArgs<ExtArgs>;
    map?: boolean | MapDefaultArgs<ExtArgs>;
  };

  export type $MapElementPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MapElement';
    objects: {
      element: Prisma.$ElementPayload<ExtArgs>;
      map: Prisma.$MapPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        mapId: number;
        elementId: number;
        x: number;
        y: number;
      },
      ExtArgs['result']['mapElement']
    >;
    composites: {};
  };

  type MapElementGetPayload<
    S extends boolean | null | undefined | MapElementDefaultArgs,
  > = $Result.GetResult<Prisma.$MapElementPayload, S>;

  type MapElementCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MapElementFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MapElementCountAggregateInputType | true;
  };

  export interface MapElementDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MapElement'];
      meta: { name: 'MapElement' };
    };
    /**
     * Find zero or one MapElement that matches the filter.
     * @param {MapElementFindUniqueArgs} args - Arguments to find a MapElement
     * @example
     * // Get one MapElement
     * const mapElement = await prisma.mapElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapElementFindUniqueArgs>(
      args: SelectSubset<T, MapElementFindUniqueArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MapElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapElementFindUniqueOrThrowArgs} args - Arguments to find a MapElement
     * @example
     * // Get one MapElement
     * const mapElement = await prisma.mapElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapElementFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MapElementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MapElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementFindFirstArgs} args - Arguments to find a MapElement
     * @example
     * // Get one MapElement
     * const mapElement = await prisma.mapElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapElementFindFirstArgs>(
      args?: SelectSubset<T, MapElementFindFirstArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MapElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementFindFirstOrThrowArgs} args - Arguments to find a MapElement
     * @example
     * // Get one MapElement
     * const mapElement = await prisma.mapElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapElementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MapElementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MapElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapElements
     * const mapElements = await prisma.mapElement.findMany()
     *
     * // Get first 10 MapElements
     * const mapElements = await prisma.mapElement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mapElementWithIdOnly = await prisma.mapElement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MapElementFindManyArgs>(
      args?: SelectSubset<T, MapElementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MapElement.
     * @param {MapElementCreateArgs} args - Arguments to create a MapElement.
     * @example
     * // Create one MapElement
     * const MapElement = await prisma.mapElement.create({
     *   data: {
     *     // ... data to create a MapElement
     *   }
     * })
     *
     */
    create<T extends MapElementCreateArgs>(
      args: SelectSubset<T, MapElementCreateArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MapElements.
     * @param {MapElementCreateManyArgs} args - Arguments to create many MapElements.
     * @example
     * // Create many MapElements
     * const mapElement = await prisma.mapElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MapElementCreateManyArgs>(
      args?: SelectSubset<T, MapElementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MapElements and returns the data saved in the database.
     * @param {MapElementCreateManyAndReturnArgs} args - Arguments to create many MapElements.
     * @example
     * // Create many MapElements
     * const mapElement = await prisma.mapElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MapElements and only return the `id`
     * const mapElementWithIdOnly = await prisma.mapElement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MapElementCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MapElementCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MapElement.
     * @param {MapElementDeleteArgs} args - Arguments to delete one MapElement.
     * @example
     * // Delete one MapElement
     * const MapElement = await prisma.mapElement.delete({
     *   where: {
     *     // ... filter to delete one MapElement
     *   }
     * })
     *
     */
    delete<T extends MapElementDeleteArgs>(
      args: SelectSubset<T, MapElementDeleteArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MapElement.
     * @param {MapElementUpdateArgs} args - Arguments to update one MapElement.
     * @example
     * // Update one MapElement
     * const mapElement = await prisma.mapElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MapElementUpdateArgs>(
      args: SelectSubset<T, MapElementUpdateArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MapElements.
     * @param {MapElementDeleteManyArgs} args - Arguments to filter MapElements to delete.
     * @example
     * // Delete a few MapElements
     * const { count } = await prisma.mapElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MapElementDeleteManyArgs>(
      args?: SelectSubset<T, MapElementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MapElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapElements
     * const mapElement = await prisma.mapElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MapElementUpdateManyArgs>(
      args: SelectSubset<T, MapElementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MapElements and returns the data updated in the database.
     * @param {MapElementUpdateManyAndReturnArgs} args - Arguments to update many MapElements.
     * @example
     * // Update many MapElements
     * const mapElement = await prisma.mapElement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MapElements and only return the `id`
     * const mapElementWithIdOnly = await prisma.mapElement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MapElementUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MapElementUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MapElement.
     * @param {MapElementUpsertArgs} args - Arguments to update or create a MapElement.
     * @example
     * // Update or create a MapElement
     * const mapElement = await prisma.mapElement.upsert({
     *   create: {
     *     // ... data to create a MapElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapElement we want to update
     *   }
     * })
     */
    upsert<T extends MapElementUpsertArgs>(
      args: SelectSubset<T, MapElementUpsertArgs<ExtArgs>>
    ): Prisma__MapElementClient<
      $Result.GetResult<
        Prisma.$MapElementPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MapElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementCountArgs} args - Arguments to filter MapElements to count.
     * @example
     * // Count the number of MapElements
     * const count = await prisma.mapElement.count({
     *   where: {
     *     // ... the filter for the MapElements we want to count
     *   }
     * })
     **/
    count<T extends MapElementCountArgs>(
      args?: Subset<T, MapElementCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapElementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MapElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MapElementAggregateArgs>(
      args: Subset<T, MapElementAggregateArgs>
    ): Prisma.PrismaPromise<GetMapElementAggregateType<T>>;

    /**
     * Group by MapElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MapElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapElementGroupByArgs['orderBy'] }
        : { orderBy?: MapElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MapElementGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetMapElementGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MapElement model
     */
    readonly fields: MapElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapElementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    element<T extends ElementDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ElementDefaultArgs<ExtArgs>>
    ): Prisma__ElementClient<
      | $Result.GetResult<
          Prisma.$ElementPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    map<T extends MapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MapDefaultArgs<ExtArgs>>
    ): Prisma__MapClient<
      | $Result.GetResult<
          Prisma.$MapPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MapElement model
   */
  interface MapElementFieldRefs {
    readonly id: FieldRef<'MapElement', 'Int'>;
    readonly mapId: FieldRef<'MapElement', 'Int'>;
    readonly elementId: FieldRef<'MapElement', 'Int'>;
    readonly x: FieldRef<'MapElement', 'Int'>;
    readonly y: FieldRef<'MapElement', 'Int'>;
  }

  // Custom InputTypes
  /**
   * MapElement findUnique
   */
  export type MapElementFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * Filter, which MapElement to fetch.
     */
    where: MapElementWhereUniqueInput;
  };

  /**
   * MapElement findUniqueOrThrow
   */
  export type MapElementFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * Filter, which MapElement to fetch.
     */
    where: MapElementWhereUniqueInput;
  };

  /**
   * MapElement findFirst
   */
  export type MapElementFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * Filter, which MapElement to fetch.
     */
    where?: MapElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapElements to fetch.
     */
    orderBy?:
      | MapElementOrderByWithRelationInput
      | MapElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MapElements.
     */
    cursor?: MapElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MapElements.
     */
    distinct?: MapElementScalarFieldEnum | MapElementScalarFieldEnum[];
  };

  /**
   * MapElement findFirstOrThrow
   */
  export type MapElementFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * Filter, which MapElement to fetch.
     */
    where?: MapElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapElements to fetch.
     */
    orderBy?:
      | MapElementOrderByWithRelationInput
      | MapElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MapElements.
     */
    cursor?: MapElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MapElements.
     */
    distinct?: MapElementScalarFieldEnum | MapElementScalarFieldEnum[];
  };

  /**
   * MapElement findMany
   */
  export type MapElementFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * Filter, which MapElements to fetch.
     */
    where?: MapElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapElements to fetch.
     */
    orderBy?:
      | MapElementOrderByWithRelationInput
      | MapElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MapElements.
     */
    cursor?: MapElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapElements.
     */
    skip?: number;
    distinct?: MapElementScalarFieldEnum | MapElementScalarFieldEnum[];
  };

  /**
   * MapElement create
   */
  export type MapElementCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * The data needed to create a MapElement.
     */
    data: XOR<MapElementCreateInput, MapElementUncheckedCreateInput>;
  };

  /**
   * MapElement createMany
   */
  export type MapElementCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MapElements.
     */
    data: MapElementCreateManyInput | MapElementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MapElement createManyAndReturn
   */
  export type MapElementCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * The data used to create many MapElements.
     */
    data: MapElementCreateManyInput | MapElementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MapElement update
   */
  export type MapElementUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * The data needed to update a MapElement.
     */
    data: XOR<MapElementUpdateInput, MapElementUncheckedUpdateInput>;
    /**
     * Choose, which MapElement to update.
     */
    where: MapElementWhereUniqueInput;
  };

  /**
   * MapElement updateMany
   */
  export type MapElementUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MapElements.
     */
    data: XOR<
      MapElementUpdateManyMutationInput,
      MapElementUncheckedUpdateManyInput
    >;
    /**
     * Filter which MapElements to update
     */
    where?: MapElementWhereInput;
    /**
     * Limit how many MapElements to update.
     */
    limit?: number;
  };

  /**
   * MapElement updateManyAndReturn
   */
  export type MapElementUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * The data used to update MapElements.
     */
    data: XOR<
      MapElementUpdateManyMutationInput,
      MapElementUncheckedUpdateManyInput
    >;
    /**
     * Filter which MapElements to update
     */
    where?: MapElementWhereInput;
    /**
     * Limit how many MapElements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MapElement upsert
   */
  export type MapElementUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * The filter to search for the MapElement to update in case it exists.
     */
    where: MapElementWhereUniqueInput;
    /**
     * In case the MapElement found by the `where` argument doesn't exist, create a new MapElement with this data.
     */
    create: XOR<MapElementCreateInput, MapElementUncheckedCreateInput>;
    /**
     * In case the MapElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapElementUpdateInput, MapElementUncheckedUpdateInput>;
  };

  /**
   * MapElement delete
   */
  export type MapElementDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
    /**
     * Filter which MapElement to delete.
     */
    where: MapElementWhereUniqueInput;
  };

  /**
   * MapElement deleteMany
   */
  export type MapElementDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MapElements to delete
     */
    where?: MapElementWhereInput;
    /**
     * Limit how many MapElements to delete.
     */
    limit?: number;
  };

  /**
   * MapElement without action
   */
  export type MapElementDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapElement
     */
    select?: MapElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapElement
     */
    omit?: MapElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapElementInclude<ExtArgs> | null;
  };

  /**
   * Model MapSpace
   */

  export type AggregateMapSpace = {
    _count: MapSpaceCountAggregateOutputType | null;
    _avg: MapSpaceAvgAggregateOutputType | null;
    _sum: MapSpaceSumAggregateOutputType | null;
    _min: MapSpaceMinAggregateOutputType | null;
    _max: MapSpaceMaxAggregateOutputType | null;
  };

  export type MapSpaceAvgAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    spaceId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapSpaceSumAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    spaceId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapSpaceMinAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    spaceId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapSpaceMaxAggregateOutputType = {
    id: number | null;
    mapId: number | null;
    spaceId: number | null;
    x: number | null;
    y: number | null;
  };

  export type MapSpaceCountAggregateOutputType = {
    id: number;
    mapId: number;
    spaceId: number;
    x: number;
    y: number;
    _all: number;
  };

  export type MapSpaceAvgAggregateInputType = {
    id?: true;
    mapId?: true;
    spaceId?: true;
    x?: true;
    y?: true;
  };

  export type MapSpaceSumAggregateInputType = {
    id?: true;
    mapId?: true;
    spaceId?: true;
    x?: true;
    y?: true;
  };

  export type MapSpaceMinAggregateInputType = {
    id?: true;
    mapId?: true;
    spaceId?: true;
    x?: true;
    y?: true;
  };

  export type MapSpaceMaxAggregateInputType = {
    id?: true;
    mapId?: true;
    spaceId?: true;
    x?: true;
    y?: true;
  };

  export type MapSpaceCountAggregateInputType = {
    id?: true;
    mapId?: true;
    spaceId?: true;
    x?: true;
    y?: true;
    _all?: true;
  };

  export type MapSpaceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MapSpace to aggregate.
     */
    where?: MapSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapSpaces to fetch.
     */
    orderBy?:
      | MapSpaceOrderByWithRelationInput
      | MapSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MapSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapSpaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MapSpaces
     **/
    _count?: true | MapSpaceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MapSpaceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MapSpaceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MapSpaceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MapSpaceMaxAggregateInputType;
  };

  export type GetMapSpaceAggregateType<T extends MapSpaceAggregateArgs> = {
    [P in keyof T & keyof AggregateMapSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapSpace[P]>
      : GetScalarType<T[P], AggregateMapSpace[P]>;
  };

  export type MapSpaceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MapSpaceWhereInput;
    orderBy?:
      | MapSpaceOrderByWithAggregationInput
      | MapSpaceOrderByWithAggregationInput[];
    by: MapSpaceScalarFieldEnum[] | MapSpaceScalarFieldEnum;
    having?: MapSpaceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MapSpaceCountAggregateInputType | true;
    _avg?: MapSpaceAvgAggregateInputType;
    _sum?: MapSpaceSumAggregateInputType;
    _min?: MapSpaceMinAggregateInputType;
    _max?: MapSpaceMaxAggregateInputType;
  };

  export type MapSpaceGroupByOutputType = {
    id: number;
    mapId: number;
    spaceId: number;
    x: number;
    y: number;
    _count: MapSpaceCountAggregateOutputType | null;
    _avg: MapSpaceAvgAggregateOutputType | null;
    _sum: MapSpaceSumAggregateOutputType | null;
    _min: MapSpaceMinAggregateOutputType | null;
    _max: MapSpaceMaxAggregateOutputType | null;
  };

  type GetMapSpaceGroupByPayload<T extends MapSpaceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MapSpaceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MapSpaceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], MapSpaceGroupByOutputType[P]>;
        }
      >
    >;

  export type MapSpaceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mapId?: boolean;
      spaceId?: boolean;
      x?: boolean;
      y?: boolean;
      map?: boolean | MapDefaultArgs<ExtArgs>;
      space?: boolean | SpaceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mapSpace']
  >;

  export type MapSpaceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mapId?: boolean;
      spaceId?: boolean;
      x?: boolean;
      y?: boolean;
      map?: boolean | MapDefaultArgs<ExtArgs>;
      space?: boolean | SpaceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mapSpace']
  >;

  export type MapSpaceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mapId?: boolean;
      spaceId?: boolean;
      x?: boolean;
      y?: boolean;
      map?: boolean | MapDefaultArgs<ExtArgs>;
      space?: boolean | SpaceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mapSpace']
  >;

  export type MapSpaceSelectScalar = {
    id?: boolean;
    mapId?: boolean;
    spaceId?: boolean;
    x?: boolean;
    y?: boolean;
  };

  export type MapSpaceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'mapId' | 'spaceId' | 'x' | 'y',
    ExtArgs['result']['mapSpace']
  >;
  export type MapSpaceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    map?: boolean | MapDefaultArgs<ExtArgs>;
    space?: boolean | SpaceDefaultArgs<ExtArgs>;
  };
  export type MapSpaceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    map?: boolean | MapDefaultArgs<ExtArgs>;
    space?: boolean | SpaceDefaultArgs<ExtArgs>;
  };
  export type MapSpaceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    map?: boolean | MapDefaultArgs<ExtArgs>;
    space?: boolean | SpaceDefaultArgs<ExtArgs>;
  };

  export type $MapSpacePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MapSpace';
    objects: {
      map: Prisma.$MapPayload<ExtArgs>;
      space: Prisma.$SpacePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        mapId: number;
        spaceId: number;
        x: number;
        y: number;
      },
      ExtArgs['result']['mapSpace']
    >;
    composites: {};
  };

  type MapSpaceGetPayload<
    S extends boolean | null | undefined | MapSpaceDefaultArgs,
  > = $Result.GetResult<Prisma.$MapSpacePayload, S>;

  type MapSpaceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MapSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MapSpaceCountAggregateInputType | true;
  };

  export interface MapSpaceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MapSpace'];
      meta: { name: 'MapSpace' };
    };
    /**
     * Find zero or one MapSpace that matches the filter.
     * @param {MapSpaceFindUniqueArgs} args - Arguments to find a MapSpace
     * @example
     * // Get one MapSpace
     * const mapSpace = await prisma.mapSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapSpaceFindUniqueArgs>(
      args: SelectSubset<T, MapSpaceFindUniqueArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MapSpace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapSpaceFindUniqueOrThrowArgs} args - Arguments to find a MapSpace
     * @example
     * // Get one MapSpace
     * const mapSpace = await prisma.mapSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapSpaceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MapSpaceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MapSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapSpaceFindFirstArgs} args - Arguments to find a MapSpace
     * @example
     * // Get one MapSpace
     * const mapSpace = await prisma.mapSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapSpaceFindFirstArgs>(
      args?: SelectSubset<T, MapSpaceFindFirstArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MapSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapSpaceFindFirstOrThrowArgs} args - Arguments to find a MapSpace
     * @example
     * // Get one MapSpace
     * const mapSpace = await prisma.mapSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapSpaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MapSpaceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MapSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapSpaces
     * const mapSpaces = await prisma.mapSpace.findMany()
     *
     * // Get first 10 MapSpaces
     * const mapSpaces = await prisma.mapSpace.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mapSpaceWithIdOnly = await prisma.mapSpace.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MapSpaceFindManyArgs>(
      args?: SelectSubset<T, MapSpaceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MapSpace.
     * @param {MapSpaceCreateArgs} args - Arguments to create a MapSpace.
     * @example
     * // Create one MapSpace
     * const MapSpace = await prisma.mapSpace.create({
     *   data: {
     *     // ... data to create a MapSpace
     *   }
     * })
     *
     */
    create<T extends MapSpaceCreateArgs>(
      args: SelectSubset<T, MapSpaceCreateArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MapSpaces.
     * @param {MapSpaceCreateManyArgs} args - Arguments to create many MapSpaces.
     * @example
     * // Create many MapSpaces
     * const mapSpace = await prisma.mapSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MapSpaceCreateManyArgs>(
      args?: SelectSubset<T, MapSpaceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MapSpaces and returns the data saved in the database.
     * @param {MapSpaceCreateManyAndReturnArgs} args - Arguments to create many MapSpaces.
     * @example
     * // Create many MapSpaces
     * const mapSpace = await prisma.mapSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MapSpaces and only return the `id`
     * const mapSpaceWithIdOnly = await prisma.mapSpace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MapSpaceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MapSpaceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MapSpace.
     * @param {MapSpaceDeleteArgs} args - Arguments to delete one MapSpace.
     * @example
     * // Delete one MapSpace
     * const MapSpace = await prisma.mapSpace.delete({
     *   where: {
     *     // ... filter to delete one MapSpace
     *   }
     * })
     *
     */
    delete<T extends MapSpaceDeleteArgs>(
      args: SelectSubset<T, MapSpaceDeleteArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MapSpace.
     * @param {MapSpaceUpdateArgs} args - Arguments to update one MapSpace.
     * @example
     * // Update one MapSpace
     * const mapSpace = await prisma.mapSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MapSpaceUpdateArgs>(
      args: SelectSubset<T, MapSpaceUpdateArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MapSpaces.
     * @param {MapSpaceDeleteManyArgs} args - Arguments to filter MapSpaces to delete.
     * @example
     * // Delete a few MapSpaces
     * const { count } = await prisma.mapSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MapSpaceDeleteManyArgs>(
      args?: SelectSubset<T, MapSpaceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MapSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapSpaces
     * const mapSpace = await prisma.mapSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MapSpaceUpdateManyArgs>(
      args: SelectSubset<T, MapSpaceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MapSpaces and returns the data updated in the database.
     * @param {MapSpaceUpdateManyAndReturnArgs} args - Arguments to update many MapSpaces.
     * @example
     * // Update many MapSpaces
     * const mapSpace = await prisma.mapSpace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MapSpaces and only return the `id`
     * const mapSpaceWithIdOnly = await prisma.mapSpace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MapSpaceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MapSpaceUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MapSpace.
     * @param {MapSpaceUpsertArgs} args - Arguments to update or create a MapSpace.
     * @example
     * // Update or create a MapSpace
     * const mapSpace = await prisma.mapSpace.upsert({
     *   create: {
     *     // ... data to create a MapSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapSpace we want to update
     *   }
     * })
     */
    upsert<T extends MapSpaceUpsertArgs>(
      args: SelectSubset<T, MapSpaceUpsertArgs<ExtArgs>>
    ): Prisma__MapSpaceClient<
      $Result.GetResult<
        Prisma.$MapSpacePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MapSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapSpaceCountArgs} args - Arguments to filter MapSpaces to count.
     * @example
     * // Count the number of MapSpaces
     * const count = await prisma.mapSpace.count({
     *   where: {
     *     // ... the filter for the MapSpaces we want to count
     *   }
     * })
     **/
    count<T extends MapSpaceCountArgs>(
      args?: Subset<T, MapSpaceCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapSpaceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MapSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MapSpaceAggregateArgs>(
      args: Subset<T, MapSpaceAggregateArgs>
    ): Prisma.PrismaPromise<GetMapSpaceAggregateType<T>>;

    /**
     * Group by MapSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapSpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MapSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapSpaceGroupByArgs['orderBy'] }
        : { orderBy?: MapSpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MapSpaceGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetMapSpaceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MapSpace model
     */
    readonly fields: MapSpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapSpaceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    map<T extends MapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MapDefaultArgs<ExtArgs>>
    ): Prisma__MapClient<
      | $Result.GetResult<
          Prisma.$MapPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SpaceDefaultArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      | $Result.GetResult<
          Prisma.$SpacePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MapSpace model
   */
  interface MapSpaceFieldRefs {
    readonly id: FieldRef<'MapSpace', 'Int'>;
    readonly mapId: FieldRef<'MapSpace', 'Int'>;
    readonly spaceId: FieldRef<'MapSpace', 'Int'>;
    readonly x: FieldRef<'MapSpace', 'Int'>;
    readonly y: FieldRef<'MapSpace', 'Int'>;
  }

  // Custom InputTypes
  /**
   * MapSpace findUnique
   */
  export type MapSpaceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which MapSpace to fetch.
     */
    where: MapSpaceWhereUniqueInput;
  };

  /**
   * MapSpace findUniqueOrThrow
   */
  export type MapSpaceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which MapSpace to fetch.
     */
    where: MapSpaceWhereUniqueInput;
  };

  /**
   * MapSpace findFirst
   */
  export type MapSpaceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which MapSpace to fetch.
     */
    where?: MapSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapSpaces to fetch.
     */
    orderBy?:
      | MapSpaceOrderByWithRelationInput
      | MapSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MapSpaces.
     */
    cursor?: MapSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapSpaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MapSpaces.
     */
    distinct?: MapSpaceScalarFieldEnum | MapSpaceScalarFieldEnum[];
  };

  /**
   * MapSpace findFirstOrThrow
   */
  export type MapSpaceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which MapSpace to fetch.
     */
    where?: MapSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapSpaces to fetch.
     */
    orderBy?:
      | MapSpaceOrderByWithRelationInput
      | MapSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MapSpaces.
     */
    cursor?: MapSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapSpaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MapSpaces.
     */
    distinct?: MapSpaceScalarFieldEnum | MapSpaceScalarFieldEnum[];
  };

  /**
   * MapSpace findMany
   */
  export type MapSpaceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which MapSpaces to fetch.
     */
    where?: MapSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapSpaces to fetch.
     */
    orderBy?:
      | MapSpaceOrderByWithRelationInput
      | MapSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MapSpaces.
     */
    cursor?: MapSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapSpaces.
     */
    skip?: number;
    distinct?: MapSpaceScalarFieldEnum | MapSpaceScalarFieldEnum[];
  };

  /**
   * MapSpace create
   */
  export type MapSpaceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * The data needed to create a MapSpace.
     */
    data: XOR<MapSpaceCreateInput, MapSpaceUncheckedCreateInput>;
  };

  /**
   * MapSpace createMany
   */
  export type MapSpaceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MapSpaces.
     */
    data: MapSpaceCreateManyInput | MapSpaceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MapSpace createManyAndReturn
   */
  export type MapSpaceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * The data used to create many MapSpaces.
     */
    data: MapSpaceCreateManyInput | MapSpaceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MapSpace update
   */
  export type MapSpaceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * The data needed to update a MapSpace.
     */
    data: XOR<MapSpaceUpdateInput, MapSpaceUncheckedUpdateInput>;
    /**
     * Choose, which MapSpace to update.
     */
    where: MapSpaceWhereUniqueInput;
  };

  /**
   * MapSpace updateMany
   */
  export type MapSpaceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MapSpaces.
     */
    data: XOR<
      MapSpaceUpdateManyMutationInput,
      MapSpaceUncheckedUpdateManyInput
    >;
    /**
     * Filter which MapSpaces to update
     */
    where?: MapSpaceWhereInput;
    /**
     * Limit how many MapSpaces to update.
     */
    limit?: number;
  };

  /**
   * MapSpace updateManyAndReturn
   */
  export type MapSpaceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * The data used to update MapSpaces.
     */
    data: XOR<
      MapSpaceUpdateManyMutationInput,
      MapSpaceUncheckedUpdateManyInput
    >;
    /**
     * Filter which MapSpaces to update
     */
    where?: MapSpaceWhereInput;
    /**
     * Limit how many MapSpaces to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MapSpace upsert
   */
  export type MapSpaceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * The filter to search for the MapSpace to update in case it exists.
     */
    where: MapSpaceWhereUniqueInput;
    /**
     * In case the MapSpace found by the `where` argument doesn't exist, create a new MapSpace with this data.
     */
    create: XOR<MapSpaceCreateInput, MapSpaceUncheckedCreateInput>;
    /**
     * In case the MapSpace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapSpaceUpdateInput, MapSpaceUncheckedUpdateInput>;
  };

  /**
   * MapSpace delete
   */
  export type MapSpaceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
    /**
     * Filter which MapSpace to delete.
     */
    where: MapSpaceWhereUniqueInput;
  };

  /**
   * MapSpace deleteMany
   */
  export type MapSpaceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MapSpaces to delete
     */
    where?: MapSpaceWhereInput;
    /**
     * Limit how many MapSpaces to delete.
     */
    limit?: number;
  };

  /**
   * MapSpace without action
   */
  export type MapSpaceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MapSpace
     */
    select?: MapSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapSpace
     */
    omit?: MapSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapSpaceInclude<ExtArgs> | null;
  };

  /**
   * Model SpaceElement
   */

  export type AggregateSpaceElement = {
    _count: SpaceElementCountAggregateOutputType | null;
    _avg: SpaceElementAvgAggregateOutputType | null;
    _sum: SpaceElementSumAggregateOutputType | null;
    _min: SpaceElementMinAggregateOutputType | null;
    _max: SpaceElementMaxAggregateOutputType | null;
  };

  export type SpaceElementAvgAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type SpaceElementSumAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type SpaceElementMinAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type SpaceElementMaxAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    elementId: number | null;
    x: number | null;
    y: number | null;
  };

  export type SpaceElementCountAggregateOutputType = {
    id: number;
    spaceId: number;
    elementId: number;
    x: number;
    y: number;
    _all: number;
  };

  export type SpaceElementAvgAggregateInputType = {
    id?: true;
    spaceId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type SpaceElementSumAggregateInputType = {
    id?: true;
    spaceId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type SpaceElementMinAggregateInputType = {
    id?: true;
    spaceId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type SpaceElementMaxAggregateInputType = {
    id?: true;
    spaceId?: true;
    elementId?: true;
    x?: true;
    y?: true;
  };

  export type SpaceElementCountAggregateInputType = {
    id?: true;
    spaceId?: true;
    elementId?: true;
    x?: true;
    y?: true;
    _all?: true;
  };

  export type SpaceElementAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SpaceElement to aggregate.
     */
    where?: SpaceElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?:
      | SpaceElementOrderByWithRelationInput
      | SpaceElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SpaceElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SpaceElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SpaceElements
     **/
    _count?: true | SpaceElementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SpaceElementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SpaceElementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SpaceElementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SpaceElementMaxAggregateInputType;
  };

  export type GetSpaceElementAggregateType<
    T extends SpaceElementAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSpaceElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpaceElement[P]>
      : GetScalarType<T[P], AggregateSpaceElement[P]>;
  };

  export type SpaceElementGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SpaceElementWhereInput;
    orderBy?:
      | SpaceElementOrderByWithAggregationInput
      | SpaceElementOrderByWithAggregationInput[];
    by: SpaceElementScalarFieldEnum[] | SpaceElementScalarFieldEnum;
    having?: SpaceElementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SpaceElementCountAggregateInputType | true;
    _avg?: SpaceElementAvgAggregateInputType;
    _sum?: SpaceElementSumAggregateInputType;
    _min?: SpaceElementMinAggregateInputType;
    _max?: SpaceElementMaxAggregateInputType;
  };

  export type SpaceElementGroupByOutputType = {
    id: number;
    spaceId: number;
    elementId: number;
    x: number;
    y: number;
    _count: SpaceElementCountAggregateOutputType | null;
    _avg: SpaceElementAvgAggregateOutputType | null;
    _sum: SpaceElementSumAggregateOutputType | null;
    _min: SpaceElementMinAggregateOutputType | null;
    _max: SpaceElementMaxAggregateOutputType | null;
  };

  type GetSpaceElementGroupByPayload<T extends SpaceElementGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SpaceElementGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof SpaceElementGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceElementGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceElementGroupByOutputType[P]>;
        }
      >
    >;

  export type SpaceElementSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      spaceId?: boolean;
      elementId?: boolean;
      x?: boolean;
      y?: boolean;
      element?: boolean | ElementDefaultArgs<ExtArgs>;
      space?: boolean | SpaceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['spaceElement']
  >;

  export type SpaceElementSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      spaceId?: boolean;
      elementId?: boolean;
      x?: boolean;
      y?: boolean;
      element?: boolean | ElementDefaultArgs<ExtArgs>;
      space?: boolean | SpaceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['spaceElement']
  >;

  export type SpaceElementSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      spaceId?: boolean;
      elementId?: boolean;
      x?: boolean;
      y?: boolean;
      element?: boolean | ElementDefaultArgs<ExtArgs>;
      space?: boolean | SpaceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['spaceElement']
  >;

  export type SpaceElementSelectScalar = {
    id?: boolean;
    spaceId?: boolean;
    elementId?: boolean;
    x?: boolean;
    y?: boolean;
  };

  export type SpaceElementOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'spaceId' | 'elementId' | 'x' | 'y',
    ExtArgs['result']['spaceElement']
  >;
  export type SpaceElementInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    element?: boolean | ElementDefaultArgs<ExtArgs>;
    space?: boolean | SpaceDefaultArgs<ExtArgs>;
  };
  export type SpaceElementIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    element?: boolean | ElementDefaultArgs<ExtArgs>;
    space?: boolean | SpaceDefaultArgs<ExtArgs>;
  };
  export type SpaceElementIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    element?: boolean | ElementDefaultArgs<ExtArgs>;
    space?: boolean | SpaceDefaultArgs<ExtArgs>;
  };

  export type $SpaceElementPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'SpaceElement';
    objects: {
      element: Prisma.$ElementPayload<ExtArgs>;
      space: Prisma.$SpacePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        spaceId: number;
        elementId: number;
        x: number;
        y: number;
      },
      ExtArgs['result']['spaceElement']
    >;
    composites: {};
  };

  type SpaceElementGetPayload<
    S extends boolean | null | undefined | SpaceElementDefaultArgs,
  > = $Result.GetResult<Prisma.$SpaceElementPayload, S>;

  type SpaceElementCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SpaceElementFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SpaceElementCountAggregateInputType | true;
  };

  export interface SpaceElementDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['SpaceElement'];
      meta: { name: 'SpaceElement' };
    };
    /**
     * Find zero or one SpaceElement that matches the filter.
     * @param {SpaceElementFindUniqueArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceElementFindUniqueArgs>(
      args: SelectSubset<T, SpaceElementFindUniqueArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SpaceElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceElementFindUniqueOrThrowArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceElementFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SpaceElementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SpaceElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementFindFirstArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceElementFindFirstArgs>(
      args?: SelectSubset<T, SpaceElementFindFirstArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SpaceElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementFindFirstOrThrowArgs} args - Arguments to find a SpaceElement
     * @example
     * // Get one SpaceElement
     * const spaceElement = await prisma.spaceElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceElementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SpaceElementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SpaceElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpaceElements
     * const spaceElements = await prisma.spaceElement.findMany()
     *
     * // Get first 10 SpaceElements
     * const spaceElements = await prisma.spaceElement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const spaceElementWithIdOnly = await prisma.spaceElement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SpaceElementFindManyArgs>(
      args?: SelectSubset<T, SpaceElementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SpaceElement.
     * @param {SpaceElementCreateArgs} args - Arguments to create a SpaceElement.
     * @example
     * // Create one SpaceElement
     * const SpaceElement = await prisma.spaceElement.create({
     *   data: {
     *     // ... data to create a SpaceElement
     *   }
     * })
     *
     */
    create<T extends SpaceElementCreateArgs>(
      args: SelectSubset<T, SpaceElementCreateArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SpaceElements.
     * @param {SpaceElementCreateManyArgs} args - Arguments to create many SpaceElements.
     * @example
     * // Create many SpaceElements
     * const spaceElement = await prisma.spaceElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SpaceElementCreateManyArgs>(
      args?: SelectSubset<T, SpaceElementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SpaceElements and returns the data saved in the database.
     * @param {SpaceElementCreateManyAndReturnArgs} args - Arguments to create many SpaceElements.
     * @example
     * // Create many SpaceElements
     * const spaceElement = await prisma.spaceElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SpaceElements and only return the `id`
     * const spaceElementWithIdOnly = await prisma.spaceElement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SpaceElementCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SpaceElementCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SpaceElement.
     * @param {SpaceElementDeleteArgs} args - Arguments to delete one SpaceElement.
     * @example
     * // Delete one SpaceElement
     * const SpaceElement = await prisma.spaceElement.delete({
     *   where: {
     *     // ... filter to delete one SpaceElement
     *   }
     * })
     *
     */
    delete<T extends SpaceElementDeleteArgs>(
      args: SelectSubset<T, SpaceElementDeleteArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SpaceElement.
     * @param {SpaceElementUpdateArgs} args - Arguments to update one SpaceElement.
     * @example
     * // Update one SpaceElement
     * const spaceElement = await prisma.spaceElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SpaceElementUpdateArgs>(
      args: SelectSubset<T, SpaceElementUpdateArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SpaceElements.
     * @param {SpaceElementDeleteManyArgs} args - Arguments to filter SpaceElements to delete.
     * @example
     * // Delete a few SpaceElements
     * const { count } = await prisma.spaceElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SpaceElementDeleteManyArgs>(
      args?: SelectSubset<T, SpaceElementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SpaceElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpaceElements
     * const spaceElement = await prisma.spaceElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SpaceElementUpdateManyArgs>(
      args: SelectSubset<T, SpaceElementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SpaceElements and returns the data updated in the database.
     * @param {SpaceElementUpdateManyAndReturnArgs} args - Arguments to update many SpaceElements.
     * @example
     * // Update many SpaceElements
     * const spaceElement = await prisma.spaceElement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SpaceElements and only return the `id`
     * const spaceElementWithIdOnly = await prisma.spaceElement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SpaceElementUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SpaceElementUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SpaceElement.
     * @param {SpaceElementUpsertArgs} args - Arguments to update or create a SpaceElement.
     * @example
     * // Update or create a SpaceElement
     * const spaceElement = await prisma.spaceElement.upsert({
     *   create: {
     *     // ... data to create a SpaceElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpaceElement we want to update
     *   }
     * })
     */
    upsert<T extends SpaceElementUpsertArgs>(
      args: SelectSubset<T, SpaceElementUpsertArgs<ExtArgs>>
    ): Prisma__SpaceElementClient<
      $Result.GetResult<
        Prisma.$SpaceElementPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SpaceElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementCountArgs} args - Arguments to filter SpaceElements to count.
     * @example
     * // Count the number of SpaceElements
     * const count = await prisma.spaceElement.count({
     *   where: {
     *     // ... the filter for the SpaceElements we want to count
     *   }
     * })
     **/
    count<T extends SpaceElementCountArgs>(
      args?: Subset<T, SpaceElementCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceElementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SpaceElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SpaceElementAggregateArgs>(
      args: Subset<T, SpaceElementAggregateArgs>
    ): Prisma.PrismaPromise<GetSpaceElementAggregateType<T>>;

    /**
     * Group by SpaceElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SpaceElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceElementGroupByArgs['orderBy'] }
        : { orderBy?: SpaceElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SpaceElementGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSpaceElementGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SpaceElement model
     */
    readonly fields: SpaceElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpaceElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceElementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    element<T extends ElementDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ElementDefaultArgs<ExtArgs>>
    ): Prisma__ElementClient<
      | $Result.GetResult<
          Prisma.$ElementPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SpaceDefaultArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      | $Result.GetResult<
          Prisma.$SpacePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SpaceElement model
   */
  interface SpaceElementFieldRefs {
    readonly id: FieldRef<'SpaceElement', 'Int'>;
    readonly spaceId: FieldRef<'SpaceElement', 'Int'>;
    readonly elementId: FieldRef<'SpaceElement', 'Int'>;
    readonly x: FieldRef<'SpaceElement', 'Int'>;
    readonly y: FieldRef<'SpaceElement', 'Int'>;
  }

  // Custom InputTypes
  /**
   * SpaceElement findUnique
   */
  export type SpaceElementFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * Filter, which SpaceElement to fetch.
     */
    where: SpaceElementWhereUniqueInput;
  };

  /**
   * SpaceElement findUniqueOrThrow
   */
  export type SpaceElementFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * Filter, which SpaceElement to fetch.
     */
    where: SpaceElementWhereUniqueInput;
  };

  /**
   * SpaceElement findFirst
   */
  export type SpaceElementFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * Filter, which SpaceElement to fetch.
     */
    where?: SpaceElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?:
      | SpaceElementOrderByWithRelationInput
      | SpaceElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SpaceElements.
     */
    cursor?: SpaceElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SpaceElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SpaceElements.
     */
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[];
  };

  /**
   * SpaceElement findFirstOrThrow
   */
  export type SpaceElementFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * Filter, which SpaceElement to fetch.
     */
    where?: SpaceElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?:
      | SpaceElementOrderByWithRelationInput
      | SpaceElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SpaceElements.
     */
    cursor?: SpaceElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SpaceElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SpaceElements.
     */
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[];
  };

  /**
   * SpaceElement findMany
   */
  export type SpaceElementFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * Filter, which SpaceElements to fetch.
     */
    where?: SpaceElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SpaceElements to fetch.
     */
    orderBy?:
      | SpaceElementOrderByWithRelationInput
      | SpaceElementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SpaceElements.
     */
    cursor?: SpaceElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SpaceElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SpaceElements.
     */
    skip?: number;
    distinct?: SpaceElementScalarFieldEnum | SpaceElementScalarFieldEnum[];
  };

  /**
   * SpaceElement create
   */
  export type SpaceElementCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * The data needed to create a SpaceElement.
     */
    data: XOR<SpaceElementCreateInput, SpaceElementUncheckedCreateInput>;
  };

  /**
   * SpaceElement createMany
   */
  export type SpaceElementCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SpaceElements.
     */
    data: SpaceElementCreateManyInput | SpaceElementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SpaceElement createManyAndReturn
   */
  export type SpaceElementCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * The data used to create many SpaceElements.
     */
    data: SpaceElementCreateManyInput | SpaceElementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SpaceElement update
   */
  export type SpaceElementUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * The data needed to update a SpaceElement.
     */
    data: XOR<SpaceElementUpdateInput, SpaceElementUncheckedUpdateInput>;
    /**
     * Choose, which SpaceElement to update.
     */
    where: SpaceElementWhereUniqueInput;
  };

  /**
   * SpaceElement updateMany
   */
  export type SpaceElementUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SpaceElements.
     */
    data: XOR<
      SpaceElementUpdateManyMutationInput,
      SpaceElementUncheckedUpdateManyInput
    >;
    /**
     * Filter which SpaceElements to update
     */
    where?: SpaceElementWhereInput;
    /**
     * Limit how many SpaceElements to update.
     */
    limit?: number;
  };

  /**
   * SpaceElement updateManyAndReturn
   */
  export type SpaceElementUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * The data used to update SpaceElements.
     */
    data: XOR<
      SpaceElementUpdateManyMutationInput,
      SpaceElementUncheckedUpdateManyInput
    >;
    /**
     * Filter which SpaceElements to update
     */
    where?: SpaceElementWhereInput;
    /**
     * Limit how many SpaceElements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SpaceElement upsert
   */
  export type SpaceElementUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * The filter to search for the SpaceElement to update in case it exists.
     */
    where: SpaceElementWhereUniqueInput;
    /**
     * In case the SpaceElement found by the `where` argument doesn't exist, create a new SpaceElement with this data.
     */
    create: XOR<SpaceElementCreateInput, SpaceElementUncheckedCreateInput>;
    /**
     * In case the SpaceElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceElementUpdateInput, SpaceElementUncheckedUpdateInput>;
  };

  /**
   * SpaceElement delete
   */
  export type SpaceElementDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
    /**
     * Filter which SpaceElement to delete.
     */
    where: SpaceElementWhereUniqueInput;
  };

  /**
   * SpaceElement deleteMany
   */
  export type SpaceElementDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SpaceElements to delete
     */
    where?: SpaceElementWhereInput;
    /**
     * Limit how many SpaceElements to delete.
     */
    limit?: number;
  };

  /**
   * SpaceElement without action
   */
  export type SpaceElementDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SpaceElement
     */
    select?: SpaceElementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SpaceElement
     */
    omit?: SpaceElementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceElementInclude<ExtArgs> | null;
  };

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  export type MessageAvgAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    userId: number | null;
    mapId: number | null;
  };

  export type MessageSumAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    userId: number | null;
    mapId: number | null;
  };

  export type MessageMinAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    userId: number | null;
    displayName: string | null;
    text: string | null;
    createdAt: Date | null;
    mapId: number | null;
  };

  export type MessageMaxAggregateOutputType = {
    id: number | null;
    spaceId: number | null;
    userId: number | null;
    displayName: string | null;
    text: string | null;
    createdAt: Date | null;
    mapId: number | null;
  };

  export type MessageCountAggregateOutputType = {
    id: number;
    spaceId: number;
    userId: number;
    displayName: number;
    text: number;
    createdAt: number;
    mapId: number;
    _all: number;
  };

  export type MessageAvgAggregateInputType = {
    id?: true;
    spaceId?: true;
    userId?: true;
    mapId?: true;
  };

  export type MessageSumAggregateInputType = {
    id?: true;
    spaceId?: true;
    userId?: true;
    mapId?: true;
  };

  export type MessageMinAggregateInputType = {
    id?: true;
    spaceId?: true;
    userId?: true;
    displayName?: true;
    text?: true;
    createdAt?: true;
    mapId?: true;
  };

  export type MessageMaxAggregateInputType = {
    id?: true;
    spaceId?: true;
    userId?: true;
    displayName?: true;
    text?: true;
    createdAt?: true;
    mapId?: true;
  };

  export type MessageCountAggregateInputType = {
    id?: true;
    spaceId?: true;
    userId?: true;
    displayName?: true;
    text?: true;
    createdAt?: true;
    mapId?: true;
    _all?: true;
  };

  export type MessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
     **/
    _count?: true | MessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MessageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MessageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType;
  };

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>;
  };

  export type MessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithAggregationInput
      | MessageOrderByWithAggregationInput[];
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum;
    having?: MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
  };

  export type MessageGroupByOutputType = {
    id: number;
    spaceId: number | null;
    userId: number;
    displayName: string;
    text: string;
    createdAt: Date;
    mapId: number | null;
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MessageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>;
        }
      >
    >;

  export type MessageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      spaceId?: boolean;
      userId?: boolean;
      displayName?: boolean;
      text?: boolean;
      createdAt?: boolean;
      mapId?: boolean;
      map?: boolean | Message$mapArgs<ExtArgs>;
      space?: boolean | Message$spaceArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      spaceId?: boolean;
      userId?: boolean;
      displayName?: boolean;
      text?: boolean;
      createdAt?: boolean;
      mapId?: boolean;
      map?: boolean | Message$mapArgs<ExtArgs>;
      space?: boolean | Message$spaceArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      spaceId?: boolean;
      userId?: boolean;
      displayName?: boolean;
      text?: boolean;
      createdAt?: boolean;
      mapId?: boolean;
      map?: boolean | Message$mapArgs<ExtArgs>;
      space?: boolean | Message$spaceArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectScalar = {
    id?: boolean;
    spaceId?: boolean;
    userId?: boolean;
    displayName?: boolean;
    text?: boolean;
    createdAt?: boolean;
    mapId?: boolean;
  };

  export type MessageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'spaceId'
    | 'userId'
    | 'displayName'
    | 'text'
    | 'createdAt'
    | 'mapId',
    ExtArgs['result']['message']
  >;
  export type MessageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    map?: boolean | Message$mapArgs<ExtArgs>;
    space?: boolean | Message$spaceArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MessageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    map?: boolean | Message$mapArgs<ExtArgs>;
    space?: boolean | Message$spaceArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MessageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    map?: boolean | Message$mapArgs<ExtArgs>;
    space?: boolean | Message$spaceArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $MessagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Message';
    objects: {
      map: Prisma.$MapPayload<ExtArgs> | null;
      space: Prisma.$SpacePayload<ExtArgs> | null;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        spaceId: number | null;
        userId: number;
        displayName: string;
        text: string;
        createdAt: Date;
        mapId: number | null;
      },
      ExtArgs['result']['message']
    >;
    composites: {};
  };

  type MessageGetPayload<
    S extends boolean | null | undefined | MessageDefaultArgs,
  > = $Result.GetResult<Prisma.$MessagePayload, S>;

  type MessageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true;
  };

  export interface MessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Message'];
      meta: { name: 'Message' };
    };
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     *
     */
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     *
     */
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
     **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>;

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetMessageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Message model
     */
    readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    map<T extends Message$mapArgs<ExtArgs> = {}>(
      args?: Subset<T, Message$mapArgs<ExtArgs>>
    ): Prisma__MapClient<
      $Result.GetResult<
        Prisma.$MapPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    space<T extends Message$spaceArgs<ExtArgs> = {}>(
      args?: Subset<T, Message$spaceArgs<ExtArgs>>
    ): Prisma__SpaceClient<
      $Result.GetResult<
        Prisma.$SpacePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<'Message', 'Int'>;
    readonly spaceId: FieldRef<'Message', 'Int'>;
    readonly userId: FieldRef<'Message', 'Int'>;
    readonly displayName: FieldRef<'Message', 'String'>;
    readonly text: FieldRef<'Message', 'String'>;
    readonly createdAt: FieldRef<'Message', 'DateTime'>;
    readonly mapId: FieldRef<'Message', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message create
   */
  export type MessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
  };

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Message update
   */
  export type MessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
  };

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput;
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
  };

  /**
   * Message delete
   */
  export type MessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to delete.
     */
    limit?: number;
  };

  /**
   * Message.map
   */
  export type Message$mapArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null;
    where?: MapWhereInput;
  };

  /**
   * Message.space
   */
  export type Message$spaceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null;
    where?: SpaceWhereInput;
  };

  /**
   * Message without action
   */
  export type MessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
  };

  /**
   * Model user_map_visits
   */

  export type AggregateUser_map_visits = {
    _count: User_map_visitsCountAggregateOutputType | null;
    _avg: User_map_visitsAvgAggregateOutputType | null;
    _sum: User_map_visitsSumAggregateOutputType | null;
    _min: User_map_visitsMinAggregateOutputType | null;
    _max: User_map_visitsMaxAggregateOutputType | null;
  };

  export type User_map_visitsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    map_id: number | null;
  };

  export type User_map_visitsSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    map_id: number | null;
  };

  export type User_map_visitsMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    map_id: number | null;
    visited_at: Date | null;
  };

  export type User_map_visitsMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    map_id: number | null;
    visited_at: Date | null;
  };

  export type User_map_visitsCountAggregateOutputType = {
    id: number;
    user_id: number;
    map_id: number;
    visited_at: number;
    _all: number;
  };

  export type User_map_visitsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    map_id?: true;
  };

  export type User_map_visitsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    map_id?: true;
  };

  export type User_map_visitsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    map_id?: true;
    visited_at?: true;
  };

  export type User_map_visitsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    map_id?: true;
    visited_at?: true;
  };

  export type User_map_visitsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    map_id?: true;
    visited_at?: true;
    _all?: true;
  };

  export type User_map_visitsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user_map_visits to aggregate.
     */
    where?: user_map_visitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_map_visits to fetch.
     */
    orderBy?:
      | user_map_visitsOrderByWithRelationInput
      | user_map_visitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_map_visitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_map_visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_map_visits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_map_visits
     **/
    _count?: true | User_map_visitsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: User_map_visitsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: User_map_visitsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_map_visitsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_map_visitsMaxAggregateInputType;
  };

  export type GetUser_map_visitsAggregateType<
    T extends User_map_visitsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUser_map_visits]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_map_visits[P]>
      : GetScalarType<T[P], AggregateUser_map_visits[P]>;
  };

  export type user_map_visitsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_map_visitsWhereInput;
    orderBy?:
      | user_map_visitsOrderByWithAggregationInput
      | user_map_visitsOrderByWithAggregationInput[];
    by: User_map_visitsScalarFieldEnum[] | User_map_visitsScalarFieldEnum;
    having?: user_map_visitsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_map_visitsCountAggregateInputType | true;
    _avg?: User_map_visitsAvgAggregateInputType;
    _sum?: User_map_visitsSumAggregateInputType;
    _min?: User_map_visitsMinAggregateInputType;
    _max?: User_map_visitsMaxAggregateInputType;
  };

  export type User_map_visitsGroupByOutputType = {
    id: number;
    user_id: number;
    map_id: number;
    visited_at: Date;
    _count: User_map_visitsCountAggregateOutputType | null;
    _avg: User_map_visitsAvgAggregateOutputType | null;
    _sum: User_map_visitsSumAggregateOutputType | null;
    _min: User_map_visitsMinAggregateOutputType | null;
    _max: User_map_visitsMaxAggregateOutputType | null;
  };

  type GetUser_map_visitsGroupByPayload<T extends user_map_visitsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<User_map_visitsGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof User_map_visitsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_map_visitsGroupByOutputType[P]>
            : GetScalarType<T[P], User_map_visitsGroupByOutputType[P]>;
        }
      >
    >;

  export type user_map_visitsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      map_id?: boolean;
      visited_at?: boolean;
      maps?: boolean | MapDefaultArgs<ExtArgs>;
      users?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user_map_visits']
  >;

  export type user_map_visitsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      map_id?: boolean;
      visited_at?: boolean;
      maps?: boolean | MapDefaultArgs<ExtArgs>;
      users?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user_map_visits']
  >;

  export type user_map_visitsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      map_id?: boolean;
      visited_at?: boolean;
      maps?: boolean | MapDefaultArgs<ExtArgs>;
      users?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user_map_visits']
  >;

  export type user_map_visitsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    map_id?: boolean;
    visited_at?: boolean;
  };

  export type user_map_visitsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'user_id' | 'map_id' | 'visited_at',
    ExtArgs['result']['user_map_visits']
  >;
  export type user_map_visitsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    maps?: boolean | MapDefaultArgs<ExtArgs>;
    users?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type user_map_visitsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    maps?: boolean | MapDefaultArgs<ExtArgs>;
    users?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type user_map_visitsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    maps?: boolean | MapDefaultArgs<ExtArgs>;
    users?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $user_map_visitsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'user_map_visits';
    objects: {
      maps: Prisma.$MapPayload<ExtArgs>;
      users: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        user_id: number;
        map_id: number;
        visited_at: Date;
      },
      ExtArgs['result']['user_map_visits']
    >;
    composites: {};
  };

  type user_map_visitsGetPayload<
    S extends boolean | null | undefined | user_map_visitsDefaultArgs,
  > = $Result.GetResult<Prisma.$user_map_visitsPayload, S>;

  type user_map_visitsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    user_map_visitsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: User_map_visitsCountAggregateInputType | true;
  };

  export interface user_map_visitsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['user_map_visits'];
      meta: { name: 'user_map_visits' };
    };
    /**
     * Find zero or one User_map_visits that matches the filter.
     * @param {user_map_visitsFindUniqueArgs} args - Arguments to find a User_map_visits
     * @example
     * // Get one User_map_visits
     * const user_map_visits = await prisma.user_map_visits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_map_visitsFindUniqueArgs>(
      args: SelectSubset<T, user_map_visitsFindUniqueArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User_map_visits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_map_visitsFindUniqueOrThrowArgs} args - Arguments to find a User_map_visits
     * @example
     * // Get one User_map_visits
     * const user_map_visits = await prisma.user_map_visits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_map_visitsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, user_map_visitsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User_map_visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_map_visitsFindFirstArgs} args - Arguments to find a User_map_visits
     * @example
     * // Get one User_map_visits
     * const user_map_visits = await prisma.user_map_visits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_map_visitsFindFirstArgs>(
      args?: SelectSubset<T, user_map_visitsFindFirstArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User_map_visits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_map_visitsFindFirstOrThrowArgs} args - Arguments to find a User_map_visits
     * @example
     * // Get one User_map_visits
     * const user_map_visits = await prisma.user_map_visits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_map_visitsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_map_visitsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more User_map_visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_map_visitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_map_visits
     * const user_map_visits = await prisma.user_map_visits.findMany()
     *
     * // Get first 10 User_map_visits
     * const user_map_visits = await prisma.user_map_visits.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_map_visitsWithIdOnly = await prisma.user_map_visits.findMany({ select: { id: true } })
     *
     */
    findMany<T extends user_map_visitsFindManyArgs>(
      args?: SelectSubset<T, user_map_visitsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User_map_visits.
     * @param {user_map_visitsCreateArgs} args - Arguments to create a User_map_visits.
     * @example
     * // Create one User_map_visits
     * const User_map_visits = await prisma.user_map_visits.create({
     *   data: {
     *     // ... data to create a User_map_visits
     *   }
     * })
     *
     */
    create<T extends user_map_visitsCreateArgs>(
      args: SelectSubset<T, user_map_visitsCreateArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many User_map_visits.
     * @param {user_map_visitsCreateManyArgs} args - Arguments to create many User_map_visits.
     * @example
     * // Create many User_map_visits
     * const user_map_visits = await prisma.user_map_visits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends user_map_visitsCreateManyArgs>(
      args?: SelectSubset<T, user_map_visitsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many User_map_visits and returns the data saved in the database.
     * @param {user_map_visitsCreateManyAndReturnArgs} args - Arguments to create many User_map_visits.
     * @example
     * // Create many User_map_visits
     * const user_map_visits = await prisma.user_map_visits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many User_map_visits and only return the `id`
     * const user_map_visitsWithIdOnly = await prisma.user_map_visits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends user_map_visitsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, user_map_visitsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User_map_visits.
     * @param {user_map_visitsDeleteArgs} args - Arguments to delete one User_map_visits.
     * @example
     * // Delete one User_map_visits
     * const User_map_visits = await prisma.user_map_visits.delete({
     *   where: {
     *     // ... filter to delete one User_map_visits
     *   }
     * })
     *
     */
    delete<T extends user_map_visitsDeleteArgs>(
      args: SelectSubset<T, user_map_visitsDeleteArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User_map_visits.
     * @param {user_map_visitsUpdateArgs} args - Arguments to update one User_map_visits.
     * @example
     * // Update one User_map_visits
     * const user_map_visits = await prisma.user_map_visits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends user_map_visitsUpdateArgs>(
      args: SelectSubset<T, user_map_visitsUpdateArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more User_map_visits.
     * @param {user_map_visitsDeleteManyArgs} args - Arguments to filter User_map_visits to delete.
     * @example
     * // Delete a few User_map_visits
     * const { count } = await prisma.user_map_visits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends user_map_visitsDeleteManyArgs>(
      args?: SelectSubset<T, user_map_visitsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_map_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_map_visitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_map_visits
     * const user_map_visits = await prisma.user_map_visits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends user_map_visitsUpdateManyArgs>(
      args: SelectSubset<T, user_map_visitsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_map_visits and returns the data updated in the database.
     * @param {user_map_visitsUpdateManyAndReturnArgs} args - Arguments to update many User_map_visits.
     * @example
     * // Update many User_map_visits
     * const user_map_visits = await prisma.user_map_visits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more User_map_visits and only return the `id`
     * const user_map_visitsWithIdOnly = await prisma.user_map_visits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends user_map_visitsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, user_map_visitsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User_map_visits.
     * @param {user_map_visitsUpsertArgs} args - Arguments to update or create a User_map_visits.
     * @example
     * // Update or create a User_map_visits
     * const user_map_visits = await prisma.user_map_visits.upsert({
     *   create: {
     *     // ... data to create a User_map_visits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_map_visits we want to update
     *   }
     * })
     */
    upsert<T extends user_map_visitsUpsertArgs>(
      args: SelectSubset<T, user_map_visitsUpsertArgs<ExtArgs>>
    ): Prisma__user_map_visitsClient<
      $Result.GetResult<
        Prisma.$user_map_visitsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of User_map_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_map_visitsCountArgs} args - Arguments to filter User_map_visits to count.
     * @example
     * // Count the number of User_map_visits
     * const count = await prisma.user_map_visits.count({
     *   where: {
     *     // ... the filter for the User_map_visits we want to count
     *   }
     * })
     **/
    count<T extends user_map_visitsCountArgs>(
      args?: Subset<T, user_map_visitsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_map_visitsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_map_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_map_visitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends User_map_visitsAggregateArgs>(
      args: Subset<T, User_map_visitsAggregateArgs>
    ): Prisma.PrismaPromise<GetUser_map_visitsAggregateType<T>>;

    /**
     * Group by User_map_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_map_visitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends user_map_visitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_map_visitsGroupByArgs['orderBy'] }
        : { orderBy?: user_map_visitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, user_map_visitsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetUser_map_visitsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_map_visits model
     */
    readonly fields: user_map_visitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_map_visits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_map_visitsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    maps<T extends MapDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MapDefaultArgs<ExtArgs>>
    ): Prisma__MapClient<
      | $Result.GetResult<
          Prisma.$MapPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    users<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user_map_visits model
   */
  interface user_map_visitsFieldRefs {
    readonly id: FieldRef<'user_map_visits', 'Int'>;
    readonly user_id: FieldRef<'user_map_visits', 'Int'>;
    readonly map_id: FieldRef<'user_map_visits', 'Int'>;
    readonly visited_at: FieldRef<'user_map_visits', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * user_map_visits findUnique
   */
  export type user_map_visitsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * Filter, which user_map_visits to fetch.
     */
    where: user_map_visitsWhereUniqueInput;
  };

  /**
   * user_map_visits findUniqueOrThrow
   */
  export type user_map_visitsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * Filter, which user_map_visits to fetch.
     */
    where: user_map_visitsWhereUniqueInput;
  };

  /**
   * user_map_visits findFirst
   */
  export type user_map_visitsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * Filter, which user_map_visits to fetch.
     */
    where?: user_map_visitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_map_visits to fetch.
     */
    orderBy?:
      | user_map_visitsOrderByWithRelationInput
      | user_map_visitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_map_visits.
     */
    cursor?: user_map_visitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_map_visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_map_visits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_map_visits.
     */
    distinct?:
      | User_map_visitsScalarFieldEnum
      | User_map_visitsScalarFieldEnum[];
  };

  /**
   * user_map_visits findFirstOrThrow
   */
  export type user_map_visitsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * Filter, which user_map_visits to fetch.
     */
    where?: user_map_visitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_map_visits to fetch.
     */
    orderBy?:
      | user_map_visitsOrderByWithRelationInput
      | user_map_visitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_map_visits.
     */
    cursor?: user_map_visitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_map_visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_map_visits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_map_visits.
     */
    distinct?:
      | User_map_visitsScalarFieldEnum
      | User_map_visitsScalarFieldEnum[];
  };

  /**
   * user_map_visits findMany
   */
  export type user_map_visitsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * Filter, which user_map_visits to fetch.
     */
    where?: user_map_visitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_map_visits to fetch.
     */
    orderBy?:
      | user_map_visitsOrderByWithRelationInput
      | user_map_visitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_map_visits.
     */
    cursor?: user_map_visitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_map_visits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_map_visits.
     */
    skip?: number;
    distinct?:
      | User_map_visitsScalarFieldEnum
      | User_map_visitsScalarFieldEnum[];
  };

  /**
   * user_map_visits create
   */
  export type user_map_visitsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * The data needed to create a user_map_visits.
     */
    data: XOR<user_map_visitsCreateInput, user_map_visitsUncheckedCreateInput>;
  };

  /**
   * user_map_visits createMany
   */
  export type user_map_visitsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many user_map_visits.
     */
    data: user_map_visitsCreateManyInput | user_map_visitsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_map_visits createManyAndReturn
   */
  export type user_map_visitsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * The data used to create many user_map_visits.
     */
    data: user_map_visitsCreateManyInput | user_map_visitsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * user_map_visits update
   */
  export type user_map_visitsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * The data needed to update a user_map_visits.
     */
    data: XOR<user_map_visitsUpdateInput, user_map_visitsUncheckedUpdateInput>;
    /**
     * Choose, which user_map_visits to update.
     */
    where: user_map_visitsWhereUniqueInput;
  };

  /**
   * user_map_visits updateMany
   */
  export type user_map_visitsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update user_map_visits.
     */
    data: XOR<
      user_map_visitsUpdateManyMutationInput,
      user_map_visitsUncheckedUpdateManyInput
    >;
    /**
     * Filter which user_map_visits to update
     */
    where?: user_map_visitsWhereInput;
    /**
     * Limit how many user_map_visits to update.
     */
    limit?: number;
  };

  /**
   * user_map_visits updateManyAndReturn
   */
  export type user_map_visitsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * The data used to update user_map_visits.
     */
    data: XOR<
      user_map_visitsUpdateManyMutationInput,
      user_map_visitsUncheckedUpdateManyInput
    >;
    /**
     * Filter which user_map_visits to update
     */
    where?: user_map_visitsWhereInput;
    /**
     * Limit how many user_map_visits to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * user_map_visits upsert
   */
  export type user_map_visitsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * The filter to search for the user_map_visits to update in case it exists.
     */
    where: user_map_visitsWhereUniqueInput;
    /**
     * In case the user_map_visits found by the `where` argument doesn't exist, create a new user_map_visits with this data.
     */
    create: XOR<
      user_map_visitsCreateInput,
      user_map_visitsUncheckedCreateInput
    >;
    /**
     * In case the user_map_visits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      user_map_visitsUpdateInput,
      user_map_visitsUncheckedUpdateInput
    >;
  };

  /**
   * user_map_visits delete
   */
  export type user_map_visitsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
    /**
     * Filter which user_map_visits to delete.
     */
    where: user_map_visitsWhereUniqueInput;
  };

  /**
   * user_map_visits deleteMany
   */
  export type user_map_visitsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user_map_visits to delete
     */
    where?: user_map_visitsWhereInput;
    /**
     * Limit how many user_map_visits to delete.
     */
    limit?: number;
  };

  /**
   * user_map_visits without action
   */
  export type user_map_visitsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_map_visits
     */
    select?: user_map_visitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_map_visits
     */
    omit?: user_map_visitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_map_visitsInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AvatarScalarFieldEnum: {
    id: 'id';
    imageUrl: 'imageUrl';
    name: 'name';
    avatarIdle: 'avatarIdle';
    avatarRun: 'avatarRun';
    creatorId: 'creatorId';
  };

  export type AvatarScalarFieldEnum =
    (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum];

  export const ElementScalarFieldEnum: {
    id: 'id';
    width: 'width';
    height: 'height';
    imageUrl: 'imageUrl';
    isStatic: 'isStatic';
    creatorId: 'creatorId';
  };

  export type ElementScalarFieldEnum =
    (typeof ElementScalarFieldEnum)[keyof typeof ElementScalarFieldEnum];

  export const MapScalarFieldEnum: {
    id: 'id';
    name: 'name';
    width: 'width';
    height: 'height';
    bgImg: 'bgImg';
    tilemapUrl: 'tilemapUrl';
    creatorId: 'creatorId';
    isTemplate: 'isTemplate';
    accessCode: 'accessCode';
    templateId: 'templateId';
  };

  export type MapScalarFieldEnum =
    (typeof MapScalarFieldEnum)[keyof typeof MapScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    username: 'username';
    password: 'password';
    avatarId: 'avatarId';
    avatarName: 'avatarName';
    role: 'role';
    lastLoginAt: 'lastLoginAt';
    createdAt: 'createdAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ActivityLogScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    date: 'date';
  };

  export type ActivityLogScalarFieldEnum =
    (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum];

  export const SpaceScalarFieldEnum: {
    id: 'id';
    name: 'name';
    width: 'width';
    height: 'height';
    thumbnail: 'thumbnail';
    bgImg: 'bgImg';
    tilemapUrl: 'tilemapUrl';
    ownerId: 'ownerId';
  };

  export type SpaceScalarFieldEnum =
    (typeof SpaceScalarFieldEnum)[keyof typeof SpaceScalarFieldEnum];

  export const MapElementScalarFieldEnum: {
    id: 'id';
    mapId: 'mapId';
    elementId: 'elementId';
    x: 'x';
    y: 'y';
  };

  export type MapElementScalarFieldEnum =
    (typeof MapElementScalarFieldEnum)[keyof typeof MapElementScalarFieldEnum];

  export const MapSpaceScalarFieldEnum: {
    id: 'id';
    mapId: 'mapId';
    spaceId: 'spaceId';
    x: 'x';
    y: 'y';
  };

  export type MapSpaceScalarFieldEnum =
    (typeof MapSpaceScalarFieldEnum)[keyof typeof MapSpaceScalarFieldEnum];

  export const SpaceElementScalarFieldEnum: {
    id: 'id';
    spaceId: 'spaceId';
    elementId: 'elementId';
    x: 'x';
    y: 'y';
  };

  export type SpaceElementScalarFieldEnum =
    (typeof SpaceElementScalarFieldEnum)[keyof typeof SpaceElementScalarFieldEnum];

  export const MessageScalarFieldEnum: {
    id: 'id';
    spaceId: 'spaceId';
    userId: 'userId';
    displayName: 'displayName';
    text: 'text';
    createdAt: 'createdAt';
    mapId: 'mapId';
  };

  export type MessageScalarFieldEnum =
    (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];

  export const User_map_visitsScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    map_id: 'map_id';
    visited_at: 'visited_at';
  };

  export type User_map_visitsScalarFieldEnum =
    (typeof User_map_visitsScalarFieldEnum)[keyof typeof User_map_visitsScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRole'
  >;

  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRole[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[];
    OR?: AvatarWhereInput[];
    NOT?: AvatarWhereInput | AvatarWhereInput[];
    id?: IntFilter<'Avatar'> | number;
    imageUrl?: StringFilter<'Avatar'> | string;
    name?: StringFilter<'Avatar'> | string;
    avatarIdle?: StringNullableFilter<'Avatar'> | string | null;
    avatarRun?: StringNullableFilter<'Avatar'> | string | null;
    creatorId?: IntFilter<'Avatar'> | number;
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>;
    users?: UserListRelationFilter;
  };

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    name?: SortOrder;
    avatarIdle?: SortOrderInput | SortOrder;
    avatarRun?: SortOrderInput | SortOrder;
    creatorId?: SortOrder;
    creator?: UserOrderByWithRelationInput;
    users?: UserOrderByRelationAggregateInput;
  };

  export type AvatarWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: AvatarWhereInput | AvatarWhereInput[];
      OR?: AvatarWhereInput[];
      NOT?: AvatarWhereInput | AvatarWhereInput[];
      imageUrl?: StringFilter<'Avatar'> | string;
      name?: StringFilter<'Avatar'> | string;
      avatarIdle?: StringNullableFilter<'Avatar'> | string | null;
      avatarRun?: StringNullableFilter<'Avatar'> | string | null;
      creatorId?: IntFilter<'Avatar'> | number;
      creator?: XOR<UserScalarRelationFilter, UserWhereInput>;
      users?: UserListRelationFilter;
    },
    'id'
  >;

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    name?: SortOrder;
    avatarIdle?: SortOrderInput | SortOrder;
    avatarRun?: SortOrderInput | SortOrder;
    creatorId?: SortOrder;
    _count?: AvatarCountOrderByAggregateInput;
    _avg?: AvatarAvgOrderByAggregateInput;
    _max?: AvatarMaxOrderByAggregateInput;
    _min?: AvatarMinOrderByAggregateInput;
    _sum?: AvatarSumOrderByAggregateInput;
  };

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?:
      | AvatarScalarWhereWithAggregatesInput
      | AvatarScalarWhereWithAggregatesInput[];
    OR?: AvatarScalarWhereWithAggregatesInput[];
    NOT?:
      | AvatarScalarWhereWithAggregatesInput
      | AvatarScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Avatar'> | number;
    imageUrl?: StringWithAggregatesFilter<'Avatar'> | string;
    name?: StringWithAggregatesFilter<'Avatar'> | string;
    avatarIdle?: StringNullableWithAggregatesFilter<'Avatar'> | string | null;
    avatarRun?: StringNullableWithAggregatesFilter<'Avatar'> | string | null;
    creatorId?: IntWithAggregatesFilter<'Avatar'> | number;
  };

  export type ElementWhereInput = {
    AND?: ElementWhereInput | ElementWhereInput[];
    OR?: ElementWhereInput[];
    NOT?: ElementWhereInput | ElementWhereInput[];
    id?: IntFilter<'Element'> | number;
    width?: IntFilter<'Element'> | number;
    height?: IntFilter<'Element'> | number;
    imageUrl?: StringFilter<'Element'> | string;
    isStatic?: BoolFilter<'Element'> | boolean;
    creatorId?: IntFilter<'Element'> | number;
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>;
    mapElements?: MapElementListRelationFilter;
    spaceElements?: SpaceElementListRelationFilter;
  };

  export type ElementOrderByWithRelationInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    imageUrl?: SortOrder;
    isStatic?: SortOrder;
    creatorId?: SortOrder;
    creator?: UserOrderByWithRelationInput;
    mapElements?: MapElementOrderByRelationAggregateInput;
    spaceElements?: SpaceElementOrderByRelationAggregateInput;
  };

  export type ElementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ElementWhereInput | ElementWhereInput[];
      OR?: ElementWhereInput[];
      NOT?: ElementWhereInput | ElementWhereInput[];
      width?: IntFilter<'Element'> | number;
      height?: IntFilter<'Element'> | number;
      imageUrl?: StringFilter<'Element'> | string;
      isStatic?: BoolFilter<'Element'> | boolean;
      creatorId?: IntFilter<'Element'> | number;
      creator?: XOR<UserScalarRelationFilter, UserWhereInput>;
      mapElements?: MapElementListRelationFilter;
      spaceElements?: SpaceElementListRelationFilter;
    },
    'id'
  >;

  export type ElementOrderByWithAggregationInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    imageUrl?: SortOrder;
    isStatic?: SortOrder;
    creatorId?: SortOrder;
    _count?: ElementCountOrderByAggregateInput;
    _avg?: ElementAvgOrderByAggregateInput;
    _max?: ElementMaxOrderByAggregateInput;
    _min?: ElementMinOrderByAggregateInput;
    _sum?: ElementSumOrderByAggregateInput;
  };

  export type ElementScalarWhereWithAggregatesInput = {
    AND?:
      | ElementScalarWhereWithAggregatesInput
      | ElementScalarWhereWithAggregatesInput[];
    OR?: ElementScalarWhereWithAggregatesInput[];
    NOT?:
      | ElementScalarWhereWithAggregatesInput
      | ElementScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Element'> | number;
    width?: IntWithAggregatesFilter<'Element'> | number;
    height?: IntWithAggregatesFilter<'Element'> | number;
    imageUrl?: StringWithAggregatesFilter<'Element'> | string;
    isStatic?: BoolWithAggregatesFilter<'Element'> | boolean;
    creatorId?: IntWithAggregatesFilter<'Element'> | number;
  };

  export type MapWhereInput = {
    AND?: MapWhereInput | MapWhereInput[];
    OR?: MapWhereInput[];
    NOT?: MapWhereInput | MapWhereInput[];
    id?: IntFilter<'Map'> | number;
    name?: StringFilter<'Map'> | string;
    width?: IntFilter<'Map'> | number;
    height?: IntFilter<'Map'> | number;
    bgImg?: StringNullableFilter<'Map'> | string | null;
    tilemapUrl?: StringNullableFilter<'Map'> | string | null;
    creatorId?: IntFilter<'Map'> | number;
    isTemplate?: BoolFilter<'Map'> | boolean;
    accessCode?: StringNullableFilter<'Map'> | string | null;
    templateId?: IntNullableFilter<'Map'> | number | null;
    mapElements?: MapElementListRelationFilter;
    mapSpaces?: MapSpaceListRelationFilter;
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>;
    template?: XOR<MapNullableScalarRelationFilter, MapWhereInput> | null;
    childMaps?: MapListRelationFilter;
    messages?: MessageListRelationFilter;
    user_map_visits?: User_map_visitsListRelationFilter;
  };

  export type MapOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    bgImg?: SortOrderInput | SortOrder;
    tilemapUrl?: SortOrderInput | SortOrder;
    creatorId?: SortOrder;
    isTemplate?: SortOrder;
    accessCode?: SortOrderInput | SortOrder;
    templateId?: SortOrderInput | SortOrder;
    mapElements?: MapElementOrderByRelationAggregateInput;
    mapSpaces?: MapSpaceOrderByRelationAggregateInput;
    creator?: UserOrderByWithRelationInput;
    template?: MapOrderByWithRelationInput;
    childMaps?: MapOrderByRelationAggregateInput;
    messages?: MessageOrderByRelationAggregateInput;
    user_map_visits?: user_map_visitsOrderByRelationAggregateInput;
  };

  export type MapWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      accessCode?: string;
      AND?: MapWhereInput | MapWhereInput[];
      OR?: MapWhereInput[];
      NOT?: MapWhereInput | MapWhereInput[];
      name?: StringFilter<'Map'> | string;
      width?: IntFilter<'Map'> | number;
      height?: IntFilter<'Map'> | number;
      bgImg?: StringNullableFilter<'Map'> | string | null;
      tilemapUrl?: StringNullableFilter<'Map'> | string | null;
      creatorId?: IntFilter<'Map'> | number;
      isTemplate?: BoolFilter<'Map'> | boolean;
      templateId?: IntNullableFilter<'Map'> | number | null;
      mapElements?: MapElementListRelationFilter;
      mapSpaces?: MapSpaceListRelationFilter;
      creator?: XOR<UserScalarRelationFilter, UserWhereInput>;
      template?: XOR<MapNullableScalarRelationFilter, MapWhereInput> | null;
      childMaps?: MapListRelationFilter;
      messages?: MessageListRelationFilter;
      user_map_visits?: User_map_visitsListRelationFilter;
    },
    'id' | 'accessCode'
  >;

  export type MapOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    bgImg?: SortOrderInput | SortOrder;
    tilemapUrl?: SortOrderInput | SortOrder;
    creatorId?: SortOrder;
    isTemplate?: SortOrder;
    accessCode?: SortOrderInput | SortOrder;
    templateId?: SortOrderInput | SortOrder;
    _count?: MapCountOrderByAggregateInput;
    _avg?: MapAvgOrderByAggregateInput;
    _max?: MapMaxOrderByAggregateInput;
    _min?: MapMinOrderByAggregateInput;
    _sum?: MapSumOrderByAggregateInput;
  };

  export type MapScalarWhereWithAggregatesInput = {
    AND?:
      | MapScalarWhereWithAggregatesInput
      | MapScalarWhereWithAggregatesInput[];
    OR?: MapScalarWhereWithAggregatesInput[];
    NOT?:
      | MapScalarWhereWithAggregatesInput
      | MapScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Map'> | number;
    name?: StringWithAggregatesFilter<'Map'> | string;
    width?: IntWithAggregatesFilter<'Map'> | number;
    height?: IntWithAggregatesFilter<'Map'> | number;
    bgImg?: StringNullableWithAggregatesFilter<'Map'> | string | null;
    tilemapUrl?: StringNullableWithAggregatesFilter<'Map'> | string | null;
    creatorId?: IntWithAggregatesFilter<'Map'> | number;
    isTemplate?: BoolWithAggregatesFilter<'Map'> | boolean;
    accessCode?: StringNullableWithAggregatesFilter<'Map'> | string | null;
    templateId?: IntNullableWithAggregatesFilter<'Map'> | number | null;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    username?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    avatarId?: IntNullableFilter<'User'> | number | null;
    avatarName?: StringNullableFilter<'User'> | string | null;
    role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
    lastLoginAt?: DateTimeNullableFilter<'User'> | Date | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null;
    spaces?: SpaceListRelationFilter;
    createdAvatars?: AvatarListRelationFilter;
    createdElements?: ElementListRelationFilter;
    createdMaps?: MapListRelationFilter;
    messages?: MessageListRelationFilter;
    activityLogs?: ActivityLogListRelationFilter;
    user_map_visits?: User_map_visitsListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    avatarId?: SortOrderInput | SortOrder;
    avatarName?: SortOrderInput | SortOrder;
    role?: SortOrder;
    lastLoginAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    avatar?: AvatarOrderByWithRelationInput;
    spaces?: SpaceOrderByRelationAggregateInput;
    createdAvatars?: AvatarOrderByRelationAggregateInput;
    createdElements?: ElementOrderByRelationAggregateInput;
    createdMaps?: MapOrderByRelationAggregateInput;
    messages?: MessageOrderByRelationAggregateInput;
    activityLogs?: ActivityLogOrderByRelationAggregateInput;
    user_map_visits?: user_map_visitsOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      username?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      avatarId?: IntNullableFilter<'User'> | number | null;
      avatarName?: StringNullableFilter<'User'> | string | null;
      role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
      lastLoginAt?: DateTimeNullableFilter<'User'> | Date | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null;
      spaces?: SpaceListRelationFilter;
      createdAvatars?: AvatarListRelationFilter;
      createdElements?: ElementListRelationFilter;
      createdMaps?: MapListRelationFilter;
      messages?: MessageListRelationFilter;
      activityLogs?: ActivityLogListRelationFilter;
      user_map_visits?: User_map_visitsListRelationFilter;
    },
    'id' | 'username'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    avatarId?: SortOrderInput | SortOrder;
    avatarName?: SortOrderInput | SortOrder;
    role?: SortOrder;
    lastLoginAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    username?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    avatarId?: IntNullableWithAggregatesFilter<'User'> | number | null;
    avatarName?: StringNullableWithAggregatesFilter<'User'> | string | null;
    role?: EnumUserRoleWithAggregatesFilter<'User'> | $Enums.UserRole;
    lastLoginAt?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[];
    OR?: ActivityLogWhereInput[];
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[];
    id?: IntFilter<'ActivityLog'> | number;
    userId?: IntFilter<'ActivityLog'> | number;
    date?: DateTimeFilter<'ActivityLog'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      userId_date?: ActivityLogUserIdDateCompoundUniqueInput;
      AND?: ActivityLogWhereInput | ActivityLogWhereInput[];
      OR?: ActivityLogWhereInput[];
      NOT?: ActivityLogWhereInput | ActivityLogWhereInput[];
      userId?: IntFilter<'ActivityLog'> | number;
      date?: DateTimeFilter<'ActivityLog'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId_date'
  >;

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
    _count?: ActivityLogCountOrderByAggregateInput;
    _avg?: ActivityLogAvgOrderByAggregateInput;
    _max?: ActivityLogMaxOrderByAggregateInput;
    _min?: ActivityLogMinOrderByAggregateInput;
    _sum?: ActivityLogSumOrderByAggregateInput;
  };

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?:
      | ActivityLogScalarWhereWithAggregatesInput
      | ActivityLogScalarWhereWithAggregatesInput[];
    OR?: ActivityLogScalarWhereWithAggregatesInput[];
    NOT?:
      | ActivityLogScalarWhereWithAggregatesInput
      | ActivityLogScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'ActivityLog'> | number;
    userId?: IntWithAggregatesFilter<'ActivityLog'> | number;
    date?: DateTimeWithAggregatesFilter<'ActivityLog'> | Date | string;
  };

  export type SpaceWhereInput = {
    AND?: SpaceWhereInput | SpaceWhereInput[];
    OR?: SpaceWhereInput[];
    NOT?: SpaceWhereInput | SpaceWhereInput[];
    id?: IntFilter<'Space'> | number;
    name?: StringFilter<'Space'> | string;
    width?: IntFilter<'Space'> | number;
    height?: IntFilter<'Space'> | number;
    thumbnail?: StringNullableFilter<'Space'> | string | null;
    bgImg?: StringNullableFilter<'Space'> | string | null;
    tilemapUrl?: StringNullableFilter<'Space'> | string | null;
    ownerId?: IntFilter<'Space'> | number;
    mapSpaces?: MapSpaceListRelationFilter;
    messages?: MessageListRelationFilter;
    elements?: SpaceElementListRelationFilter;
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type SpaceOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    thumbnail?: SortOrderInput | SortOrder;
    bgImg?: SortOrderInput | SortOrder;
    tilemapUrl?: SortOrderInput | SortOrder;
    ownerId?: SortOrder;
    mapSpaces?: MapSpaceOrderByRelationAggregateInput;
    messages?: MessageOrderByRelationAggregateInput;
    elements?: SpaceElementOrderByRelationAggregateInput;
    owner?: UserOrderByWithRelationInput;
  };

  export type SpaceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: SpaceWhereInput | SpaceWhereInput[];
      OR?: SpaceWhereInput[];
      NOT?: SpaceWhereInput | SpaceWhereInput[];
      name?: StringFilter<'Space'> | string;
      width?: IntFilter<'Space'> | number;
      height?: IntFilter<'Space'> | number;
      thumbnail?: StringNullableFilter<'Space'> | string | null;
      bgImg?: StringNullableFilter<'Space'> | string | null;
      tilemapUrl?: StringNullableFilter<'Space'> | string | null;
      ownerId?: IntFilter<'Space'> | number;
      mapSpaces?: MapSpaceListRelationFilter;
      messages?: MessageListRelationFilter;
      elements?: SpaceElementListRelationFilter;
      owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type SpaceOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    thumbnail?: SortOrderInput | SortOrder;
    bgImg?: SortOrderInput | SortOrder;
    tilemapUrl?: SortOrderInput | SortOrder;
    ownerId?: SortOrder;
    _count?: SpaceCountOrderByAggregateInput;
    _avg?: SpaceAvgOrderByAggregateInput;
    _max?: SpaceMaxOrderByAggregateInput;
    _min?: SpaceMinOrderByAggregateInput;
    _sum?: SpaceSumOrderByAggregateInput;
  };

  export type SpaceScalarWhereWithAggregatesInput = {
    AND?:
      | SpaceScalarWhereWithAggregatesInput
      | SpaceScalarWhereWithAggregatesInput[];
    OR?: SpaceScalarWhereWithAggregatesInput[];
    NOT?:
      | SpaceScalarWhereWithAggregatesInput
      | SpaceScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Space'> | number;
    name?: StringWithAggregatesFilter<'Space'> | string;
    width?: IntWithAggregatesFilter<'Space'> | number;
    height?: IntWithAggregatesFilter<'Space'> | number;
    thumbnail?: StringNullableWithAggregatesFilter<'Space'> | string | null;
    bgImg?: StringNullableWithAggregatesFilter<'Space'> | string | null;
    tilemapUrl?: StringNullableWithAggregatesFilter<'Space'> | string | null;
    ownerId?: IntWithAggregatesFilter<'Space'> | number;
  };

  export type MapElementWhereInput = {
    AND?: MapElementWhereInput | MapElementWhereInput[];
    OR?: MapElementWhereInput[];
    NOT?: MapElementWhereInput | MapElementWhereInput[];
    id?: IntFilter<'MapElement'> | number;
    mapId?: IntFilter<'MapElement'> | number;
    elementId?: IntFilter<'MapElement'> | number;
    x?: IntFilter<'MapElement'> | number;
    y?: IntFilter<'MapElement'> | number;
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>;
    map?: XOR<MapScalarRelationFilter, MapWhereInput>;
  };

  export type MapElementOrderByWithRelationInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
    element?: ElementOrderByWithRelationInput;
    map?: MapOrderByWithRelationInput;
  };

  export type MapElementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: MapElementWhereInput | MapElementWhereInput[];
      OR?: MapElementWhereInput[];
      NOT?: MapElementWhereInput | MapElementWhereInput[];
      mapId?: IntFilter<'MapElement'> | number;
      elementId?: IntFilter<'MapElement'> | number;
      x?: IntFilter<'MapElement'> | number;
      y?: IntFilter<'MapElement'> | number;
      element?: XOR<ElementScalarRelationFilter, ElementWhereInput>;
      map?: XOR<MapScalarRelationFilter, MapWhereInput>;
    },
    'id'
  >;

  export type MapElementOrderByWithAggregationInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
    _count?: MapElementCountOrderByAggregateInput;
    _avg?: MapElementAvgOrderByAggregateInput;
    _max?: MapElementMaxOrderByAggregateInput;
    _min?: MapElementMinOrderByAggregateInput;
    _sum?: MapElementSumOrderByAggregateInput;
  };

  export type MapElementScalarWhereWithAggregatesInput = {
    AND?:
      | MapElementScalarWhereWithAggregatesInput
      | MapElementScalarWhereWithAggregatesInput[];
    OR?: MapElementScalarWhereWithAggregatesInput[];
    NOT?:
      | MapElementScalarWhereWithAggregatesInput
      | MapElementScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'MapElement'> | number;
    mapId?: IntWithAggregatesFilter<'MapElement'> | number;
    elementId?: IntWithAggregatesFilter<'MapElement'> | number;
    x?: IntWithAggregatesFilter<'MapElement'> | number;
    y?: IntWithAggregatesFilter<'MapElement'> | number;
  };

  export type MapSpaceWhereInput = {
    AND?: MapSpaceWhereInput | MapSpaceWhereInput[];
    OR?: MapSpaceWhereInput[];
    NOT?: MapSpaceWhereInput | MapSpaceWhereInput[];
    id?: IntFilter<'MapSpace'> | number;
    mapId?: IntFilter<'MapSpace'> | number;
    spaceId?: IntFilter<'MapSpace'> | number;
    x?: IntFilter<'MapSpace'> | number;
    y?: IntFilter<'MapSpace'> | number;
    map?: XOR<MapScalarRelationFilter, MapWhereInput>;
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>;
  };

  export type MapSpaceOrderByWithRelationInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    spaceId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
    map?: MapOrderByWithRelationInput;
    space?: SpaceOrderByWithRelationInput;
  };

  export type MapSpaceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      mapId_spaceId?: MapSpaceMapIdSpaceIdCompoundUniqueInput;
      AND?: MapSpaceWhereInput | MapSpaceWhereInput[];
      OR?: MapSpaceWhereInput[];
      NOT?: MapSpaceWhereInput | MapSpaceWhereInput[];
      mapId?: IntFilter<'MapSpace'> | number;
      spaceId?: IntFilter<'MapSpace'> | number;
      x?: IntFilter<'MapSpace'> | number;
      y?: IntFilter<'MapSpace'> | number;
      map?: XOR<MapScalarRelationFilter, MapWhereInput>;
      space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>;
    },
    'id' | 'mapId_spaceId'
  >;

  export type MapSpaceOrderByWithAggregationInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    spaceId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
    _count?: MapSpaceCountOrderByAggregateInput;
    _avg?: MapSpaceAvgOrderByAggregateInput;
    _max?: MapSpaceMaxOrderByAggregateInput;
    _min?: MapSpaceMinOrderByAggregateInput;
    _sum?: MapSpaceSumOrderByAggregateInput;
  };

  export type MapSpaceScalarWhereWithAggregatesInput = {
    AND?:
      | MapSpaceScalarWhereWithAggregatesInput
      | MapSpaceScalarWhereWithAggregatesInput[];
    OR?: MapSpaceScalarWhereWithAggregatesInput[];
    NOT?:
      | MapSpaceScalarWhereWithAggregatesInput
      | MapSpaceScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'MapSpace'> | number;
    mapId?: IntWithAggregatesFilter<'MapSpace'> | number;
    spaceId?: IntWithAggregatesFilter<'MapSpace'> | number;
    x?: IntWithAggregatesFilter<'MapSpace'> | number;
    y?: IntWithAggregatesFilter<'MapSpace'> | number;
  };

  export type SpaceElementWhereInput = {
    AND?: SpaceElementWhereInput | SpaceElementWhereInput[];
    OR?: SpaceElementWhereInput[];
    NOT?: SpaceElementWhereInput | SpaceElementWhereInput[];
    id?: IntFilter<'SpaceElement'> | number;
    spaceId?: IntFilter<'SpaceElement'> | number;
    elementId?: IntFilter<'SpaceElement'> | number;
    x?: IntFilter<'SpaceElement'> | number;
    y?: IntFilter<'SpaceElement'> | number;
    element?: XOR<ElementScalarRelationFilter, ElementWhereInput>;
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>;
  };

  export type SpaceElementOrderByWithRelationInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
    element?: ElementOrderByWithRelationInput;
    space?: SpaceOrderByWithRelationInput;
  };

  export type SpaceElementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: SpaceElementWhereInput | SpaceElementWhereInput[];
      OR?: SpaceElementWhereInput[];
      NOT?: SpaceElementWhereInput | SpaceElementWhereInput[];
      spaceId?: IntFilter<'SpaceElement'> | number;
      elementId?: IntFilter<'SpaceElement'> | number;
      x?: IntFilter<'SpaceElement'> | number;
      y?: IntFilter<'SpaceElement'> | number;
      element?: XOR<ElementScalarRelationFilter, ElementWhereInput>;
      space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>;
    },
    'id'
  >;

  export type SpaceElementOrderByWithAggregationInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
    _count?: SpaceElementCountOrderByAggregateInput;
    _avg?: SpaceElementAvgOrderByAggregateInput;
    _max?: SpaceElementMaxOrderByAggregateInput;
    _min?: SpaceElementMinOrderByAggregateInput;
    _sum?: SpaceElementSumOrderByAggregateInput;
  };

  export type SpaceElementScalarWhereWithAggregatesInput = {
    AND?:
      | SpaceElementScalarWhereWithAggregatesInput
      | SpaceElementScalarWhereWithAggregatesInput[];
    OR?: SpaceElementScalarWhereWithAggregatesInput[];
    NOT?:
      | SpaceElementScalarWhereWithAggregatesInput
      | SpaceElementScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'SpaceElement'> | number;
    spaceId?: IntWithAggregatesFilter<'SpaceElement'> | number;
    elementId?: IntWithAggregatesFilter<'SpaceElement'> | number;
    x?: IntWithAggregatesFilter<'SpaceElement'> | number;
    y?: IntWithAggregatesFilter<'SpaceElement'> | number;
  };

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput | MessageWhereInput[];
    id?: IntFilter<'Message'> | number;
    spaceId?: IntNullableFilter<'Message'> | number | null;
    userId?: IntFilter<'Message'> | number;
    displayName?: StringFilter<'Message'> | string;
    text?: StringFilter<'Message'> | string;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    mapId?: IntNullableFilter<'Message'> | number | null;
    map?: XOR<MapNullableScalarRelationFilter, MapWhereInput> | null;
    space?: XOR<SpaceNullableScalarRelationFilter, SpaceWhereInput> | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder;
    spaceId?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    displayName?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    mapId?: SortOrderInput | SortOrder;
    map?: MapOrderByWithRelationInput;
    space?: SpaceOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type MessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: MessageWhereInput | MessageWhereInput[];
      OR?: MessageWhereInput[];
      NOT?: MessageWhereInput | MessageWhereInput[];
      spaceId?: IntNullableFilter<'Message'> | number | null;
      userId?: IntFilter<'Message'> | number;
      displayName?: StringFilter<'Message'> | string;
      text?: StringFilter<'Message'> | string;
      createdAt?: DateTimeFilter<'Message'> | Date | string;
      mapId?: IntNullableFilter<'Message'> | number | null;
      map?: XOR<MapNullableScalarRelationFilter, MapWhereInput> | null;
      space?: XOR<SpaceNullableScalarRelationFilter, SpaceWhereInput> | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder;
    spaceId?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    displayName?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    mapId?: SortOrderInput | SortOrder;
    _count?: MessageCountOrderByAggregateInput;
    _avg?: MessageAvgOrderByAggregateInput;
    _max?: MessageMaxOrderByAggregateInput;
    _min?: MessageMinOrderByAggregateInput;
    _sum?: MessageSumOrderByAggregateInput;
  };

  export type MessageScalarWhereWithAggregatesInput = {
    AND?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    OR?: MessageScalarWhereWithAggregatesInput[];
    NOT?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Message'> | number;
    spaceId?: IntNullableWithAggregatesFilter<'Message'> | number | null;
    userId?: IntWithAggregatesFilter<'Message'> | number;
    displayName?: StringWithAggregatesFilter<'Message'> | string;
    text?: StringWithAggregatesFilter<'Message'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
    mapId?: IntNullableWithAggregatesFilter<'Message'> | number | null;
  };

  export type user_map_visitsWhereInput = {
    AND?: user_map_visitsWhereInput | user_map_visitsWhereInput[];
    OR?: user_map_visitsWhereInput[];
    NOT?: user_map_visitsWhereInput | user_map_visitsWhereInput[];
    id?: IntFilter<'user_map_visits'> | number;
    user_id?: IntFilter<'user_map_visits'> | number;
    map_id?: IntFilter<'user_map_visits'> | number;
    visited_at?: DateTimeFilter<'user_map_visits'> | Date | string;
    maps?: XOR<MapScalarRelationFilter, MapWhereInput>;
    users?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type user_map_visitsOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    map_id?: SortOrder;
    visited_at?: SortOrder;
    maps?: MapOrderByWithRelationInput;
    users?: UserOrderByWithRelationInput;
  };

  export type user_map_visitsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      user_id_map_id?: user_map_visitsUser_idMap_idCompoundUniqueInput;
      AND?: user_map_visitsWhereInput | user_map_visitsWhereInput[];
      OR?: user_map_visitsWhereInput[];
      NOT?: user_map_visitsWhereInput | user_map_visitsWhereInput[];
      user_id?: IntFilter<'user_map_visits'> | number;
      map_id?: IntFilter<'user_map_visits'> | number;
      visited_at?: DateTimeFilter<'user_map_visits'> | Date | string;
      maps?: XOR<MapScalarRelationFilter, MapWhereInput>;
      users?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'user_id_map_id'
  >;

  export type user_map_visitsOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    map_id?: SortOrder;
    visited_at?: SortOrder;
    _count?: user_map_visitsCountOrderByAggregateInput;
    _avg?: user_map_visitsAvgOrderByAggregateInput;
    _max?: user_map_visitsMaxOrderByAggregateInput;
    _min?: user_map_visitsMinOrderByAggregateInput;
    _sum?: user_map_visitsSumOrderByAggregateInput;
  };

  export type user_map_visitsScalarWhereWithAggregatesInput = {
    AND?:
      | user_map_visitsScalarWhereWithAggregatesInput
      | user_map_visitsScalarWhereWithAggregatesInput[];
    OR?: user_map_visitsScalarWhereWithAggregatesInput[];
    NOT?:
      | user_map_visitsScalarWhereWithAggregatesInput
      | user_map_visitsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'user_map_visits'> | number;
    user_id?: IntWithAggregatesFilter<'user_map_visits'> | number;
    map_id?: IntWithAggregatesFilter<'user_map_visits'> | number;
    visited_at?:
      | DateTimeWithAggregatesFilter<'user_map_visits'>
      | Date
      | string;
  };

  export type AvatarCreateInput = {
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
    creator: UserCreateNestedOneWithoutCreatedAvatarsInput;
    users?: UserCreateNestedManyWithoutAvatarInput;
  };

  export type AvatarUncheckedCreateInput = {
    id?: number;
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
    creatorId: number;
    users?: UserUncheckedCreateNestedManyWithoutAvatarInput;
  };

  export type AvatarUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
    creator?: UserUpdateOneRequiredWithoutCreatedAvatarsNestedInput;
    users?: UserUpdateManyWithoutAvatarNestedInput;
  };

  export type AvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    users?: UserUncheckedUpdateManyWithoutAvatarNestedInput;
  };

  export type AvatarCreateManyInput = {
    id?: number;
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
    creatorId: number;
  };

  export type AvatarUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
  };

  export type ElementCreateInput = {
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    creator: UserCreateNestedOneWithoutCreatedElementsInput;
    mapElements?: MapElementCreateNestedManyWithoutElementInput;
    spaceElements?: SpaceElementCreateNestedManyWithoutElementInput;
  };

  export type ElementUncheckedCreateInput = {
    id?: number;
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    creatorId: number;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutElementInput;
    spaceElements?: SpaceElementUncheckedCreateNestedManyWithoutElementInput;
  };

  export type ElementUpdateInput = {
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    creator?: UserUpdateOneRequiredWithoutCreatedElementsNestedInput;
    mapElements?: MapElementUpdateManyWithoutElementNestedInput;
    spaceElements?: SpaceElementUpdateManyWithoutElementNestedInput;
  };

  export type ElementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    creatorId?: IntFieldUpdateOperationsInput | number;
    mapElements?: MapElementUncheckedUpdateManyWithoutElementNestedInput;
    spaceElements?: SpaceElementUncheckedUpdateManyWithoutElementNestedInput;
  };

  export type ElementCreateManyInput = {
    id?: number;
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    creatorId: number;
  };

  export type ElementUpdateManyMutationInput = {
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type ElementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    creatorId?: IntFieldUpdateOperationsInput | number;
  };

  export type MapCreateInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceCreateNestedManyWithoutMapInput;
    creator: UserCreateNestedOneWithoutCreatedMapsInput;
    template?: MapCreateNestedOneWithoutChildMapsInput;
    childMaps?: MapCreateNestedManyWithoutTemplateInput;
    messages?: MessageCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutMapsInput;
  };

  export type MapUncheckedCreateInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutMapInput;
    childMaps?: MapUncheckedCreateNestedManyWithoutTemplateInput;
    messages?: MessageUncheckedCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutMapsInput;
  };

  export type MapUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUpdateManyWithoutMapNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedMapsNestedInput;
    template?: MapUpdateOneWithoutChildMapsNestedInput;
    childMaps?: MapUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
    mapElements?: MapElementUncheckedUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutMapNestedInput;
    childMaps?: MapUncheckedUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput;
  };

  export type MapCreateManyInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
  };

  export type MapUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type MapUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type UserCreateInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityLogCreateInput = {
    date: Date | string;
    user: UserCreateNestedOneWithoutActivityLogsInput;
  };

  export type ActivityLogUncheckedCreateInput = {
    id?: number;
    userId: number;
    date: Date | string;
  };

  export type ActivityLogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput;
  };

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityLogCreateManyInput = {
    id?: number;
    userId: number;
    date: Date | string;
  };

  export type ActivityLogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SpaceCreateInput = {
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    mapSpaces?: MapSpaceCreateNestedManyWithoutSpaceInput;
    messages?: MessageCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementCreateNestedManyWithoutSpaceInput;
    owner: UserCreateNestedOneWithoutSpacesInput;
  };

  export type SpaceUncheckedCreateInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    ownerId: number;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutSpaceInput;
    messages?: MessageUncheckedCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementUncheckedCreateNestedManyWithoutSpaceInput;
  };

  export type SpaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    mapSpaces?: MapSpaceUpdateManyWithoutSpaceNestedInput;
    messages?: MessageUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUpdateManyWithoutSpaceNestedInput;
    owner?: UserUpdateOneRequiredWithoutSpacesNestedInput;
  };

  export type SpaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: IntFieldUpdateOperationsInput | number;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutSpaceNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput;
  };

  export type SpaceCreateManyInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    ownerId: number;
  };

  export type SpaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SpaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: IntFieldUpdateOperationsInput | number;
  };

  export type MapElementCreateInput = {
    x: number;
    y: number;
    element: ElementCreateNestedOneWithoutMapElementsInput;
    map: MapCreateNestedOneWithoutMapElementsInput;
  };

  export type MapElementUncheckedCreateInput = {
    id?: number;
    mapId: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type MapElementUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    element?: ElementUpdateOneRequiredWithoutMapElementsNestedInput;
    map?: MapUpdateOneRequiredWithoutMapElementsNestedInput;
  };

  export type MapElementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapElementCreateManyInput = {
    id?: number;
    mapId: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type MapElementUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapElementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapSpaceCreateInput = {
    x: number;
    y: number;
    map: MapCreateNestedOneWithoutMapSpacesInput;
    space: SpaceCreateNestedOneWithoutMapSpacesInput;
  };

  export type MapSpaceUncheckedCreateInput = {
    id?: number;
    mapId: number;
    spaceId: number;
    x: number;
    y: number;
  };

  export type MapSpaceUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    map?: MapUpdateOneRequiredWithoutMapSpacesNestedInput;
    space?: SpaceUpdateOneRequiredWithoutMapSpacesNestedInput;
  };

  export type MapSpaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapSpaceCreateManyInput = {
    id?: number;
    mapId: number;
    spaceId: number;
    x: number;
    y: number;
  };

  export type MapSpaceUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapSpaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type SpaceElementCreateInput = {
    x: number;
    y: number;
    element: ElementCreateNestedOneWithoutSpaceElementsInput;
    space: SpaceCreateNestedOneWithoutElementsInput;
  };

  export type SpaceElementUncheckedCreateInput = {
    id?: number;
    spaceId: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type SpaceElementUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    element?: ElementUpdateOneRequiredWithoutSpaceElementsNestedInput;
    space?: SpaceUpdateOneRequiredWithoutElementsNestedInput;
  };

  export type SpaceElementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type SpaceElementCreateManyInput = {
    id?: number;
    spaceId: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type SpaceElementUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type SpaceElementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MessageCreateInput = {
    displayName: string;
    text: string;
    createdAt?: Date | string;
    map?: MapCreateNestedOneWithoutMessagesInput;
    space?: SpaceCreateNestedOneWithoutMessagesInput;
    user: UserCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateInput = {
    id?: number;
    spaceId?: number | null;
    userId: number;
    displayName: string;
    text: string;
    createdAt?: Date | string;
    mapId?: number | null;
  };

  export type MessageUpdateInput = {
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    map?: MapUpdateOneWithoutMessagesNestedInput;
    space?: SpaceUpdateOneWithoutMessagesNestedInput;
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: NullableIntFieldUpdateOperationsInput | number | null;
    userId?: IntFieldUpdateOperationsInput | number;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mapId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type MessageCreateManyInput = {
    id?: number;
    spaceId?: number | null;
    userId: number;
    displayName: string;
    text: string;
    createdAt?: Date | string;
    mapId?: number | null;
  };

  export type MessageUpdateManyMutationInput = {
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: NullableIntFieldUpdateOperationsInput | number | null;
    userId?: IntFieldUpdateOperationsInput | number;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mapId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type user_map_visitsCreateInput = {
    visited_at?: Date | string;
    maps: MapCreateNestedOneWithoutUser_map_visitsInput;
    users: UserCreateNestedOneWithoutUser_map_visitsInput;
  };

  export type user_map_visitsUncheckedCreateInput = {
    id?: number;
    user_id: number;
    map_id: number;
    visited_at?: Date | string;
  };

  export type user_map_visitsUpdateInput = {
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    maps?: MapUpdateOneRequiredWithoutUser_map_visitsNestedInput;
    users?: UserUpdateOneRequiredWithoutUser_map_visitsNestedInput;
  };

  export type user_map_visitsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    map_id?: IntFieldUpdateOperationsInput | number;
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_map_visitsCreateManyInput = {
    id?: number;
    user_id: number;
    map_id: number;
    visited_at?: Date | string;
  };

  export type user_map_visitsUpdateManyMutationInput = {
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_map_visitsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    map_id?: IntFieldUpdateOperationsInput | number;
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type UserListRelationFilter = {
    every?: UserWhereInput;
    some?: UserWhereInput;
    none?: UserWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    name?: SortOrder;
    avatarIdle?: SortOrder;
    avatarRun?: SortOrder;
    creatorId?: SortOrder;
  };

  export type AvatarAvgOrderByAggregateInput = {
    id?: SortOrder;
    creatorId?: SortOrder;
  };

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    name?: SortOrder;
    avatarIdle?: SortOrder;
    avatarRun?: SortOrder;
    creatorId?: SortOrder;
  };

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder;
    imageUrl?: SortOrder;
    name?: SortOrder;
    avatarIdle?: SortOrder;
    avatarRun?: SortOrder;
    creatorId?: SortOrder;
  };

  export type AvatarSumOrderByAggregateInput = {
    id?: SortOrder;
    creatorId?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type MapElementListRelationFilter = {
    every?: MapElementWhereInput;
    some?: MapElementWhereInput;
    none?: MapElementWhereInput;
  };

  export type SpaceElementListRelationFilter = {
    every?: SpaceElementWhereInput;
    some?: SpaceElementWhereInput;
    none?: SpaceElementWhereInput;
  };

  export type MapElementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SpaceElementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ElementCountOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    imageUrl?: SortOrder;
    isStatic?: SortOrder;
    creatorId?: SortOrder;
  };

  export type ElementAvgOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    creatorId?: SortOrder;
  };

  export type ElementMaxOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    imageUrl?: SortOrder;
    isStatic?: SortOrder;
    creatorId?: SortOrder;
  };

  export type ElementMinOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    imageUrl?: SortOrder;
    isStatic?: SortOrder;
    creatorId?: SortOrder;
  };

  export type ElementSumOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    creatorId?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type MapSpaceListRelationFilter = {
    every?: MapSpaceWhereInput;
    some?: MapSpaceWhereInput;
    none?: MapSpaceWhereInput;
  };

  export type MapNullableScalarRelationFilter = {
    is?: MapWhereInput | null;
    isNot?: MapWhereInput | null;
  };

  export type MapListRelationFilter = {
    every?: MapWhereInput;
    some?: MapWhereInput;
    none?: MapWhereInput;
  };

  export type MessageListRelationFilter = {
    every?: MessageWhereInput;
    some?: MessageWhereInput;
    none?: MessageWhereInput;
  };

  export type User_map_visitsListRelationFilter = {
    every?: user_map_visitsWhereInput;
    some?: user_map_visitsWhereInput;
    none?: user_map_visitsWhereInput;
  };

  export type MapSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MapOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type user_map_visitsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MapCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    bgImg?: SortOrder;
    tilemapUrl?: SortOrder;
    creatorId?: SortOrder;
    isTemplate?: SortOrder;
    accessCode?: SortOrder;
    templateId?: SortOrder;
  };

  export type MapAvgOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    creatorId?: SortOrder;
    templateId?: SortOrder;
  };

  export type MapMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    bgImg?: SortOrder;
    tilemapUrl?: SortOrder;
    creatorId?: SortOrder;
    isTemplate?: SortOrder;
    accessCode?: SortOrder;
    templateId?: SortOrder;
  };

  export type MapMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    bgImg?: SortOrder;
    tilemapUrl?: SortOrder;
    creatorId?: SortOrder;
    isTemplate?: SortOrder;
    accessCode?: SortOrder;
    templateId?: SortOrder;
  };

  export type MapSumOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    creatorId?: SortOrder;
    templateId?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type AvatarNullableScalarRelationFilter = {
    is?: AvatarWhereInput | null;
    isNot?: AvatarWhereInput | null;
  };

  export type SpaceListRelationFilter = {
    every?: SpaceWhereInput;
    some?: SpaceWhereInput;
    none?: SpaceWhereInput;
  };

  export type AvatarListRelationFilter = {
    every?: AvatarWhereInput;
    some?: AvatarWhereInput;
    none?: AvatarWhereInput;
  };

  export type ElementListRelationFilter = {
    every?: ElementWhereInput;
    some?: ElementWhereInput;
    none?: ElementWhereInput;
  };

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput;
    some?: ActivityLogWhereInput;
    none?: ActivityLogWhereInput;
  };

  export type SpaceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AvatarOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ElementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    avatarId?: SortOrder;
    avatarName?: SortOrder;
    role?: SortOrder;
    lastLoginAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
    avatarId?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    avatarId?: SortOrder;
    avatarName?: SortOrder;
    role?: SortOrder;
    lastLoginAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    avatarId?: SortOrder;
    avatarName?: SortOrder;
    role?: SortOrder;
    lastLoginAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
    avatarId?: SortOrder;
  };

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ActivityLogUserIdDateCompoundUniqueInput = {
    userId: number;
    date: Date | string;
  };

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
  };

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
  };

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
  };

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type SpaceCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    thumbnail?: SortOrder;
    bgImg?: SortOrder;
    tilemapUrl?: SortOrder;
    ownerId?: SortOrder;
  };

  export type SpaceAvgOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    ownerId?: SortOrder;
  };

  export type SpaceMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    thumbnail?: SortOrder;
    bgImg?: SortOrder;
    tilemapUrl?: SortOrder;
    ownerId?: SortOrder;
  };

  export type SpaceMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    thumbnail?: SortOrder;
    bgImg?: SortOrder;
    tilemapUrl?: SortOrder;
    ownerId?: SortOrder;
  };

  export type SpaceSumOrderByAggregateInput = {
    id?: SortOrder;
    width?: SortOrder;
    height?: SortOrder;
    ownerId?: SortOrder;
  };

  export type ElementScalarRelationFilter = {
    is?: ElementWhereInput;
    isNot?: ElementWhereInput;
  };

  export type MapScalarRelationFilter = {
    is?: MapWhereInput;
    isNot?: MapWhereInput;
  };

  export type MapElementCountOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapElementAvgOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapElementMaxOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapElementMinOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapElementSumOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type SpaceScalarRelationFilter = {
    is?: SpaceWhereInput;
    isNot?: SpaceWhereInput;
  };

  export type MapSpaceMapIdSpaceIdCompoundUniqueInput = {
    mapId: number;
    spaceId: number;
  };

  export type MapSpaceCountOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    spaceId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapSpaceAvgOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    spaceId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapSpaceMaxOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    spaceId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapSpaceMinOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    spaceId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type MapSpaceSumOrderByAggregateInput = {
    id?: SortOrder;
    mapId?: SortOrder;
    spaceId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type SpaceElementCountOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type SpaceElementAvgOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type SpaceElementMaxOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type SpaceElementMinOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type SpaceElementSumOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    elementId?: SortOrder;
    x?: SortOrder;
    y?: SortOrder;
  };

  export type SpaceNullableScalarRelationFilter = {
    is?: SpaceWhereInput | null;
    isNot?: SpaceWhereInput | null;
  };

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    userId?: SortOrder;
    displayName?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    mapId?: SortOrder;
  };

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    userId?: SortOrder;
    mapId?: SortOrder;
  };

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    userId?: SortOrder;
    displayName?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    mapId?: SortOrder;
  };

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    userId?: SortOrder;
    displayName?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    mapId?: SortOrder;
  };

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder;
    spaceId?: SortOrder;
    userId?: SortOrder;
    mapId?: SortOrder;
  };

  export type user_map_visitsUser_idMap_idCompoundUniqueInput = {
    user_id: number;
    map_id: number;
  };

  export type user_map_visitsCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    map_id?: SortOrder;
    visited_at?: SortOrder;
  };

  export type user_map_visitsAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    map_id?: SortOrder;
  };

  export type user_map_visitsMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    map_id?: SortOrder;
    visited_at?: SortOrder;
  };

  export type user_map_visitsMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    map_id?: SortOrder;
    visited_at?: SortOrder;
  };

  export type user_map_visitsSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    map_id?: SortOrder;
  };

  export type UserCreateNestedOneWithoutCreatedAvatarsInput = {
    create?: XOR<
      UserCreateWithoutCreatedAvatarsInput,
      UserUncheckedCreateWithoutCreatedAvatarsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAvatarsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedManyWithoutAvatarInput = {
    create?:
      | XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
      | UserCreateWithoutAvatarInput[]
      | UserUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutAvatarInput
      | UserCreateOrConnectWithoutAvatarInput[];
    createMany?: UserCreateManyAvatarInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutAvatarInput = {
    create?:
      | XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
      | UserCreateWithoutAvatarInput[]
      | UserUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutAvatarInput
      | UserCreateOrConnectWithoutAvatarInput[];
    createMany?: UserCreateManyAvatarInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdateOneRequiredWithoutCreatedAvatarsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedAvatarsInput,
      UserUncheckedCreateWithoutCreatedAvatarsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAvatarsInput;
    upsert?: UserUpsertWithoutCreatedAvatarsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedAvatarsInput,
        UserUpdateWithoutCreatedAvatarsInput
      >,
      UserUncheckedUpdateWithoutCreatedAvatarsInput
    >;
  };

  export type UserUpdateManyWithoutAvatarNestedInput = {
    create?:
      | XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
      | UserCreateWithoutAvatarInput[]
      | UserUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutAvatarInput
      | UserCreateOrConnectWithoutAvatarInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutAvatarInput
      | UserUpsertWithWhereUniqueWithoutAvatarInput[];
    createMany?: UserCreateManyAvatarInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutAvatarInput
      | UserUpdateWithWhereUniqueWithoutAvatarInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutAvatarInput
      | UserUpdateManyWithWhereWithoutAvatarInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUncheckedUpdateManyWithoutAvatarNestedInput = {
    create?:
      | XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
      | UserCreateWithoutAvatarInput[]
      | UserUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutAvatarInput
      | UserCreateOrConnectWithoutAvatarInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutAvatarInput
      | UserUpsertWithWhereUniqueWithoutAvatarInput[];
    createMany?: UserCreateManyAvatarInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutAvatarInput
      | UserUpdateWithWhereUniqueWithoutAvatarInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutAvatarInput
      | UserUpdateManyWithWhereWithoutAvatarInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCreatedElementsInput = {
    create?: XOR<
      UserCreateWithoutCreatedElementsInput,
      UserUncheckedCreateWithoutCreatedElementsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedElementsInput;
    connect?: UserWhereUniqueInput;
  };

  export type MapElementCreateNestedManyWithoutElementInput = {
    create?:
      | XOR<
          MapElementCreateWithoutElementInput,
          MapElementUncheckedCreateWithoutElementInput
        >
      | MapElementCreateWithoutElementInput[]
      | MapElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutElementInput
      | MapElementCreateOrConnectWithoutElementInput[];
    createMany?: MapElementCreateManyElementInputEnvelope;
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
  };

  export type SpaceElementCreateNestedManyWithoutElementInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutElementInput,
          SpaceElementUncheckedCreateWithoutElementInput
        >
      | SpaceElementCreateWithoutElementInput[]
      | SpaceElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutElementInput
      | SpaceElementCreateOrConnectWithoutElementInput[];
    createMany?: SpaceElementCreateManyElementInputEnvelope;
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
  };

  export type MapElementUncheckedCreateNestedManyWithoutElementInput = {
    create?:
      | XOR<
          MapElementCreateWithoutElementInput,
          MapElementUncheckedCreateWithoutElementInput
        >
      | MapElementCreateWithoutElementInput[]
      | MapElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutElementInput
      | MapElementCreateOrConnectWithoutElementInput[];
    createMany?: MapElementCreateManyElementInputEnvelope;
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
  };

  export type SpaceElementUncheckedCreateNestedManyWithoutElementInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutElementInput,
          SpaceElementUncheckedCreateWithoutElementInput
        >
      | SpaceElementCreateWithoutElementInput[]
      | SpaceElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutElementInput
      | SpaceElementCreateOrConnectWithoutElementInput[];
    createMany?: SpaceElementCreateManyElementInputEnvelope;
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutCreatedElementsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedElementsInput,
      UserUncheckedCreateWithoutCreatedElementsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedElementsInput;
    upsert?: UserUpsertWithoutCreatedElementsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedElementsInput,
        UserUpdateWithoutCreatedElementsInput
      >,
      UserUncheckedUpdateWithoutCreatedElementsInput
    >;
  };

  export type MapElementUpdateManyWithoutElementNestedInput = {
    create?:
      | XOR<
          MapElementCreateWithoutElementInput,
          MapElementUncheckedCreateWithoutElementInput
        >
      | MapElementCreateWithoutElementInput[]
      | MapElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutElementInput
      | MapElementCreateOrConnectWithoutElementInput[];
    upsert?:
      | MapElementUpsertWithWhereUniqueWithoutElementInput
      | MapElementUpsertWithWhereUniqueWithoutElementInput[];
    createMany?: MapElementCreateManyElementInputEnvelope;
    set?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    disconnect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    delete?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    update?:
      | MapElementUpdateWithWhereUniqueWithoutElementInput
      | MapElementUpdateWithWhereUniqueWithoutElementInput[];
    updateMany?:
      | MapElementUpdateManyWithWhereWithoutElementInput
      | MapElementUpdateManyWithWhereWithoutElementInput[];
    deleteMany?: MapElementScalarWhereInput | MapElementScalarWhereInput[];
  };

  export type SpaceElementUpdateManyWithoutElementNestedInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutElementInput,
          SpaceElementUncheckedCreateWithoutElementInput
        >
      | SpaceElementCreateWithoutElementInput[]
      | SpaceElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutElementInput
      | SpaceElementCreateOrConnectWithoutElementInput[];
    upsert?:
      | SpaceElementUpsertWithWhereUniqueWithoutElementInput
      | SpaceElementUpsertWithWhereUniqueWithoutElementInput[];
    createMany?: SpaceElementCreateManyElementInputEnvelope;
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    update?:
      | SpaceElementUpdateWithWhereUniqueWithoutElementInput
      | SpaceElementUpdateWithWhereUniqueWithoutElementInput[];
    updateMany?:
      | SpaceElementUpdateManyWithWhereWithoutElementInput
      | SpaceElementUpdateManyWithWhereWithoutElementInput[];
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[];
  };

  export type MapElementUncheckedUpdateManyWithoutElementNestedInput = {
    create?:
      | XOR<
          MapElementCreateWithoutElementInput,
          MapElementUncheckedCreateWithoutElementInput
        >
      | MapElementCreateWithoutElementInput[]
      | MapElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutElementInput
      | MapElementCreateOrConnectWithoutElementInput[];
    upsert?:
      | MapElementUpsertWithWhereUniqueWithoutElementInput
      | MapElementUpsertWithWhereUniqueWithoutElementInput[];
    createMany?: MapElementCreateManyElementInputEnvelope;
    set?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    disconnect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    delete?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    update?:
      | MapElementUpdateWithWhereUniqueWithoutElementInput
      | MapElementUpdateWithWhereUniqueWithoutElementInput[];
    updateMany?:
      | MapElementUpdateManyWithWhereWithoutElementInput
      | MapElementUpdateManyWithWhereWithoutElementInput[];
    deleteMany?: MapElementScalarWhereInput | MapElementScalarWhereInput[];
  };

  export type SpaceElementUncheckedUpdateManyWithoutElementNestedInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutElementInput,
          SpaceElementUncheckedCreateWithoutElementInput
        >
      | SpaceElementCreateWithoutElementInput[]
      | SpaceElementUncheckedCreateWithoutElementInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutElementInput
      | SpaceElementCreateOrConnectWithoutElementInput[];
    upsert?:
      | SpaceElementUpsertWithWhereUniqueWithoutElementInput
      | SpaceElementUpsertWithWhereUniqueWithoutElementInput[];
    createMany?: SpaceElementCreateManyElementInputEnvelope;
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    update?:
      | SpaceElementUpdateWithWhereUniqueWithoutElementInput
      | SpaceElementUpdateWithWhereUniqueWithoutElementInput[];
    updateMany?:
      | SpaceElementUpdateManyWithWhereWithoutElementInput
      | SpaceElementUpdateManyWithWhereWithoutElementInput[];
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[];
  };

  export type MapElementCreateNestedManyWithoutMapInput = {
    create?:
      | XOR<
          MapElementCreateWithoutMapInput,
          MapElementUncheckedCreateWithoutMapInput
        >
      | MapElementCreateWithoutMapInput[]
      | MapElementUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutMapInput
      | MapElementCreateOrConnectWithoutMapInput[];
    createMany?: MapElementCreateManyMapInputEnvelope;
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
  };

  export type MapSpaceCreateNestedManyWithoutMapInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutMapInput,
          MapSpaceUncheckedCreateWithoutMapInput
        >
      | MapSpaceCreateWithoutMapInput[]
      | MapSpaceUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutMapInput
      | MapSpaceCreateOrConnectWithoutMapInput[];
    createMany?: MapSpaceCreateManyMapInputEnvelope;
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutCreatedMapsInput = {
    create?: XOR<
      UserCreateWithoutCreatedMapsInput,
      UserUncheckedCreateWithoutCreatedMapsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMapsInput;
    connect?: UserWhereUniqueInput;
  };

  export type MapCreateNestedOneWithoutChildMapsInput = {
    create?: XOR<
      MapCreateWithoutChildMapsInput,
      MapUncheckedCreateWithoutChildMapsInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutChildMapsInput;
    connect?: MapWhereUniqueInput;
  };

  export type MapCreateNestedManyWithoutTemplateInput = {
    create?:
      | XOR<
          MapCreateWithoutTemplateInput,
          MapUncheckedCreateWithoutTemplateInput
        >
      | MapCreateWithoutTemplateInput[]
      | MapUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutTemplateInput
      | MapCreateOrConnectWithoutTemplateInput[];
    createMany?: MapCreateManyTemplateInputEnvelope;
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutMapInput = {
    create?:
      | XOR<MessageCreateWithoutMapInput, MessageUncheckedCreateWithoutMapInput>
      | MessageCreateWithoutMapInput[]
      | MessageUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutMapInput
      | MessageCreateOrConnectWithoutMapInput[];
    createMany?: MessageCreateManyMapInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type user_map_visitsCreateNestedManyWithoutMapsInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutMapsInput,
          user_map_visitsUncheckedCreateWithoutMapsInput
        >
      | user_map_visitsCreateWithoutMapsInput[]
      | user_map_visitsUncheckedCreateWithoutMapsInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutMapsInput
      | user_map_visitsCreateOrConnectWithoutMapsInput[];
    createMany?: user_map_visitsCreateManyMapsInputEnvelope;
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
  };

  export type MapElementUncheckedCreateNestedManyWithoutMapInput = {
    create?:
      | XOR<
          MapElementCreateWithoutMapInput,
          MapElementUncheckedCreateWithoutMapInput
        >
      | MapElementCreateWithoutMapInput[]
      | MapElementUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutMapInput
      | MapElementCreateOrConnectWithoutMapInput[];
    createMany?: MapElementCreateManyMapInputEnvelope;
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
  };

  export type MapSpaceUncheckedCreateNestedManyWithoutMapInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutMapInput,
          MapSpaceUncheckedCreateWithoutMapInput
        >
      | MapSpaceCreateWithoutMapInput[]
      | MapSpaceUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutMapInput
      | MapSpaceCreateOrConnectWithoutMapInput[];
    createMany?: MapSpaceCreateManyMapInputEnvelope;
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
  };

  export type MapUncheckedCreateNestedManyWithoutTemplateInput = {
    create?:
      | XOR<
          MapCreateWithoutTemplateInput,
          MapUncheckedCreateWithoutTemplateInput
        >
      | MapCreateWithoutTemplateInput[]
      | MapUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutTemplateInput
      | MapCreateOrConnectWithoutTemplateInput[];
    createMany?: MapCreateManyTemplateInputEnvelope;
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutMapInput = {
    create?:
      | XOR<MessageCreateWithoutMapInput, MessageUncheckedCreateWithoutMapInput>
      | MessageCreateWithoutMapInput[]
      | MessageUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutMapInput
      | MessageCreateOrConnectWithoutMapInput[];
    createMany?: MessageCreateManyMapInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type user_map_visitsUncheckedCreateNestedManyWithoutMapsInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutMapsInput,
          user_map_visitsUncheckedCreateWithoutMapsInput
        >
      | user_map_visitsCreateWithoutMapsInput[]
      | user_map_visitsUncheckedCreateWithoutMapsInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutMapsInput
      | user_map_visitsCreateOrConnectWithoutMapsInput[];
    createMany?: user_map_visitsCreateManyMapsInputEnvelope;
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
  };

  export type MapElementUpdateManyWithoutMapNestedInput = {
    create?:
      | XOR<
          MapElementCreateWithoutMapInput,
          MapElementUncheckedCreateWithoutMapInput
        >
      | MapElementCreateWithoutMapInput[]
      | MapElementUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutMapInput
      | MapElementCreateOrConnectWithoutMapInput[];
    upsert?:
      | MapElementUpsertWithWhereUniqueWithoutMapInput
      | MapElementUpsertWithWhereUniqueWithoutMapInput[];
    createMany?: MapElementCreateManyMapInputEnvelope;
    set?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    disconnect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    delete?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    update?:
      | MapElementUpdateWithWhereUniqueWithoutMapInput
      | MapElementUpdateWithWhereUniqueWithoutMapInput[];
    updateMany?:
      | MapElementUpdateManyWithWhereWithoutMapInput
      | MapElementUpdateManyWithWhereWithoutMapInput[];
    deleteMany?: MapElementScalarWhereInput | MapElementScalarWhereInput[];
  };

  export type MapSpaceUpdateManyWithoutMapNestedInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutMapInput,
          MapSpaceUncheckedCreateWithoutMapInput
        >
      | MapSpaceCreateWithoutMapInput[]
      | MapSpaceUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutMapInput
      | MapSpaceCreateOrConnectWithoutMapInput[];
    upsert?:
      | MapSpaceUpsertWithWhereUniqueWithoutMapInput
      | MapSpaceUpsertWithWhereUniqueWithoutMapInput[];
    createMany?: MapSpaceCreateManyMapInputEnvelope;
    set?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    disconnect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    delete?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    update?:
      | MapSpaceUpdateWithWhereUniqueWithoutMapInput
      | MapSpaceUpdateWithWhereUniqueWithoutMapInput[];
    updateMany?:
      | MapSpaceUpdateManyWithWhereWithoutMapInput
      | MapSpaceUpdateManyWithWhereWithoutMapInput[];
    deleteMany?: MapSpaceScalarWhereInput | MapSpaceScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutCreatedMapsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedMapsInput,
      UserUncheckedCreateWithoutCreatedMapsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMapsInput;
    upsert?: UserUpsertWithoutCreatedMapsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedMapsInput,
        UserUpdateWithoutCreatedMapsInput
      >,
      UserUncheckedUpdateWithoutCreatedMapsInput
    >;
  };

  export type MapUpdateOneWithoutChildMapsNestedInput = {
    create?: XOR<
      MapCreateWithoutChildMapsInput,
      MapUncheckedCreateWithoutChildMapsInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutChildMapsInput;
    upsert?: MapUpsertWithoutChildMapsInput;
    disconnect?: MapWhereInput | boolean;
    delete?: MapWhereInput | boolean;
    connect?: MapWhereUniqueInput;
    update?: XOR<
      XOR<
        MapUpdateToOneWithWhereWithoutChildMapsInput,
        MapUpdateWithoutChildMapsInput
      >,
      MapUncheckedUpdateWithoutChildMapsInput
    >;
  };

  export type MapUpdateManyWithoutTemplateNestedInput = {
    create?:
      | XOR<
          MapCreateWithoutTemplateInput,
          MapUncheckedCreateWithoutTemplateInput
        >
      | MapCreateWithoutTemplateInput[]
      | MapUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutTemplateInput
      | MapCreateOrConnectWithoutTemplateInput[];
    upsert?:
      | MapUpsertWithWhereUniqueWithoutTemplateInput
      | MapUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: MapCreateManyTemplateInputEnvelope;
    set?: MapWhereUniqueInput | MapWhereUniqueInput[];
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[];
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    update?:
      | MapUpdateWithWhereUniqueWithoutTemplateInput
      | MapUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?:
      | MapUpdateManyWithWhereWithoutTemplateInput
      | MapUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutMapNestedInput = {
    create?:
      | XOR<MessageCreateWithoutMapInput, MessageUncheckedCreateWithoutMapInput>
      | MessageCreateWithoutMapInput[]
      | MessageUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutMapInput
      | MessageCreateOrConnectWithoutMapInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutMapInput
      | MessageUpsertWithWhereUniqueWithoutMapInput[];
    createMany?: MessageCreateManyMapInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutMapInput
      | MessageUpdateWithWhereUniqueWithoutMapInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutMapInput
      | MessageUpdateManyWithWhereWithoutMapInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type user_map_visitsUpdateManyWithoutMapsNestedInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutMapsInput,
          user_map_visitsUncheckedCreateWithoutMapsInput
        >
      | user_map_visitsCreateWithoutMapsInput[]
      | user_map_visitsUncheckedCreateWithoutMapsInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutMapsInput
      | user_map_visitsCreateOrConnectWithoutMapsInput[];
    upsert?:
      | user_map_visitsUpsertWithWhereUniqueWithoutMapsInput
      | user_map_visitsUpsertWithWhereUniqueWithoutMapsInput[];
    createMany?: user_map_visitsCreateManyMapsInputEnvelope;
    set?: user_map_visitsWhereUniqueInput | user_map_visitsWhereUniqueInput[];
    disconnect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    delete?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    update?:
      | user_map_visitsUpdateWithWhereUniqueWithoutMapsInput
      | user_map_visitsUpdateWithWhereUniqueWithoutMapsInput[];
    updateMany?:
      | user_map_visitsUpdateManyWithWhereWithoutMapsInput
      | user_map_visitsUpdateManyWithWhereWithoutMapsInput[];
    deleteMany?:
      | user_map_visitsScalarWhereInput
      | user_map_visitsScalarWhereInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type MapElementUncheckedUpdateManyWithoutMapNestedInput = {
    create?:
      | XOR<
          MapElementCreateWithoutMapInput,
          MapElementUncheckedCreateWithoutMapInput
        >
      | MapElementCreateWithoutMapInput[]
      | MapElementUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapElementCreateOrConnectWithoutMapInput
      | MapElementCreateOrConnectWithoutMapInput[];
    upsert?:
      | MapElementUpsertWithWhereUniqueWithoutMapInput
      | MapElementUpsertWithWhereUniqueWithoutMapInput[];
    createMany?: MapElementCreateManyMapInputEnvelope;
    set?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    disconnect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    delete?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    connect?: MapElementWhereUniqueInput | MapElementWhereUniqueInput[];
    update?:
      | MapElementUpdateWithWhereUniqueWithoutMapInput
      | MapElementUpdateWithWhereUniqueWithoutMapInput[];
    updateMany?:
      | MapElementUpdateManyWithWhereWithoutMapInput
      | MapElementUpdateManyWithWhereWithoutMapInput[];
    deleteMany?: MapElementScalarWhereInput | MapElementScalarWhereInput[];
  };

  export type MapSpaceUncheckedUpdateManyWithoutMapNestedInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutMapInput,
          MapSpaceUncheckedCreateWithoutMapInput
        >
      | MapSpaceCreateWithoutMapInput[]
      | MapSpaceUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutMapInput
      | MapSpaceCreateOrConnectWithoutMapInput[];
    upsert?:
      | MapSpaceUpsertWithWhereUniqueWithoutMapInput
      | MapSpaceUpsertWithWhereUniqueWithoutMapInput[];
    createMany?: MapSpaceCreateManyMapInputEnvelope;
    set?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    disconnect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    delete?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    update?:
      | MapSpaceUpdateWithWhereUniqueWithoutMapInput
      | MapSpaceUpdateWithWhereUniqueWithoutMapInput[];
    updateMany?:
      | MapSpaceUpdateManyWithWhereWithoutMapInput
      | MapSpaceUpdateManyWithWhereWithoutMapInput[];
    deleteMany?: MapSpaceScalarWhereInput | MapSpaceScalarWhereInput[];
  };

  export type MapUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?:
      | XOR<
          MapCreateWithoutTemplateInput,
          MapUncheckedCreateWithoutTemplateInput
        >
      | MapCreateWithoutTemplateInput[]
      | MapUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutTemplateInput
      | MapCreateOrConnectWithoutTemplateInput[];
    upsert?:
      | MapUpsertWithWhereUniqueWithoutTemplateInput
      | MapUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: MapCreateManyTemplateInputEnvelope;
    set?: MapWhereUniqueInput | MapWhereUniqueInput[];
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[];
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    update?:
      | MapUpdateWithWhereUniqueWithoutTemplateInput
      | MapUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?:
      | MapUpdateManyWithWhereWithoutTemplateInput
      | MapUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutMapNestedInput = {
    create?:
      | XOR<MessageCreateWithoutMapInput, MessageUncheckedCreateWithoutMapInput>
      | MessageCreateWithoutMapInput[]
      | MessageUncheckedCreateWithoutMapInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutMapInput
      | MessageCreateOrConnectWithoutMapInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutMapInput
      | MessageUpsertWithWhereUniqueWithoutMapInput[];
    createMany?: MessageCreateManyMapInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutMapInput
      | MessageUpdateWithWhereUniqueWithoutMapInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutMapInput
      | MessageUpdateManyWithWhereWithoutMapInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutMapsInput,
          user_map_visitsUncheckedCreateWithoutMapsInput
        >
      | user_map_visitsCreateWithoutMapsInput[]
      | user_map_visitsUncheckedCreateWithoutMapsInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutMapsInput
      | user_map_visitsCreateOrConnectWithoutMapsInput[];
    upsert?:
      | user_map_visitsUpsertWithWhereUniqueWithoutMapsInput
      | user_map_visitsUpsertWithWhereUniqueWithoutMapsInput[];
    createMany?: user_map_visitsCreateManyMapsInputEnvelope;
    set?: user_map_visitsWhereUniqueInput | user_map_visitsWhereUniqueInput[];
    disconnect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    delete?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    update?:
      | user_map_visitsUpdateWithWhereUniqueWithoutMapsInput
      | user_map_visitsUpdateWithWhereUniqueWithoutMapsInput[];
    updateMany?:
      | user_map_visitsUpdateManyWithWhereWithoutMapsInput
      | user_map_visitsUpdateManyWithWhereWithoutMapsInput[];
    deleteMany?:
      | user_map_visitsScalarWhereInput
      | user_map_visitsScalarWhereInput[];
  };

  export type AvatarCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      AvatarCreateWithoutUsersInput,
      AvatarUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: AvatarCreateOrConnectWithoutUsersInput;
    connect?: AvatarWhereUniqueInput;
  };

  export type SpaceCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput>
      | SpaceCreateWithoutOwnerInput[]
      | SpaceUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | SpaceCreateOrConnectWithoutOwnerInput
      | SpaceCreateOrConnectWithoutOwnerInput[];
    createMany?: SpaceCreateManyOwnerInputEnvelope;
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
  };

  export type AvatarCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<
          AvatarCreateWithoutCreatorInput,
          AvatarUncheckedCreateWithoutCreatorInput
        >
      | AvatarCreateWithoutCreatorInput[]
      | AvatarUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | AvatarCreateOrConnectWithoutCreatorInput
      | AvatarCreateOrConnectWithoutCreatorInput[];
    createMany?: AvatarCreateManyCreatorInputEnvelope;
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
  };

  export type ElementCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<
          ElementCreateWithoutCreatorInput,
          ElementUncheckedCreateWithoutCreatorInput
        >
      | ElementCreateWithoutCreatorInput[]
      | ElementUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | ElementCreateOrConnectWithoutCreatorInput
      | ElementCreateOrConnectWithoutCreatorInput[];
    createMany?: ElementCreateManyCreatorInputEnvelope;
    connect?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
  };

  export type MapCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<MapCreateWithoutCreatorInput, MapUncheckedCreateWithoutCreatorInput>
      | MapCreateWithoutCreatorInput[]
      | MapUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutCreatorInput
      | MapCreateOrConnectWithoutCreatorInput[];
    createMany?: MapCreateManyCreatorInputEnvelope;
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          MessageCreateWithoutUserInput,
          MessageUncheckedCreateWithoutUserInput
        >
      | MessageCreateWithoutUserInput[]
      | MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutUserInput
      | MessageCreateOrConnectWithoutUserInput[];
    createMany?: MessageCreateManyUserInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ActivityLogCreateWithoutUserInput,
          ActivityLogUncheckedCreateWithoutUserInput
        >
      | ActivityLogCreateWithoutUserInput[]
      | ActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityLogCreateOrConnectWithoutUserInput
      | ActivityLogCreateOrConnectWithoutUserInput[];
    createMany?: ActivityLogCreateManyUserInputEnvelope;
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
  };

  export type user_map_visitsCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutUsersInput,
          user_map_visitsUncheckedCreateWithoutUsersInput
        >
      | user_map_visitsCreateWithoutUsersInput[]
      | user_map_visitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutUsersInput
      | user_map_visitsCreateOrConnectWithoutUsersInput[];
    createMany?: user_map_visitsCreateManyUsersInputEnvelope;
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
  };

  export type SpaceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput>
      | SpaceCreateWithoutOwnerInput[]
      | SpaceUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | SpaceCreateOrConnectWithoutOwnerInput
      | SpaceCreateOrConnectWithoutOwnerInput[];
    createMany?: SpaceCreateManyOwnerInputEnvelope;
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
  };

  export type AvatarUncheckedCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<
          AvatarCreateWithoutCreatorInput,
          AvatarUncheckedCreateWithoutCreatorInput
        >
      | AvatarCreateWithoutCreatorInput[]
      | AvatarUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | AvatarCreateOrConnectWithoutCreatorInput
      | AvatarCreateOrConnectWithoutCreatorInput[];
    createMany?: AvatarCreateManyCreatorInputEnvelope;
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
  };

  export type ElementUncheckedCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<
          ElementCreateWithoutCreatorInput,
          ElementUncheckedCreateWithoutCreatorInput
        >
      | ElementCreateWithoutCreatorInput[]
      | ElementUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | ElementCreateOrConnectWithoutCreatorInput
      | ElementCreateOrConnectWithoutCreatorInput[];
    createMany?: ElementCreateManyCreatorInputEnvelope;
    connect?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
  };

  export type MapUncheckedCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<MapCreateWithoutCreatorInput, MapUncheckedCreateWithoutCreatorInput>
      | MapCreateWithoutCreatorInput[]
      | MapUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutCreatorInput
      | MapCreateOrConnectWithoutCreatorInput[];
    createMany?: MapCreateManyCreatorInputEnvelope;
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          MessageCreateWithoutUserInput,
          MessageUncheckedCreateWithoutUserInput
        >
      | MessageCreateWithoutUserInput[]
      | MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutUserInput
      | MessageCreateOrConnectWithoutUserInput[];
    createMany?: MessageCreateManyUserInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ActivityLogCreateWithoutUserInput,
          ActivityLogUncheckedCreateWithoutUserInput
        >
      | ActivityLogCreateWithoutUserInput[]
      | ActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityLogCreateOrConnectWithoutUserInput
      | ActivityLogCreateOrConnectWithoutUserInput[];
    createMany?: ActivityLogCreateManyUserInputEnvelope;
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
  };

  export type user_map_visitsUncheckedCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutUsersInput,
          user_map_visitsUncheckedCreateWithoutUsersInput
        >
      | user_map_visitsCreateWithoutUsersInput[]
      | user_map_visitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutUsersInput
      | user_map_visitsCreateOrConnectWithoutUsersInput[];
    createMany?: user_map_visitsCreateManyUsersInputEnvelope;
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
  };

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type AvatarUpdateOneWithoutUsersNestedInput = {
    create?: XOR<
      AvatarCreateWithoutUsersInput,
      AvatarUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: AvatarCreateOrConnectWithoutUsersInput;
    upsert?: AvatarUpsertWithoutUsersInput;
    disconnect?: AvatarWhereInput | boolean;
    delete?: AvatarWhereInput | boolean;
    connect?: AvatarWhereUniqueInput;
    update?: XOR<
      XOR<
        AvatarUpdateToOneWithWhereWithoutUsersInput,
        AvatarUpdateWithoutUsersInput
      >,
      AvatarUncheckedUpdateWithoutUsersInput
    >;
  };

  export type SpaceUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput>
      | SpaceCreateWithoutOwnerInput[]
      | SpaceUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | SpaceCreateOrConnectWithoutOwnerInput
      | SpaceCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | SpaceUpsertWithWhereUniqueWithoutOwnerInput
      | SpaceUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: SpaceCreateManyOwnerInputEnvelope;
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    update?:
      | SpaceUpdateWithWhereUniqueWithoutOwnerInput
      | SpaceUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | SpaceUpdateManyWithWhereWithoutOwnerInput
      | SpaceUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[];
  };

  export type AvatarUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<
          AvatarCreateWithoutCreatorInput,
          AvatarUncheckedCreateWithoutCreatorInput
        >
      | AvatarCreateWithoutCreatorInput[]
      | AvatarUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | AvatarCreateOrConnectWithoutCreatorInput
      | AvatarCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | AvatarUpsertWithWhereUniqueWithoutCreatorInput
      | AvatarUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: AvatarCreateManyCreatorInputEnvelope;
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    update?:
      | AvatarUpdateWithWhereUniqueWithoutCreatorInput
      | AvatarUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | AvatarUpdateManyWithWhereWithoutCreatorInput
      | AvatarUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[];
  };

  export type ElementUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<
          ElementCreateWithoutCreatorInput,
          ElementUncheckedCreateWithoutCreatorInput
        >
      | ElementCreateWithoutCreatorInput[]
      | ElementUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | ElementCreateOrConnectWithoutCreatorInput
      | ElementCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | ElementUpsertWithWhereUniqueWithoutCreatorInput
      | ElementUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: ElementCreateManyCreatorInputEnvelope;
    set?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    disconnect?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    delete?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    connect?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    update?:
      | ElementUpdateWithWhereUniqueWithoutCreatorInput
      | ElementUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | ElementUpdateManyWithWhereWithoutCreatorInput
      | ElementUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: ElementScalarWhereInput | ElementScalarWhereInput[];
  };

  export type MapUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<MapCreateWithoutCreatorInput, MapUncheckedCreateWithoutCreatorInput>
      | MapCreateWithoutCreatorInput[]
      | MapUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutCreatorInput
      | MapCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | MapUpsertWithWhereUniqueWithoutCreatorInput
      | MapUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: MapCreateManyCreatorInputEnvelope;
    set?: MapWhereUniqueInput | MapWhereUniqueInput[];
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[];
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    update?:
      | MapUpdateWithWhereUniqueWithoutCreatorInput
      | MapUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | MapUpdateManyWithWhereWithoutCreatorInput
      | MapUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutUserInput,
          MessageUncheckedCreateWithoutUserInput
        >
      | MessageCreateWithoutUserInput[]
      | MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutUserInput
      | MessageCreateOrConnectWithoutUserInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutUserInput
      | MessageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MessageCreateManyUserInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutUserInput
      | MessageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutUserInput
      | MessageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ActivityLogCreateWithoutUserInput,
          ActivityLogUncheckedCreateWithoutUserInput
        >
      | ActivityLogCreateWithoutUserInput[]
      | ActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityLogCreateOrConnectWithoutUserInput
      | ActivityLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | ActivityLogUpsertWithWhereUniqueWithoutUserInput
      | ActivityLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ActivityLogCreateManyUserInputEnvelope;
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    update?:
      | ActivityLogUpdateWithWhereUniqueWithoutUserInput
      | ActivityLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ActivityLogUpdateManyWithWhereWithoutUserInput
      | ActivityLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[];
  };

  export type user_map_visitsUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutUsersInput,
          user_map_visitsUncheckedCreateWithoutUsersInput
        >
      | user_map_visitsCreateWithoutUsersInput[]
      | user_map_visitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutUsersInput
      | user_map_visitsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | user_map_visitsUpsertWithWhereUniqueWithoutUsersInput
      | user_map_visitsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: user_map_visitsCreateManyUsersInputEnvelope;
    set?: user_map_visitsWhereUniqueInput | user_map_visitsWhereUniqueInput[];
    disconnect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    delete?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    update?:
      | user_map_visitsUpdateWithWhereUniqueWithoutUsersInput
      | user_map_visitsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | user_map_visitsUpdateManyWithWhereWithoutUsersInput
      | user_map_visitsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?:
      | user_map_visitsScalarWhereInput
      | user_map_visitsScalarWhereInput[];
  };

  export type SpaceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<SpaceCreateWithoutOwnerInput, SpaceUncheckedCreateWithoutOwnerInput>
      | SpaceCreateWithoutOwnerInput[]
      | SpaceUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | SpaceCreateOrConnectWithoutOwnerInput
      | SpaceCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | SpaceUpsertWithWhereUniqueWithoutOwnerInput
      | SpaceUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: SpaceCreateManyOwnerInputEnvelope;
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[];
    update?:
      | SpaceUpdateWithWhereUniqueWithoutOwnerInput
      | SpaceUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | SpaceUpdateManyWithWhereWithoutOwnerInput
      | SpaceUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[];
  };

  export type AvatarUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<
          AvatarCreateWithoutCreatorInput,
          AvatarUncheckedCreateWithoutCreatorInput
        >
      | AvatarCreateWithoutCreatorInput[]
      | AvatarUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | AvatarCreateOrConnectWithoutCreatorInput
      | AvatarCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | AvatarUpsertWithWhereUniqueWithoutCreatorInput
      | AvatarUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: AvatarCreateManyCreatorInputEnvelope;
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[];
    update?:
      | AvatarUpdateWithWhereUniqueWithoutCreatorInput
      | AvatarUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | AvatarUpdateManyWithWhereWithoutCreatorInput
      | AvatarUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[];
  };

  export type ElementUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<
          ElementCreateWithoutCreatorInput,
          ElementUncheckedCreateWithoutCreatorInput
        >
      | ElementCreateWithoutCreatorInput[]
      | ElementUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | ElementCreateOrConnectWithoutCreatorInput
      | ElementCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | ElementUpsertWithWhereUniqueWithoutCreatorInput
      | ElementUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: ElementCreateManyCreatorInputEnvelope;
    set?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    disconnect?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    delete?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    connect?: ElementWhereUniqueInput | ElementWhereUniqueInput[];
    update?:
      | ElementUpdateWithWhereUniqueWithoutCreatorInput
      | ElementUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | ElementUpdateManyWithWhereWithoutCreatorInput
      | ElementUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: ElementScalarWhereInput | ElementScalarWhereInput[];
  };

  export type MapUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<MapCreateWithoutCreatorInput, MapUncheckedCreateWithoutCreatorInput>
      | MapCreateWithoutCreatorInput[]
      | MapUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | MapCreateOrConnectWithoutCreatorInput
      | MapCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | MapUpsertWithWhereUniqueWithoutCreatorInput
      | MapUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: MapCreateManyCreatorInputEnvelope;
    set?: MapWhereUniqueInput | MapWhereUniqueInput[];
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[];
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[];
    update?:
      | MapUpdateWithWhereUniqueWithoutCreatorInput
      | MapUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | MapUpdateManyWithWhereWithoutCreatorInput
      | MapUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutUserInput,
          MessageUncheckedCreateWithoutUserInput
        >
      | MessageCreateWithoutUserInput[]
      | MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutUserInput
      | MessageCreateOrConnectWithoutUserInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutUserInput
      | MessageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MessageCreateManyUserInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutUserInput
      | MessageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutUserInput
      | MessageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ActivityLogCreateWithoutUserInput,
          ActivityLogUncheckedCreateWithoutUserInput
        >
      | ActivityLogCreateWithoutUserInput[]
      | ActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ActivityLogCreateOrConnectWithoutUserInput
      | ActivityLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | ActivityLogUpsertWithWhereUniqueWithoutUserInput
      | ActivityLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ActivityLogCreateManyUserInputEnvelope;
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[];
    update?:
      | ActivityLogUpdateWithWhereUniqueWithoutUserInput
      | ActivityLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ActivityLogUpdateManyWithWhereWithoutUserInput
      | ActivityLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[];
  };

  export type user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          user_map_visitsCreateWithoutUsersInput,
          user_map_visitsUncheckedCreateWithoutUsersInput
        >
      | user_map_visitsCreateWithoutUsersInput[]
      | user_map_visitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | user_map_visitsCreateOrConnectWithoutUsersInput
      | user_map_visitsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | user_map_visitsUpsertWithWhereUniqueWithoutUsersInput
      | user_map_visitsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: user_map_visitsCreateManyUsersInputEnvelope;
    set?: user_map_visitsWhereUniqueInput | user_map_visitsWhereUniqueInput[];
    disconnect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    delete?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    connect?:
      | user_map_visitsWhereUniqueInput
      | user_map_visitsWhereUniqueInput[];
    update?:
      | user_map_visitsUpdateWithWhereUniqueWithoutUsersInput
      | user_map_visitsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | user_map_visitsUpdateManyWithWhereWithoutUsersInput
      | user_map_visitsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?:
      | user_map_visitsScalarWhereInput
      | user_map_visitsScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput;
    upsert?: UserUpsertWithoutActivityLogsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutActivityLogsInput,
        UserUpdateWithoutActivityLogsInput
      >,
      UserUncheckedUpdateWithoutActivityLogsInput
    >;
  };

  export type MapSpaceCreateNestedManyWithoutSpaceInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutSpaceInput,
          MapSpaceUncheckedCreateWithoutSpaceInput
        >
      | MapSpaceCreateWithoutSpaceInput[]
      | MapSpaceUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutSpaceInput
      | MapSpaceCreateOrConnectWithoutSpaceInput[];
    createMany?: MapSpaceCreateManySpaceInputEnvelope;
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutSpaceInput = {
    create?:
      | XOR<
          MessageCreateWithoutSpaceInput,
          MessageUncheckedCreateWithoutSpaceInput
        >
      | MessageCreateWithoutSpaceInput[]
      | MessageUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSpaceInput
      | MessageCreateOrConnectWithoutSpaceInput[];
    createMany?: MessageCreateManySpaceInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type SpaceElementCreateNestedManyWithoutSpaceInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutSpaceInput,
          SpaceElementUncheckedCreateWithoutSpaceInput
        >
      | SpaceElementCreateWithoutSpaceInput[]
      | SpaceElementUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutSpaceInput
      | SpaceElementCreateOrConnectWithoutSpaceInput[];
    createMany?: SpaceElementCreateManySpaceInputEnvelope;
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutSpacesInput = {
    create?: XOR<
      UserCreateWithoutSpacesInput,
      UserUncheckedCreateWithoutSpacesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSpacesInput;
    connect?: UserWhereUniqueInput;
  };

  export type MapSpaceUncheckedCreateNestedManyWithoutSpaceInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutSpaceInput,
          MapSpaceUncheckedCreateWithoutSpaceInput
        >
      | MapSpaceCreateWithoutSpaceInput[]
      | MapSpaceUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutSpaceInput
      | MapSpaceCreateOrConnectWithoutSpaceInput[];
    createMany?: MapSpaceCreateManySpaceInputEnvelope;
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutSpaceInput = {
    create?:
      | XOR<
          MessageCreateWithoutSpaceInput,
          MessageUncheckedCreateWithoutSpaceInput
        >
      | MessageCreateWithoutSpaceInput[]
      | MessageUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSpaceInput
      | MessageCreateOrConnectWithoutSpaceInput[];
    createMany?: MessageCreateManySpaceInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type SpaceElementUncheckedCreateNestedManyWithoutSpaceInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutSpaceInput,
          SpaceElementUncheckedCreateWithoutSpaceInput
        >
      | SpaceElementCreateWithoutSpaceInput[]
      | SpaceElementUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutSpaceInput
      | SpaceElementCreateOrConnectWithoutSpaceInput[];
    createMany?: SpaceElementCreateManySpaceInputEnvelope;
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
  };

  export type MapSpaceUpdateManyWithoutSpaceNestedInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutSpaceInput,
          MapSpaceUncheckedCreateWithoutSpaceInput
        >
      | MapSpaceCreateWithoutSpaceInput[]
      | MapSpaceUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutSpaceInput
      | MapSpaceCreateOrConnectWithoutSpaceInput[];
    upsert?:
      | MapSpaceUpsertWithWhereUniqueWithoutSpaceInput
      | MapSpaceUpsertWithWhereUniqueWithoutSpaceInput[];
    createMany?: MapSpaceCreateManySpaceInputEnvelope;
    set?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    disconnect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    delete?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    update?:
      | MapSpaceUpdateWithWhereUniqueWithoutSpaceInput
      | MapSpaceUpdateWithWhereUniqueWithoutSpaceInput[];
    updateMany?:
      | MapSpaceUpdateManyWithWhereWithoutSpaceInput
      | MapSpaceUpdateManyWithWhereWithoutSpaceInput[];
    deleteMany?: MapSpaceScalarWhereInput | MapSpaceScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutSpaceNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutSpaceInput,
          MessageUncheckedCreateWithoutSpaceInput
        >
      | MessageCreateWithoutSpaceInput[]
      | MessageUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSpaceInput
      | MessageCreateOrConnectWithoutSpaceInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutSpaceInput
      | MessageUpsertWithWhereUniqueWithoutSpaceInput[];
    createMany?: MessageCreateManySpaceInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutSpaceInput
      | MessageUpdateWithWhereUniqueWithoutSpaceInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutSpaceInput
      | MessageUpdateManyWithWhereWithoutSpaceInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type SpaceElementUpdateManyWithoutSpaceNestedInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutSpaceInput,
          SpaceElementUncheckedCreateWithoutSpaceInput
        >
      | SpaceElementCreateWithoutSpaceInput[]
      | SpaceElementUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutSpaceInput
      | SpaceElementCreateOrConnectWithoutSpaceInput[];
    upsert?:
      | SpaceElementUpsertWithWhereUniqueWithoutSpaceInput
      | SpaceElementUpsertWithWhereUniqueWithoutSpaceInput[];
    createMany?: SpaceElementCreateManySpaceInputEnvelope;
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    update?:
      | SpaceElementUpdateWithWhereUniqueWithoutSpaceInput
      | SpaceElementUpdateWithWhereUniqueWithoutSpaceInput[];
    updateMany?:
      | SpaceElementUpdateManyWithWhereWithoutSpaceInput
      | SpaceElementUpdateManyWithWhereWithoutSpaceInput[];
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutSpacesNestedInput = {
    create?: XOR<
      UserCreateWithoutSpacesInput,
      UserUncheckedCreateWithoutSpacesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSpacesInput;
    upsert?: UserUpsertWithoutSpacesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSpacesInput,
        UserUpdateWithoutSpacesInput
      >,
      UserUncheckedUpdateWithoutSpacesInput
    >;
  };

  export type MapSpaceUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?:
      | XOR<
          MapSpaceCreateWithoutSpaceInput,
          MapSpaceUncheckedCreateWithoutSpaceInput
        >
      | MapSpaceCreateWithoutSpaceInput[]
      | MapSpaceUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MapSpaceCreateOrConnectWithoutSpaceInput
      | MapSpaceCreateOrConnectWithoutSpaceInput[];
    upsert?:
      | MapSpaceUpsertWithWhereUniqueWithoutSpaceInput
      | MapSpaceUpsertWithWhereUniqueWithoutSpaceInput[];
    createMany?: MapSpaceCreateManySpaceInputEnvelope;
    set?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    disconnect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    delete?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    connect?: MapSpaceWhereUniqueInput | MapSpaceWhereUniqueInput[];
    update?:
      | MapSpaceUpdateWithWhereUniqueWithoutSpaceInput
      | MapSpaceUpdateWithWhereUniqueWithoutSpaceInput[];
    updateMany?:
      | MapSpaceUpdateManyWithWhereWithoutSpaceInput
      | MapSpaceUpdateManyWithWhereWithoutSpaceInput[];
    deleteMany?: MapSpaceScalarWhereInput | MapSpaceScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutSpaceInput,
          MessageUncheckedCreateWithoutSpaceInput
        >
      | MessageCreateWithoutSpaceInput[]
      | MessageUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutSpaceInput
      | MessageCreateOrConnectWithoutSpaceInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutSpaceInput
      | MessageUpsertWithWhereUniqueWithoutSpaceInput[];
    createMany?: MessageCreateManySpaceInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutSpaceInput
      | MessageUpdateWithWhereUniqueWithoutSpaceInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutSpaceInput
      | MessageUpdateManyWithWhereWithoutSpaceInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?:
      | XOR<
          SpaceElementCreateWithoutSpaceInput,
          SpaceElementUncheckedCreateWithoutSpaceInput
        >
      | SpaceElementCreateWithoutSpaceInput[]
      | SpaceElementUncheckedCreateWithoutSpaceInput[];
    connectOrCreate?:
      | SpaceElementCreateOrConnectWithoutSpaceInput
      | SpaceElementCreateOrConnectWithoutSpaceInput[];
    upsert?:
      | SpaceElementUpsertWithWhereUniqueWithoutSpaceInput
      | SpaceElementUpsertWithWhereUniqueWithoutSpaceInput[];
    createMany?: SpaceElementCreateManySpaceInputEnvelope;
    set?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    disconnect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    delete?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    connect?: SpaceElementWhereUniqueInput | SpaceElementWhereUniqueInput[];
    update?:
      | SpaceElementUpdateWithWhereUniqueWithoutSpaceInput
      | SpaceElementUpdateWithWhereUniqueWithoutSpaceInput[];
    updateMany?:
      | SpaceElementUpdateManyWithWhereWithoutSpaceInput
      | SpaceElementUpdateManyWithWhereWithoutSpaceInput[];
    deleteMany?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[];
  };

  export type ElementCreateNestedOneWithoutMapElementsInput = {
    create?: XOR<
      ElementCreateWithoutMapElementsInput,
      ElementUncheckedCreateWithoutMapElementsInput
    >;
    connectOrCreate?: ElementCreateOrConnectWithoutMapElementsInput;
    connect?: ElementWhereUniqueInput;
  };

  export type MapCreateNestedOneWithoutMapElementsInput = {
    create?: XOR<
      MapCreateWithoutMapElementsInput,
      MapUncheckedCreateWithoutMapElementsInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutMapElementsInput;
    connect?: MapWhereUniqueInput;
  };

  export type ElementUpdateOneRequiredWithoutMapElementsNestedInput = {
    create?: XOR<
      ElementCreateWithoutMapElementsInput,
      ElementUncheckedCreateWithoutMapElementsInput
    >;
    connectOrCreate?: ElementCreateOrConnectWithoutMapElementsInput;
    upsert?: ElementUpsertWithoutMapElementsInput;
    connect?: ElementWhereUniqueInput;
    update?: XOR<
      XOR<
        ElementUpdateToOneWithWhereWithoutMapElementsInput,
        ElementUpdateWithoutMapElementsInput
      >,
      ElementUncheckedUpdateWithoutMapElementsInput
    >;
  };

  export type MapUpdateOneRequiredWithoutMapElementsNestedInput = {
    create?: XOR<
      MapCreateWithoutMapElementsInput,
      MapUncheckedCreateWithoutMapElementsInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutMapElementsInput;
    upsert?: MapUpsertWithoutMapElementsInput;
    connect?: MapWhereUniqueInput;
    update?: XOR<
      XOR<
        MapUpdateToOneWithWhereWithoutMapElementsInput,
        MapUpdateWithoutMapElementsInput
      >,
      MapUncheckedUpdateWithoutMapElementsInput
    >;
  };

  export type MapCreateNestedOneWithoutMapSpacesInput = {
    create?: XOR<
      MapCreateWithoutMapSpacesInput,
      MapUncheckedCreateWithoutMapSpacesInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutMapSpacesInput;
    connect?: MapWhereUniqueInput;
  };

  export type SpaceCreateNestedOneWithoutMapSpacesInput = {
    create?: XOR<
      SpaceCreateWithoutMapSpacesInput,
      SpaceUncheckedCreateWithoutMapSpacesInput
    >;
    connectOrCreate?: SpaceCreateOrConnectWithoutMapSpacesInput;
    connect?: SpaceWhereUniqueInput;
  };

  export type MapUpdateOneRequiredWithoutMapSpacesNestedInput = {
    create?: XOR<
      MapCreateWithoutMapSpacesInput,
      MapUncheckedCreateWithoutMapSpacesInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutMapSpacesInput;
    upsert?: MapUpsertWithoutMapSpacesInput;
    connect?: MapWhereUniqueInput;
    update?: XOR<
      XOR<
        MapUpdateToOneWithWhereWithoutMapSpacesInput,
        MapUpdateWithoutMapSpacesInput
      >,
      MapUncheckedUpdateWithoutMapSpacesInput
    >;
  };

  export type SpaceUpdateOneRequiredWithoutMapSpacesNestedInput = {
    create?: XOR<
      SpaceCreateWithoutMapSpacesInput,
      SpaceUncheckedCreateWithoutMapSpacesInput
    >;
    connectOrCreate?: SpaceCreateOrConnectWithoutMapSpacesInput;
    upsert?: SpaceUpsertWithoutMapSpacesInput;
    connect?: SpaceWhereUniqueInput;
    update?: XOR<
      XOR<
        SpaceUpdateToOneWithWhereWithoutMapSpacesInput,
        SpaceUpdateWithoutMapSpacesInput
      >,
      SpaceUncheckedUpdateWithoutMapSpacesInput
    >;
  };

  export type ElementCreateNestedOneWithoutSpaceElementsInput = {
    create?: XOR<
      ElementCreateWithoutSpaceElementsInput,
      ElementUncheckedCreateWithoutSpaceElementsInput
    >;
    connectOrCreate?: ElementCreateOrConnectWithoutSpaceElementsInput;
    connect?: ElementWhereUniqueInput;
  };

  export type SpaceCreateNestedOneWithoutElementsInput = {
    create?: XOR<
      SpaceCreateWithoutElementsInput,
      SpaceUncheckedCreateWithoutElementsInput
    >;
    connectOrCreate?: SpaceCreateOrConnectWithoutElementsInput;
    connect?: SpaceWhereUniqueInput;
  };

  export type ElementUpdateOneRequiredWithoutSpaceElementsNestedInput = {
    create?: XOR<
      ElementCreateWithoutSpaceElementsInput,
      ElementUncheckedCreateWithoutSpaceElementsInput
    >;
    connectOrCreate?: ElementCreateOrConnectWithoutSpaceElementsInput;
    upsert?: ElementUpsertWithoutSpaceElementsInput;
    connect?: ElementWhereUniqueInput;
    update?: XOR<
      XOR<
        ElementUpdateToOneWithWhereWithoutSpaceElementsInput,
        ElementUpdateWithoutSpaceElementsInput
      >,
      ElementUncheckedUpdateWithoutSpaceElementsInput
    >;
  };

  export type SpaceUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<
      SpaceCreateWithoutElementsInput,
      SpaceUncheckedCreateWithoutElementsInput
    >;
    connectOrCreate?: SpaceCreateOrConnectWithoutElementsInput;
    upsert?: SpaceUpsertWithoutElementsInput;
    connect?: SpaceWhereUniqueInput;
    update?: XOR<
      XOR<
        SpaceUpdateToOneWithWhereWithoutElementsInput,
        SpaceUpdateWithoutElementsInput
      >,
      SpaceUncheckedUpdateWithoutElementsInput
    >;
  };

  export type MapCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      MapCreateWithoutMessagesInput,
      MapUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutMessagesInput;
    connect?: MapWhereUniqueInput;
  };

  export type SpaceCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      SpaceCreateWithoutMessagesInput,
      SpaceUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: SpaceCreateOrConnectWithoutMessagesInput;
    connect?: SpaceWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type MapUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<
      MapCreateWithoutMessagesInput,
      MapUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutMessagesInput;
    upsert?: MapUpsertWithoutMessagesInput;
    disconnect?: MapWhereInput | boolean;
    delete?: MapWhereInput | boolean;
    connect?: MapWhereUniqueInput;
    update?: XOR<
      XOR<
        MapUpdateToOneWithWhereWithoutMessagesInput,
        MapUpdateWithoutMessagesInput
      >,
      MapUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type SpaceUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<
      SpaceCreateWithoutMessagesInput,
      SpaceUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: SpaceCreateOrConnectWithoutMessagesInput;
    upsert?: SpaceUpsertWithoutMessagesInput;
    disconnect?: SpaceWhereInput | boolean;
    delete?: SpaceWhereInput | boolean;
    connect?: SpaceWhereUniqueInput;
    update?: XOR<
      XOR<
        SpaceUpdateToOneWithWhereWithoutMessagesInput,
        SpaceUpdateWithoutMessagesInput
      >,
      SpaceUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    upsert?: UserUpsertWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMessagesInput,
        UserUpdateWithoutMessagesInput
      >,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type MapCreateNestedOneWithoutUser_map_visitsInput = {
    create?: XOR<
      MapCreateWithoutUser_map_visitsInput,
      MapUncheckedCreateWithoutUser_map_visitsInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutUser_map_visitsInput;
    connect?: MapWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutUser_map_visitsInput = {
    create?: XOR<
      UserCreateWithoutUser_map_visitsInput,
      UserUncheckedCreateWithoutUser_map_visitsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutUser_map_visitsInput;
    connect?: UserWhereUniqueInput;
  };

  export type MapUpdateOneRequiredWithoutUser_map_visitsNestedInput = {
    create?: XOR<
      MapCreateWithoutUser_map_visitsInput,
      MapUncheckedCreateWithoutUser_map_visitsInput
    >;
    connectOrCreate?: MapCreateOrConnectWithoutUser_map_visitsInput;
    upsert?: MapUpsertWithoutUser_map_visitsInput;
    connect?: MapWhereUniqueInput;
    update?: XOR<
      XOR<
        MapUpdateToOneWithWhereWithoutUser_map_visitsInput,
        MapUpdateWithoutUser_map_visitsInput
      >,
      MapUncheckedUpdateWithoutUser_map_visitsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutUser_map_visitsNestedInput = {
    create?: XOR<
      UserCreateWithoutUser_map_visitsInput,
      UserUncheckedCreateWithoutUser_map_visitsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutUser_map_visitsInput;
    upsert?: UserUpsertWithoutUser_map_visitsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutUser_map_visitsInput,
        UserUpdateWithoutUser_map_visitsInput
      >,
      UserUncheckedUpdateWithoutUser_map_visitsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserCreateWithoutCreatedAvatarsInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateWithoutCreatedAvatarsInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserCreateOrConnectWithoutCreatedAvatarsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedAvatarsInput,
      UserUncheckedCreateWithoutCreatedAvatarsInput
    >;
  };

  export type UserCreateWithoutAvatarInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateWithoutAvatarInput = {
    id?: number;
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserCreateOrConnectWithoutAvatarInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAvatarInput,
      UserUncheckedCreateWithoutAvatarInput
    >;
  };

  export type UserCreateManyAvatarInputEnvelope = {
    data: UserCreateManyAvatarInput | UserCreateManyAvatarInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCreatedAvatarsInput = {
    update: XOR<
      UserUpdateWithoutCreatedAvatarsInput,
      UserUncheckedUpdateWithoutCreatedAvatarsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedAvatarsInput,
      UserUncheckedCreateWithoutCreatedAvatarsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedAvatarsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedAvatarsInput,
      UserUncheckedUpdateWithoutCreatedAvatarsInput
    >;
  };

  export type UserUpdateWithoutCreatedAvatarsInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type UserUpsertWithWhereUniqueWithoutAvatarInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutAvatarInput,
      UserUncheckedUpdateWithoutAvatarInput
    >;
    create: XOR<
      UserCreateWithoutAvatarInput,
      UserUncheckedCreateWithoutAvatarInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutAvatarInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutAvatarInput,
      UserUncheckedUpdateWithoutAvatarInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutAvatarInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutAvatarInput
    >;
  };

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput | UserScalarWhereInput[];
    id?: IntFilter<'User'> | number;
    username?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    avatarId?: IntNullableFilter<'User'> | number | null;
    avatarName?: StringNullableFilter<'User'> | string | null;
    role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
    lastLoginAt?: DateTimeNullableFilter<'User'> | Date | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
  };

  export type UserCreateWithoutCreatedElementsInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateWithoutCreatedElementsInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserCreateOrConnectWithoutCreatedElementsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedElementsInput,
      UserUncheckedCreateWithoutCreatedElementsInput
    >;
  };

  export type MapElementCreateWithoutElementInput = {
    x: number;
    y: number;
    map: MapCreateNestedOneWithoutMapElementsInput;
  };

  export type MapElementUncheckedCreateWithoutElementInput = {
    id?: number;
    mapId: number;
    x: number;
    y: number;
  };

  export type MapElementCreateOrConnectWithoutElementInput = {
    where: MapElementWhereUniqueInput;
    create: XOR<
      MapElementCreateWithoutElementInput,
      MapElementUncheckedCreateWithoutElementInput
    >;
  };

  export type MapElementCreateManyElementInputEnvelope = {
    data: MapElementCreateManyElementInput | MapElementCreateManyElementInput[];
    skipDuplicates?: boolean;
  };

  export type SpaceElementCreateWithoutElementInput = {
    x: number;
    y: number;
    space: SpaceCreateNestedOneWithoutElementsInput;
  };

  export type SpaceElementUncheckedCreateWithoutElementInput = {
    id?: number;
    spaceId: number;
    x: number;
    y: number;
  };

  export type SpaceElementCreateOrConnectWithoutElementInput = {
    where: SpaceElementWhereUniqueInput;
    create: XOR<
      SpaceElementCreateWithoutElementInput,
      SpaceElementUncheckedCreateWithoutElementInput
    >;
  };

  export type SpaceElementCreateManyElementInputEnvelope = {
    data:
      | SpaceElementCreateManyElementInput
      | SpaceElementCreateManyElementInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCreatedElementsInput = {
    update: XOR<
      UserUpdateWithoutCreatedElementsInput,
      UserUncheckedUpdateWithoutCreatedElementsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedElementsInput,
      UserUncheckedCreateWithoutCreatedElementsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedElementsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedElementsInput,
      UserUncheckedUpdateWithoutCreatedElementsInput
    >;
  };

  export type UserUpdateWithoutCreatedElementsInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedElementsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type MapElementUpsertWithWhereUniqueWithoutElementInput = {
    where: MapElementWhereUniqueInput;
    update: XOR<
      MapElementUpdateWithoutElementInput,
      MapElementUncheckedUpdateWithoutElementInput
    >;
    create: XOR<
      MapElementCreateWithoutElementInput,
      MapElementUncheckedCreateWithoutElementInput
    >;
  };

  export type MapElementUpdateWithWhereUniqueWithoutElementInput = {
    where: MapElementWhereUniqueInput;
    data: XOR<
      MapElementUpdateWithoutElementInput,
      MapElementUncheckedUpdateWithoutElementInput
    >;
  };

  export type MapElementUpdateManyWithWhereWithoutElementInput = {
    where: MapElementScalarWhereInput;
    data: XOR<
      MapElementUpdateManyMutationInput,
      MapElementUncheckedUpdateManyWithoutElementInput
    >;
  };

  export type MapElementScalarWhereInput = {
    AND?: MapElementScalarWhereInput | MapElementScalarWhereInput[];
    OR?: MapElementScalarWhereInput[];
    NOT?: MapElementScalarWhereInput | MapElementScalarWhereInput[];
    id?: IntFilter<'MapElement'> | number;
    mapId?: IntFilter<'MapElement'> | number;
    elementId?: IntFilter<'MapElement'> | number;
    x?: IntFilter<'MapElement'> | number;
    y?: IntFilter<'MapElement'> | number;
  };

  export type SpaceElementUpsertWithWhereUniqueWithoutElementInput = {
    where: SpaceElementWhereUniqueInput;
    update: XOR<
      SpaceElementUpdateWithoutElementInput,
      SpaceElementUncheckedUpdateWithoutElementInput
    >;
    create: XOR<
      SpaceElementCreateWithoutElementInput,
      SpaceElementUncheckedCreateWithoutElementInput
    >;
  };

  export type SpaceElementUpdateWithWhereUniqueWithoutElementInput = {
    where: SpaceElementWhereUniqueInput;
    data: XOR<
      SpaceElementUpdateWithoutElementInput,
      SpaceElementUncheckedUpdateWithoutElementInput
    >;
  };

  export type SpaceElementUpdateManyWithWhereWithoutElementInput = {
    where: SpaceElementScalarWhereInput;
    data: XOR<
      SpaceElementUpdateManyMutationInput,
      SpaceElementUncheckedUpdateManyWithoutElementInput
    >;
  };

  export type SpaceElementScalarWhereInput = {
    AND?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[];
    OR?: SpaceElementScalarWhereInput[];
    NOT?: SpaceElementScalarWhereInput | SpaceElementScalarWhereInput[];
    id?: IntFilter<'SpaceElement'> | number;
    spaceId?: IntFilter<'SpaceElement'> | number;
    elementId?: IntFilter<'SpaceElement'> | number;
    x?: IntFilter<'SpaceElement'> | number;
    y?: IntFilter<'SpaceElement'> | number;
  };

  export type MapElementCreateWithoutMapInput = {
    x: number;
    y: number;
    element: ElementCreateNestedOneWithoutMapElementsInput;
  };

  export type MapElementUncheckedCreateWithoutMapInput = {
    id?: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type MapElementCreateOrConnectWithoutMapInput = {
    where: MapElementWhereUniqueInput;
    create: XOR<
      MapElementCreateWithoutMapInput,
      MapElementUncheckedCreateWithoutMapInput
    >;
  };

  export type MapElementCreateManyMapInputEnvelope = {
    data: MapElementCreateManyMapInput | MapElementCreateManyMapInput[];
    skipDuplicates?: boolean;
  };

  export type MapSpaceCreateWithoutMapInput = {
    x: number;
    y: number;
    space: SpaceCreateNestedOneWithoutMapSpacesInput;
  };

  export type MapSpaceUncheckedCreateWithoutMapInput = {
    id?: number;
    spaceId: number;
    x: number;
    y: number;
  };

  export type MapSpaceCreateOrConnectWithoutMapInput = {
    where: MapSpaceWhereUniqueInput;
    create: XOR<
      MapSpaceCreateWithoutMapInput,
      MapSpaceUncheckedCreateWithoutMapInput
    >;
  };

  export type MapSpaceCreateManyMapInputEnvelope = {
    data: MapSpaceCreateManyMapInput | MapSpaceCreateManyMapInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutCreatedMapsInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateWithoutCreatedMapsInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserCreateOrConnectWithoutCreatedMapsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedMapsInput,
      UserUncheckedCreateWithoutCreatedMapsInput
    >;
  };

  export type MapCreateWithoutChildMapsInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceCreateNestedManyWithoutMapInput;
    creator: UserCreateNestedOneWithoutCreatedMapsInput;
    template?: MapCreateNestedOneWithoutChildMapsInput;
    messages?: MessageCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutMapsInput;
  };

  export type MapUncheckedCreateWithoutChildMapsInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutMapInput;
    messages?: MessageUncheckedCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutMapsInput;
  };

  export type MapCreateOrConnectWithoutChildMapsInput = {
    where: MapWhereUniqueInput;
    create: XOR<
      MapCreateWithoutChildMapsInput,
      MapUncheckedCreateWithoutChildMapsInput
    >;
  };

  export type MapCreateWithoutTemplateInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceCreateNestedManyWithoutMapInput;
    creator: UserCreateNestedOneWithoutCreatedMapsInput;
    childMaps?: MapCreateNestedManyWithoutTemplateInput;
    messages?: MessageCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutMapsInput;
  };

  export type MapUncheckedCreateWithoutTemplateInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutMapInput;
    childMaps?: MapUncheckedCreateNestedManyWithoutTemplateInput;
    messages?: MessageUncheckedCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutMapsInput;
  };

  export type MapCreateOrConnectWithoutTemplateInput = {
    where: MapWhereUniqueInput;
    create: XOR<
      MapCreateWithoutTemplateInput,
      MapUncheckedCreateWithoutTemplateInput
    >;
  };

  export type MapCreateManyTemplateInputEnvelope = {
    data: MapCreateManyTemplateInput | MapCreateManyTemplateInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutMapInput = {
    displayName: string;
    text: string;
    createdAt?: Date | string;
    space?: SpaceCreateNestedOneWithoutMessagesInput;
    user: UserCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateWithoutMapInput = {
    id?: number;
    spaceId?: number | null;
    userId: number;
    displayName: string;
    text: string;
    createdAt?: Date | string;
  };

  export type MessageCreateOrConnectWithoutMapInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutMapInput,
      MessageUncheckedCreateWithoutMapInput
    >;
  };

  export type MessageCreateManyMapInputEnvelope = {
    data: MessageCreateManyMapInput | MessageCreateManyMapInput[];
    skipDuplicates?: boolean;
  };

  export type user_map_visitsCreateWithoutMapsInput = {
    visited_at?: Date | string;
    users: UserCreateNestedOneWithoutUser_map_visitsInput;
  };

  export type user_map_visitsUncheckedCreateWithoutMapsInput = {
    id?: number;
    user_id: number;
    visited_at?: Date | string;
  };

  export type user_map_visitsCreateOrConnectWithoutMapsInput = {
    where: user_map_visitsWhereUniqueInput;
    create: XOR<
      user_map_visitsCreateWithoutMapsInput,
      user_map_visitsUncheckedCreateWithoutMapsInput
    >;
  };

  export type user_map_visitsCreateManyMapsInputEnvelope = {
    data:
      | user_map_visitsCreateManyMapsInput
      | user_map_visitsCreateManyMapsInput[];
    skipDuplicates?: boolean;
  };

  export type MapElementUpsertWithWhereUniqueWithoutMapInput = {
    where: MapElementWhereUniqueInput;
    update: XOR<
      MapElementUpdateWithoutMapInput,
      MapElementUncheckedUpdateWithoutMapInput
    >;
    create: XOR<
      MapElementCreateWithoutMapInput,
      MapElementUncheckedCreateWithoutMapInput
    >;
  };

  export type MapElementUpdateWithWhereUniqueWithoutMapInput = {
    where: MapElementWhereUniqueInput;
    data: XOR<
      MapElementUpdateWithoutMapInput,
      MapElementUncheckedUpdateWithoutMapInput
    >;
  };

  export type MapElementUpdateManyWithWhereWithoutMapInput = {
    where: MapElementScalarWhereInput;
    data: XOR<
      MapElementUpdateManyMutationInput,
      MapElementUncheckedUpdateManyWithoutMapInput
    >;
  };

  export type MapSpaceUpsertWithWhereUniqueWithoutMapInput = {
    where: MapSpaceWhereUniqueInput;
    update: XOR<
      MapSpaceUpdateWithoutMapInput,
      MapSpaceUncheckedUpdateWithoutMapInput
    >;
    create: XOR<
      MapSpaceCreateWithoutMapInput,
      MapSpaceUncheckedCreateWithoutMapInput
    >;
  };

  export type MapSpaceUpdateWithWhereUniqueWithoutMapInput = {
    where: MapSpaceWhereUniqueInput;
    data: XOR<
      MapSpaceUpdateWithoutMapInput,
      MapSpaceUncheckedUpdateWithoutMapInput
    >;
  };

  export type MapSpaceUpdateManyWithWhereWithoutMapInput = {
    where: MapSpaceScalarWhereInput;
    data: XOR<
      MapSpaceUpdateManyMutationInput,
      MapSpaceUncheckedUpdateManyWithoutMapInput
    >;
  };

  export type MapSpaceScalarWhereInput = {
    AND?: MapSpaceScalarWhereInput | MapSpaceScalarWhereInput[];
    OR?: MapSpaceScalarWhereInput[];
    NOT?: MapSpaceScalarWhereInput | MapSpaceScalarWhereInput[];
    id?: IntFilter<'MapSpace'> | number;
    mapId?: IntFilter<'MapSpace'> | number;
    spaceId?: IntFilter<'MapSpace'> | number;
    x?: IntFilter<'MapSpace'> | number;
    y?: IntFilter<'MapSpace'> | number;
  };

  export type UserUpsertWithoutCreatedMapsInput = {
    update: XOR<
      UserUpdateWithoutCreatedMapsInput,
      UserUncheckedUpdateWithoutCreatedMapsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedMapsInput,
      UserUncheckedCreateWithoutCreatedMapsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedMapsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedMapsInput,
      UserUncheckedUpdateWithoutCreatedMapsInput
    >;
  };

  export type UserUpdateWithoutCreatedMapsInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedMapsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type MapUpsertWithoutChildMapsInput = {
    update: XOR<
      MapUpdateWithoutChildMapsInput,
      MapUncheckedUpdateWithoutChildMapsInput
    >;
    create: XOR<
      MapCreateWithoutChildMapsInput,
      MapUncheckedCreateWithoutChildMapsInput
    >;
    where?: MapWhereInput;
  };

  export type MapUpdateToOneWithWhereWithoutChildMapsInput = {
    where?: MapWhereInput;
    data: XOR<
      MapUpdateWithoutChildMapsInput,
      MapUncheckedUpdateWithoutChildMapsInput
    >;
  };

  export type MapUpdateWithoutChildMapsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUpdateManyWithoutMapNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedMapsNestedInput;
    template?: MapUpdateOneWithoutChildMapsNestedInput;
    messages?: MessageUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateWithoutChildMapsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
    mapElements?: MapElementUncheckedUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutMapNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput;
  };

  export type MapUpsertWithWhereUniqueWithoutTemplateInput = {
    where: MapWhereUniqueInput;
    update: XOR<
      MapUpdateWithoutTemplateInput,
      MapUncheckedUpdateWithoutTemplateInput
    >;
    create: XOR<
      MapCreateWithoutTemplateInput,
      MapUncheckedCreateWithoutTemplateInput
    >;
  };

  export type MapUpdateWithWhereUniqueWithoutTemplateInput = {
    where: MapWhereUniqueInput;
    data: XOR<
      MapUpdateWithoutTemplateInput,
      MapUncheckedUpdateWithoutTemplateInput
    >;
  };

  export type MapUpdateManyWithWhereWithoutTemplateInput = {
    where: MapScalarWhereInput;
    data: XOR<
      MapUpdateManyMutationInput,
      MapUncheckedUpdateManyWithoutTemplateInput
    >;
  };

  export type MapScalarWhereInput = {
    AND?: MapScalarWhereInput | MapScalarWhereInput[];
    OR?: MapScalarWhereInput[];
    NOT?: MapScalarWhereInput | MapScalarWhereInput[];
    id?: IntFilter<'Map'> | number;
    name?: StringFilter<'Map'> | string;
    width?: IntFilter<'Map'> | number;
    height?: IntFilter<'Map'> | number;
    bgImg?: StringNullableFilter<'Map'> | string | null;
    tilemapUrl?: StringNullableFilter<'Map'> | string | null;
    creatorId?: IntFilter<'Map'> | number;
    isTemplate?: BoolFilter<'Map'> | boolean;
    accessCode?: StringNullableFilter<'Map'> | string | null;
    templateId?: IntNullableFilter<'Map'> | number | null;
  };

  export type MessageUpsertWithWhereUniqueWithoutMapInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutMapInput,
      MessageUncheckedUpdateWithoutMapInput
    >;
    create: XOR<
      MessageCreateWithoutMapInput,
      MessageUncheckedCreateWithoutMapInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutMapInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutMapInput,
      MessageUncheckedUpdateWithoutMapInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutMapInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutMapInput
    >;
  };

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[];
    OR?: MessageScalarWhereInput[];
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[];
    id?: IntFilter<'Message'> | number;
    spaceId?: IntNullableFilter<'Message'> | number | null;
    userId?: IntFilter<'Message'> | number;
    displayName?: StringFilter<'Message'> | string;
    text?: StringFilter<'Message'> | string;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    mapId?: IntNullableFilter<'Message'> | number | null;
  };

  export type user_map_visitsUpsertWithWhereUniqueWithoutMapsInput = {
    where: user_map_visitsWhereUniqueInput;
    update: XOR<
      user_map_visitsUpdateWithoutMapsInput,
      user_map_visitsUncheckedUpdateWithoutMapsInput
    >;
    create: XOR<
      user_map_visitsCreateWithoutMapsInput,
      user_map_visitsUncheckedCreateWithoutMapsInput
    >;
  };

  export type user_map_visitsUpdateWithWhereUniqueWithoutMapsInput = {
    where: user_map_visitsWhereUniqueInput;
    data: XOR<
      user_map_visitsUpdateWithoutMapsInput,
      user_map_visitsUncheckedUpdateWithoutMapsInput
    >;
  };

  export type user_map_visitsUpdateManyWithWhereWithoutMapsInput = {
    where: user_map_visitsScalarWhereInput;
    data: XOR<
      user_map_visitsUpdateManyMutationInput,
      user_map_visitsUncheckedUpdateManyWithoutMapsInput
    >;
  };

  export type user_map_visitsScalarWhereInput = {
    AND?: user_map_visitsScalarWhereInput | user_map_visitsScalarWhereInput[];
    OR?: user_map_visitsScalarWhereInput[];
    NOT?: user_map_visitsScalarWhereInput | user_map_visitsScalarWhereInput[];
    id?: IntFilter<'user_map_visits'> | number;
    user_id?: IntFilter<'user_map_visits'> | number;
    map_id?: IntFilter<'user_map_visits'> | number;
    visited_at?: DateTimeFilter<'user_map_visits'> | Date | string;
  };

  export type AvatarCreateWithoutUsersInput = {
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
    creator: UserCreateNestedOneWithoutCreatedAvatarsInput;
  };

  export type AvatarUncheckedCreateWithoutUsersInput = {
    id?: number;
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
    creatorId: number;
  };

  export type AvatarCreateOrConnectWithoutUsersInput = {
    where: AvatarWhereUniqueInput;
    create: XOR<
      AvatarCreateWithoutUsersInput,
      AvatarUncheckedCreateWithoutUsersInput
    >;
  };

  export type SpaceCreateWithoutOwnerInput = {
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    mapSpaces?: MapSpaceCreateNestedManyWithoutSpaceInput;
    messages?: MessageCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementCreateNestedManyWithoutSpaceInput;
  };

  export type SpaceUncheckedCreateWithoutOwnerInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutSpaceInput;
    messages?: MessageUncheckedCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementUncheckedCreateNestedManyWithoutSpaceInput;
  };

  export type SpaceCreateOrConnectWithoutOwnerInput = {
    where: SpaceWhereUniqueInput;
    create: XOR<
      SpaceCreateWithoutOwnerInput,
      SpaceUncheckedCreateWithoutOwnerInput
    >;
  };

  export type SpaceCreateManyOwnerInputEnvelope = {
    data: SpaceCreateManyOwnerInput | SpaceCreateManyOwnerInput[];
    skipDuplicates?: boolean;
  };

  export type AvatarCreateWithoutCreatorInput = {
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
    users?: UserCreateNestedManyWithoutAvatarInput;
  };

  export type AvatarUncheckedCreateWithoutCreatorInput = {
    id?: number;
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
    users?: UserUncheckedCreateNestedManyWithoutAvatarInput;
  };

  export type AvatarCreateOrConnectWithoutCreatorInput = {
    where: AvatarWhereUniqueInput;
    create: XOR<
      AvatarCreateWithoutCreatorInput,
      AvatarUncheckedCreateWithoutCreatorInput
    >;
  };

  export type AvatarCreateManyCreatorInputEnvelope = {
    data: AvatarCreateManyCreatorInput | AvatarCreateManyCreatorInput[];
    skipDuplicates?: boolean;
  };

  export type ElementCreateWithoutCreatorInput = {
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    mapElements?: MapElementCreateNestedManyWithoutElementInput;
    spaceElements?: SpaceElementCreateNestedManyWithoutElementInput;
  };

  export type ElementUncheckedCreateWithoutCreatorInput = {
    id?: number;
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutElementInput;
    spaceElements?: SpaceElementUncheckedCreateNestedManyWithoutElementInput;
  };

  export type ElementCreateOrConnectWithoutCreatorInput = {
    where: ElementWhereUniqueInput;
    create: XOR<
      ElementCreateWithoutCreatorInput,
      ElementUncheckedCreateWithoutCreatorInput
    >;
  };

  export type ElementCreateManyCreatorInputEnvelope = {
    data: ElementCreateManyCreatorInput | ElementCreateManyCreatorInput[];
    skipDuplicates?: boolean;
  };

  export type MapCreateWithoutCreatorInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceCreateNestedManyWithoutMapInput;
    template?: MapCreateNestedOneWithoutChildMapsInput;
    childMaps?: MapCreateNestedManyWithoutTemplateInput;
    messages?: MessageCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutMapsInput;
  };

  export type MapUncheckedCreateWithoutCreatorInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutMapInput;
    childMaps?: MapUncheckedCreateNestedManyWithoutTemplateInput;
    messages?: MessageUncheckedCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutMapsInput;
  };

  export type MapCreateOrConnectWithoutCreatorInput = {
    where: MapWhereUniqueInput;
    create: XOR<
      MapCreateWithoutCreatorInput,
      MapUncheckedCreateWithoutCreatorInput
    >;
  };

  export type MapCreateManyCreatorInputEnvelope = {
    data: MapCreateManyCreatorInput | MapCreateManyCreatorInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutUserInput = {
    displayName: string;
    text: string;
    createdAt?: Date | string;
    map?: MapCreateNestedOneWithoutMessagesInput;
    space?: SpaceCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: number;
    spaceId?: number | null;
    displayName: string;
    text: string;
    createdAt?: Date | string;
    mapId?: number | null;
  };

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutUserInput,
      MessageUncheckedCreateWithoutUserInput
    >;
  };

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ActivityLogCreateWithoutUserInput = {
    date: Date | string;
  };

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: number;
    date: Date | string;
  };

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput;
    create: XOR<
      ActivityLogCreateWithoutUserInput,
      ActivityLogUncheckedCreateWithoutUserInput
    >;
  };

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type user_map_visitsCreateWithoutUsersInput = {
    visited_at?: Date | string;
    maps: MapCreateNestedOneWithoutUser_map_visitsInput;
  };

  export type user_map_visitsUncheckedCreateWithoutUsersInput = {
    id?: number;
    map_id: number;
    visited_at?: Date | string;
  };

  export type user_map_visitsCreateOrConnectWithoutUsersInput = {
    where: user_map_visitsWhereUniqueInput;
    create: XOR<
      user_map_visitsCreateWithoutUsersInput,
      user_map_visitsUncheckedCreateWithoutUsersInput
    >;
  };

  export type user_map_visitsCreateManyUsersInputEnvelope = {
    data:
      | user_map_visitsCreateManyUsersInput
      | user_map_visitsCreateManyUsersInput[];
    skipDuplicates?: boolean;
  };

  export type AvatarUpsertWithoutUsersInput = {
    update: XOR<
      AvatarUpdateWithoutUsersInput,
      AvatarUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      AvatarCreateWithoutUsersInput,
      AvatarUncheckedCreateWithoutUsersInput
    >;
    where?: AvatarWhereInput;
  };

  export type AvatarUpdateToOneWithWhereWithoutUsersInput = {
    where?: AvatarWhereInput;
    data: XOR<
      AvatarUpdateWithoutUsersInput,
      AvatarUncheckedUpdateWithoutUsersInput
    >;
  };

  export type AvatarUpdateWithoutUsersInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
    creator?: UserUpdateOneRequiredWithoutCreatedAvatarsNestedInput;
  };

  export type AvatarUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
  };

  export type SpaceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SpaceWhereUniqueInput;
    update: XOR<
      SpaceUpdateWithoutOwnerInput,
      SpaceUncheckedUpdateWithoutOwnerInput
    >;
    create: XOR<
      SpaceCreateWithoutOwnerInput,
      SpaceUncheckedCreateWithoutOwnerInput
    >;
  };

  export type SpaceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SpaceWhereUniqueInput;
    data: XOR<
      SpaceUpdateWithoutOwnerInput,
      SpaceUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type SpaceUpdateManyWithWhereWithoutOwnerInput = {
    where: SpaceScalarWhereInput;
    data: XOR<
      SpaceUpdateManyMutationInput,
      SpaceUncheckedUpdateManyWithoutOwnerInput
    >;
  };

  export type SpaceScalarWhereInput = {
    AND?: SpaceScalarWhereInput | SpaceScalarWhereInput[];
    OR?: SpaceScalarWhereInput[];
    NOT?: SpaceScalarWhereInput | SpaceScalarWhereInput[];
    id?: IntFilter<'Space'> | number;
    name?: StringFilter<'Space'> | string;
    width?: IntFilter<'Space'> | number;
    height?: IntFilter<'Space'> | number;
    thumbnail?: StringNullableFilter<'Space'> | string | null;
    bgImg?: StringNullableFilter<'Space'> | string | null;
    tilemapUrl?: StringNullableFilter<'Space'> | string | null;
    ownerId?: IntFilter<'Space'> | number;
  };

  export type AvatarUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AvatarWhereUniqueInput;
    update: XOR<
      AvatarUpdateWithoutCreatorInput,
      AvatarUncheckedUpdateWithoutCreatorInput
    >;
    create: XOR<
      AvatarCreateWithoutCreatorInput,
      AvatarUncheckedCreateWithoutCreatorInput
    >;
  };

  export type AvatarUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AvatarWhereUniqueInput;
    data: XOR<
      AvatarUpdateWithoutCreatorInput,
      AvatarUncheckedUpdateWithoutCreatorInput
    >;
  };

  export type AvatarUpdateManyWithWhereWithoutCreatorInput = {
    where: AvatarScalarWhereInput;
    data: XOR<
      AvatarUpdateManyMutationInput,
      AvatarUncheckedUpdateManyWithoutCreatorInput
    >;
  };

  export type AvatarScalarWhereInput = {
    AND?: AvatarScalarWhereInput | AvatarScalarWhereInput[];
    OR?: AvatarScalarWhereInput[];
    NOT?: AvatarScalarWhereInput | AvatarScalarWhereInput[];
    id?: IntFilter<'Avatar'> | number;
    imageUrl?: StringFilter<'Avatar'> | string;
    name?: StringFilter<'Avatar'> | string;
    avatarIdle?: StringNullableFilter<'Avatar'> | string | null;
    avatarRun?: StringNullableFilter<'Avatar'> | string | null;
    creatorId?: IntFilter<'Avatar'> | number;
  };

  export type ElementUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ElementWhereUniqueInput;
    update: XOR<
      ElementUpdateWithoutCreatorInput,
      ElementUncheckedUpdateWithoutCreatorInput
    >;
    create: XOR<
      ElementCreateWithoutCreatorInput,
      ElementUncheckedCreateWithoutCreatorInput
    >;
  };

  export type ElementUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ElementWhereUniqueInput;
    data: XOR<
      ElementUpdateWithoutCreatorInput,
      ElementUncheckedUpdateWithoutCreatorInput
    >;
  };

  export type ElementUpdateManyWithWhereWithoutCreatorInput = {
    where: ElementScalarWhereInput;
    data: XOR<
      ElementUpdateManyMutationInput,
      ElementUncheckedUpdateManyWithoutCreatorInput
    >;
  };

  export type ElementScalarWhereInput = {
    AND?: ElementScalarWhereInput | ElementScalarWhereInput[];
    OR?: ElementScalarWhereInput[];
    NOT?: ElementScalarWhereInput | ElementScalarWhereInput[];
    id?: IntFilter<'Element'> | number;
    width?: IntFilter<'Element'> | number;
    height?: IntFilter<'Element'> | number;
    imageUrl?: StringFilter<'Element'> | string;
    isStatic?: BoolFilter<'Element'> | boolean;
    creatorId?: IntFilter<'Element'> | number;
  };

  export type MapUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MapWhereUniqueInput;
    update: XOR<
      MapUpdateWithoutCreatorInput,
      MapUncheckedUpdateWithoutCreatorInput
    >;
    create: XOR<
      MapCreateWithoutCreatorInput,
      MapUncheckedCreateWithoutCreatorInput
    >;
  };

  export type MapUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MapWhereUniqueInput;
    data: XOR<
      MapUpdateWithoutCreatorInput,
      MapUncheckedUpdateWithoutCreatorInput
    >;
  };

  export type MapUpdateManyWithWhereWithoutCreatorInput = {
    where: MapScalarWhereInput;
    data: XOR<
      MapUpdateManyMutationInput,
      MapUncheckedUpdateManyWithoutCreatorInput
    >;
  };

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutUserInput,
      MessageUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      MessageCreateWithoutUserInput,
      MessageUncheckedCreateWithoutUserInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutUserInput,
      MessageUncheckedUpdateWithoutUserInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput;
    update: XOR<
      ActivityLogUpdateWithoutUserInput,
      ActivityLogUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ActivityLogCreateWithoutUserInput,
      ActivityLogUncheckedCreateWithoutUserInput
    >;
  };

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput;
    data: XOR<
      ActivityLogUpdateWithoutUserInput,
      ActivityLogUncheckedUpdateWithoutUserInput
    >;
  };

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput;
    data: XOR<
      ActivityLogUpdateManyMutationInput,
      ActivityLogUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[];
    OR?: ActivityLogScalarWhereInput[];
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[];
    id?: IntFilter<'ActivityLog'> | number;
    userId?: IntFilter<'ActivityLog'> | number;
    date?: DateTimeFilter<'ActivityLog'> | Date | string;
  };

  export type user_map_visitsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_map_visitsWhereUniqueInput;
    update: XOR<
      user_map_visitsUpdateWithoutUsersInput,
      user_map_visitsUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      user_map_visitsCreateWithoutUsersInput,
      user_map_visitsUncheckedCreateWithoutUsersInput
    >;
  };

  export type user_map_visitsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_map_visitsWhereUniqueInput;
    data: XOR<
      user_map_visitsUpdateWithoutUsersInput,
      user_map_visitsUncheckedUpdateWithoutUsersInput
    >;
  };

  export type user_map_visitsUpdateManyWithWhereWithoutUsersInput = {
    where: user_map_visitsScalarWhereInput;
    data: XOR<
      user_map_visitsUpdateManyMutationInput,
      user_map_visitsUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type UserCreateWithoutActivityLogsInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
  };

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<
      UserUpdateWithoutActivityLogsInput,
      UserUncheckedUpdateWithoutActivityLogsInput
    >;
    create: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutActivityLogsInput,
      UserUncheckedUpdateWithoutActivityLogsInput
    >;
  };

  export type UserUpdateWithoutActivityLogsInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type MapSpaceCreateWithoutSpaceInput = {
    x: number;
    y: number;
    map: MapCreateNestedOneWithoutMapSpacesInput;
  };

  export type MapSpaceUncheckedCreateWithoutSpaceInput = {
    id?: number;
    mapId: number;
    x: number;
    y: number;
  };

  export type MapSpaceCreateOrConnectWithoutSpaceInput = {
    where: MapSpaceWhereUniqueInput;
    create: XOR<
      MapSpaceCreateWithoutSpaceInput,
      MapSpaceUncheckedCreateWithoutSpaceInput
    >;
  };

  export type MapSpaceCreateManySpaceInputEnvelope = {
    data: MapSpaceCreateManySpaceInput | MapSpaceCreateManySpaceInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutSpaceInput = {
    displayName: string;
    text: string;
    createdAt?: Date | string;
    map?: MapCreateNestedOneWithoutMessagesInput;
    user: UserCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateWithoutSpaceInput = {
    id?: number;
    userId: number;
    displayName: string;
    text: string;
    createdAt?: Date | string;
    mapId?: number | null;
  };

  export type MessageCreateOrConnectWithoutSpaceInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutSpaceInput,
      MessageUncheckedCreateWithoutSpaceInput
    >;
  };

  export type MessageCreateManySpaceInputEnvelope = {
    data: MessageCreateManySpaceInput | MessageCreateManySpaceInput[];
    skipDuplicates?: boolean;
  };

  export type SpaceElementCreateWithoutSpaceInput = {
    x: number;
    y: number;
    element: ElementCreateNestedOneWithoutSpaceElementsInput;
  };

  export type SpaceElementUncheckedCreateWithoutSpaceInput = {
    id?: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type SpaceElementCreateOrConnectWithoutSpaceInput = {
    where: SpaceElementWhereUniqueInput;
    create: XOR<
      SpaceElementCreateWithoutSpaceInput,
      SpaceElementUncheckedCreateWithoutSpaceInput
    >;
  };

  export type SpaceElementCreateManySpaceInputEnvelope = {
    data: SpaceElementCreateManySpaceInput | SpaceElementCreateManySpaceInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutSpacesInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateWithoutSpacesInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserCreateOrConnectWithoutSpacesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSpacesInput,
      UserUncheckedCreateWithoutSpacesInput
    >;
  };

  export type MapSpaceUpsertWithWhereUniqueWithoutSpaceInput = {
    where: MapSpaceWhereUniqueInput;
    update: XOR<
      MapSpaceUpdateWithoutSpaceInput,
      MapSpaceUncheckedUpdateWithoutSpaceInput
    >;
    create: XOR<
      MapSpaceCreateWithoutSpaceInput,
      MapSpaceUncheckedCreateWithoutSpaceInput
    >;
  };

  export type MapSpaceUpdateWithWhereUniqueWithoutSpaceInput = {
    where: MapSpaceWhereUniqueInput;
    data: XOR<
      MapSpaceUpdateWithoutSpaceInput,
      MapSpaceUncheckedUpdateWithoutSpaceInput
    >;
  };

  export type MapSpaceUpdateManyWithWhereWithoutSpaceInput = {
    where: MapSpaceScalarWhereInput;
    data: XOR<
      MapSpaceUpdateManyMutationInput,
      MapSpaceUncheckedUpdateManyWithoutSpaceInput
    >;
  };

  export type MessageUpsertWithWhereUniqueWithoutSpaceInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutSpaceInput,
      MessageUncheckedUpdateWithoutSpaceInput
    >;
    create: XOR<
      MessageCreateWithoutSpaceInput,
      MessageUncheckedCreateWithoutSpaceInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutSpaceInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutSpaceInput,
      MessageUncheckedUpdateWithoutSpaceInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutSpaceInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutSpaceInput
    >;
  };

  export type SpaceElementUpsertWithWhereUniqueWithoutSpaceInput = {
    where: SpaceElementWhereUniqueInput;
    update: XOR<
      SpaceElementUpdateWithoutSpaceInput,
      SpaceElementUncheckedUpdateWithoutSpaceInput
    >;
    create: XOR<
      SpaceElementCreateWithoutSpaceInput,
      SpaceElementUncheckedCreateWithoutSpaceInput
    >;
  };

  export type SpaceElementUpdateWithWhereUniqueWithoutSpaceInput = {
    where: SpaceElementWhereUniqueInput;
    data: XOR<
      SpaceElementUpdateWithoutSpaceInput,
      SpaceElementUncheckedUpdateWithoutSpaceInput
    >;
  };

  export type SpaceElementUpdateManyWithWhereWithoutSpaceInput = {
    where: SpaceElementScalarWhereInput;
    data: XOR<
      SpaceElementUpdateManyMutationInput,
      SpaceElementUncheckedUpdateManyWithoutSpaceInput
    >;
  };

  export type UserUpsertWithoutSpacesInput = {
    update: XOR<
      UserUpdateWithoutSpacesInput,
      UserUncheckedUpdateWithoutSpacesInput
    >;
    create: XOR<
      UserCreateWithoutSpacesInput,
      UserUncheckedCreateWithoutSpacesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSpacesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSpacesInput,
      UserUncheckedUpdateWithoutSpacesInput
    >;
  };

  export type UserUpdateWithoutSpacesInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateWithoutSpacesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type ElementCreateWithoutMapElementsInput = {
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    creator: UserCreateNestedOneWithoutCreatedElementsInput;
    spaceElements?: SpaceElementCreateNestedManyWithoutElementInput;
  };

  export type ElementUncheckedCreateWithoutMapElementsInput = {
    id?: number;
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    creatorId: number;
    spaceElements?: SpaceElementUncheckedCreateNestedManyWithoutElementInput;
  };

  export type ElementCreateOrConnectWithoutMapElementsInput = {
    where: ElementWhereUniqueInput;
    create: XOR<
      ElementCreateWithoutMapElementsInput,
      ElementUncheckedCreateWithoutMapElementsInput
    >;
  };

  export type MapCreateWithoutMapElementsInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapSpaces?: MapSpaceCreateNestedManyWithoutMapInput;
    creator: UserCreateNestedOneWithoutCreatedMapsInput;
    template?: MapCreateNestedOneWithoutChildMapsInput;
    childMaps?: MapCreateNestedManyWithoutTemplateInput;
    messages?: MessageCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutMapsInput;
  };

  export type MapUncheckedCreateWithoutMapElementsInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutMapInput;
    childMaps?: MapUncheckedCreateNestedManyWithoutTemplateInput;
    messages?: MessageUncheckedCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutMapsInput;
  };

  export type MapCreateOrConnectWithoutMapElementsInput = {
    where: MapWhereUniqueInput;
    create: XOR<
      MapCreateWithoutMapElementsInput,
      MapUncheckedCreateWithoutMapElementsInput
    >;
  };

  export type ElementUpsertWithoutMapElementsInput = {
    update: XOR<
      ElementUpdateWithoutMapElementsInput,
      ElementUncheckedUpdateWithoutMapElementsInput
    >;
    create: XOR<
      ElementCreateWithoutMapElementsInput,
      ElementUncheckedCreateWithoutMapElementsInput
    >;
    where?: ElementWhereInput;
  };

  export type ElementUpdateToOneWithWhereWithoutMapElementsInput = {
    where?: ElementWhereInput;
    data: XOR<
      ElementUpdateWithoutMapElementsInput,
      ElementUncheckedUpdateWithoutMapElementsInput
    >;
  };

  export type ElementUpdateWithoutMapElementsInput = {
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    creator?: UserUpdateOneRequiredWithoutCreatedElementsNestedInput;
    spaceElements?: SpaceElementUpdateManyWithoutElementNestedInput;
  };

  export type ElementUncheckedUpdateWithoutMapElementsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    creatorId?: IntFieldUpdateOperationsInput | number;
    spaceElements?: SpaceElementUncheckedUpdateManyWithoutElementNestedInput;
  };

  export type MapUpsertWithoutMapElementsInput = {
    update: XOR<
      MapUpdateWithoutMapElementsInput,
      MapUncheckedUpdateWithoutMapElementsInput
    >;
    create: XOR<
      MapCreateWithoutMapElementsInput,
      MapUncheckedCreateWithoutMapElementsInput
    >;
    where?: MapWhereInput;
  };

  export type MapUpdateToOneWithWhereWithoutMapElementsInput = {
    where?: MapWhereInput;
    data: XOR<
      MapUpdateWithoutMapElementsInput,
      MapUncheckedUpdateWithoutMapElementsInput
    >;
  };

  export type MapUpdateWithoutMapElementsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapSpaces?: MapSpaceUpdateManyWithoutMapNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedMapsNestedInput;
    template?: MapUpdateOneWithoutChildMapsNestedInput;
    childMaps?: MapUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateWithoutMapElementsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutMapNestedInput;
    childMaps?: MapUncheckedUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput;
  };

  export type MapCreateWithoutMapSpacesInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementCreateNestedManyWithoutMapInput;
    creator: UserCreateNestedOneWithoutCreatedMapsInput;
    template?: MapCreateNestedOneWithoutChildMapsInput;
    childMaps?: MapCreateNestedManyWithoutTemplateInput;
    messages?: MessageCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutMapsInput;
  };

  export type MapUncheckedCreateWithoutMapSpacesInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutMapInput;
    childMaps?: MapUncheckedCreateNestedManyWithoutTemplateInput;
    messages?: MessageUncheckedCreateNestedManyWithoutMapInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutMapsInput;
  };

  export type MapCreateOrConnectWithoutMapSpacesInput = {
    where: MapWhereUniqueInput;
    create: XOR<
      MapCreateWithoutMapSpacesInput,
      MapUncheckedCreateWithoutMapSpacesInput
    >;
  };

  export type SpaceCreateWithoutMapSpacesInput = {
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    messages?: MessageCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementCreateNestedManyWithoutSpaceInput;
    owner: UserCreateNestedOneWithoutSpacesInput;
  };

  export type SpaceUncheckedCreateWithoutMapSpacesInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    ownerId: number;
    messages?: MessageUncheckedCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementUncheckedCreateNestedManyWithoutSpaceInput;
  };

  export type SpaceCreateOrConnectWithoutMapSpacesInput = {
    where: SpaceWhereUniqueInput;
    create: XOR<
      SpaceCreateWithoutMapSpacesInput,
      SpaceUncheckedCreateWithoutMapSpacesInput
    >;
  };

  export type MapUpsertWithoutMapSpacesInput = {
    update: XOR<
      MapUpdateWithoutMapSpacesInput,
      MapUncheckedUpdateWithoutMapSpacesInput
    >;
    create: XOR<
      MapCreateWithoutMapSpacesInput,
      MapUncheckedCreateWithoutMapSpacesInput
    >;
    where?: MapWhereInput;
  };

  export type MapUpdateToOneWithWhereWithoutMapSpacesInput = {
    where?: MapWhereInput;
    data: XOR<
      MapUpdateWithoutMapSpacesInput,
      MapUncheckedUpdateWithoutMapSpacesInput
    >;
  };

  export type MapUpdateWithoutMapSpacesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUpdateManyWithoutMapNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedMapsNestedInput;
    template?: MapUpdateOneWithoutChildMapsNestedInput;
    childMaps?: MapUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateWithoutMapSpacesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
    mapElements?: MapElementUncheckedUpdateManyWithoutMapNestedInput;
    childMaps?: MapUncheckedUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput;
  };

  export type SpaceUpsertWithoutMapSpacesInput = {
    update: XOR<
      SpaceUpdateWithoutMapSpacesInput,
      SpaceUncheckedUpdateWithoutMapSpacesInput
    >;
    create: XOR<
      SpaceCreateWithoutMapSpacesInput,
      SpaceUncheckedCreateWithoutMapSpacesInput
    >;
    where?: SpaceWhereInput;
  };

  export type SpaceUpdateToOneWithWhereWithoutMapSpacesInput = {
    where?: SpaceWhereInput;
    data: XOR<
      SpaceUpdateWithoutMapSpacesInput,
      SpaceUncheckedUpdateWithoutMapSpacesInput
    >;
  };

  export type SpaceUpdateWithoutMapSpacesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    messages?: MessageUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUpdateManyWithoutSpaceNestedInput;
    owner?: UserUpdateOneRequiredWithoutSpacesNestedInput;
  };

  export type SpaceUncheckedUpdateWithoutMapSpacesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: IntFieldUpdateOperationsInput | number;
    messages?: MessageUncheckedUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput;
  };

  export type ElementCreateWithoutSpaceElementsInput = {
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    creator: UserCreateNestedOneWithoutCreatedElementsInput;
    mapElements?: MapElementCreateNestedManyWithoutElementInput;
  };

  export type ElementUncheckedCreateWithoutSpaceElementsInput = {
    id?: number;
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
    creatorId: number;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutElementInput;
  };

  export type ElementCreateOrConnectWithoutSpaceElementsInput = {
    where: ElementWhereUniqueInput;
    create: XOR<
      ElementCreateWithoutSpaceElementsInput,
      ElementUncheckedCreateWithoutSpaceElementsInput
    >;
  };

  export type SpaceCreateWithoutElementsInput = {
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    mapSpaces?: MapSpaceCreateNestedManyWithoutSpaceInput;
    messages?: MessageCreateNestedManyWithoutSpaceInput;
    owner: UserCreateNestedOneWithoutSpacesInput;
  };

  export type SpaceUncheckedCreateWithoutElementsInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    ownerId: number;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutSpaceInput;
    messages?: MessageUncheckedCreateNestedManyWithoutSpaceInput;
  };

  export type SpaceCreateOrConnectWithoutElementsInput = {
    where: SpaceWhereUniqueInput;
    create: XOR<
      SpaceCreateWithoutElementsInput,
      SpaceUncheckedCreateWithoutElementsInput
    >;
  };

  export type ElementUpsertWithoutSpaceElementsInput = {
    update: XOR<
      ElementUpdateWithoutSpaceElementsInput,
      ElementUncheckedUpdateWithoutSpaceElementsInput
    >;
    create: XOR<
      ElementCreateWithoutSpaceElementsInput,
      ElementUncheckedCreateWithoutSpaceElementsInput
    >;
    where?: ElementWhereInput;
  };

  export type ElementUpdateToOneWithWhereWithoutSpaceElementsInput = {
    where?: ElementWhereInput;
    data: XOR<
      ElementUpdateWithoutSpaceElementsInput,
      ElementUncheckedUpdateWithoutSpaceElementsInput
    >;
  };

  export type ElementUpdateWithoutSpaceElementsInput = {
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    creator?: UserUpdateOneRequiredWithoutCreatedElementsNestedInput;
    mapElements?: MapElementUpdateManyWithoutElementNestedInput;
  };

  export type ElementUncheckedUpdateWithoutSpaceElementsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    creatorId?: IntFieldUpdateOperationsInput | number;
    mapElements?: MapElementUncheckedUpdateManyWithoutElementNestedInput;
  };

  export type SpaceUpsertWithoutElementsInput = {
    update: XOR<
      SpaceUpdateWithoutElementsInput,
      SpaceUncheckedUpdateWithoutElementsInput
    >;
    create: XOR<
      SpaceCreateWithoutElementsInput,
      SpaceUncheckedCreateWithoutElementsInput
    >;
    where?: SpaceWhereInput;
  };

  export type SpaceUpdateToOneWithWhereWithoutElementsInput = {
    where?: SpaceWhereInput;
    data: XOR<
      SpaceUpdateWithoutElementsInput,
      SpaceUncheckedUpdateWithoutElementsInput
    >;
  };

  export type SpaceUpdateWithoutElementsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    mapSpaces?: MapSpaceUpdateManyWithoutSpaceNestedInput;
    messages?: MessageUpdateManyWithoutSpaceNestedInput;
    owner?: UserUpdateOneRequiredWithoutSpacesNestedInput;
  };

  export type SpaceUncheckedUpdateWithoutElementsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: IntFieldUpdateOperationsInput | number;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutSpaceNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutSpaceNestedInput;
  };

  export type MapCreateWithoutMessagesInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceCreateNestedManyWithoutMapInput;
    creator: UserCreateNestedOneWithoutCreatedMapsInput;
    template?: MapCreateNestedOneWithoutChildMapsInput;
    childMaps?: MapCreateNestedManyWithoutTemplateInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutMapsInput;
  };

  export type MapUncheckedCreateWithoutMessagesInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutMapInput;
    childMaps?: MapUncheckedCreateNestedManyWithoutTemplateInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutMapsInput;
  };

  export type MapCreateOrConnectWithoutMessagesInput = {
    where: MapWhereUniqueInput;
    create: XOR<
      MapCreateWithoutMessagesInput,
      MapUncheckedCreateWithoutMessagesInput
    >;
  };

  export type SpaceCreateWithoutMessagesInput = {
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    mapSpaces?: MapSpaceCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementCreateNestedManyWithoutSpaceInput;
    owner: UserCreateNestedOneWithoutSpacesInput;
  };

  export type SpaceUncheckedCreateWithoutMessagesInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    ownerId: number;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutSpaceInput;
    elements?: SpaceElementUncheckedCreateNestedManyWithoutSpaceInput;
  };

  export type SpaceCreateOrConnectWithoutMessagesInput = {
    where: SpaceWhereUniqueInput;
    create: XOR<
      SpaceCreateWithoutMessagesInput,
      SpaceUncheckedCreateWithoutMessagesInput
    >;
  };

  export type UserCreateWithoutMessagesInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsCreateNestedManyWithoutUsersInput;
  };

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    user_map_visits?: user_map_visitsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
  };

  export type MapUpsertWithoutMessagesInput = {
    update: XOR<
      MapUpdateWithoutMessagesInput,
      MapUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      MapCreateWithoutMessagesInput,
      MapUncheckedCreateWithoutMessagesInput
    >;
    where?: MapWhereInput;
  };

  export type MapUpdateToOneWithWhereWithoutMessagesInput = {
    where?: MapWhereInput;
    data: XOR<
      MapUpdateWithoutMessagesInput,
      MapUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type MapUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUpdateManyWithoutMapNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedMapsNestedInput;
    template?: MapUpdateOneWithoutChildMapsNestedInput;
    childMaps?: MapUpdateManyWithoutTemplateNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
    mapElements?: MapElementUncheckedUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutMapNestedInput;
    childMaps?: MapUncheckedUpdateManyWithoutTemplateNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput;
  };

  export type SpaceUpsertWithoutMessagesInput = {
    update: XOR<
      SpaceUpdateWithoutMessagesInput,
      SpaceUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      SpaceCreateWithoutMessagesInput,
      SpaceUncheckedCreateWithoutMessagesInput
    >;
    where?: SpaceWhereInput;
  };

  export type SpaceUpdateToOneWithWhereWithoutMessagesInput = {
    where?: SpaceWhereInput;
    data: XOR<
      SpaceUpdateWithoutMessagesInput,
      SpaceUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type SpaceUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    mapSpaces?: MapSpaceUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUpdateManyWithoutSpaceNestedInput;
    owner?: UserUpdateOneRequiredWithoutSpacesNestedInput;
  };

  export type SpaceUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: IntFieldUpdateOperationsInput | number;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput;
  };

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserUpdateWithoutMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type MapCreateWithoutUser_map_visitsInput = {
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    mapElements?: MapElementCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceCreateNestedManyWithoutMapInput;
    creator: UserCreateNestedOneWithoutCreatedMapsInput;
    template?: MapCreateNestedOneWithoutChildMapsInput;
    childMaps?: MapCreateNestedManyWithoutTemplateInput;
    messages?: MessageCreateNestedManyWithoutMapInput;
  };

  export type MapUncheckedCreateWithoutUser_map_visitsInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
    mapElements?: MapElementUncheckedCreateNestedManyWithoutMapInput;
    mapSpaces?: MapSpaceUncheckedCreateNestedManyWithoutMapInput;
    childMaps?: MapUncheckedCreateNestedManyWithoutTemplateInput;
    messages?: MessageUncheckedCreateNestedManyWithoutMapInput;
  };

  export type MapCreateOrConnectWithoutUser_map_visitsInput = {
    where: MapWhereUniqueInput;
    create: XOR<
      MapCreateWithoutUser_map_visitsInput,
      MapUncheckedCreateWithoutUser_map_visitsInput
    >;
  };

  export type UserCreateWithoutUser_map_visitsInput = {
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    avatar?: AvatarCreateNestedOneWithoutUsersInput;
    spaces?: SpaceCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapCreateNestedManyWithoutCreatorInput;
    messages?: MessageCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutUser_map_visitsInput = {
    id?: number;
    username: string;
    password: string;
    avatarId?: number | null;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    spaces?: SpaceUncheckedCreateNestedManyWithoutOwnerInput;
    createdAvatars?: AvatarUncheckedCreateNestedManyWithoutCreatorInput;
    createdElements?: ElementUncheckedCreateNestedManyWithoutCreatorInput;
    createdMaps?: MapUncheckedCreateNestedManyWithoutCreatorInput;
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutUser_map_visitsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutUser_map_visitsInput,
      UserUncheckedCreateWithoutUser_map_visitsInput
    >;
  };

  export type MapUpsertWithoutUser_map_visitsInput = {
    update: XOR<
      MapUpdateWithoutUser_map_visitsInput,
      MapUncheckedUpdateWithoutUser_map_visitsInput
    >;
    create: XOR<
      MapCreateWithoutUser_map_visitsInput,
      MapUncheckedCreateWithoutUser_map_visitsInput
    >;
    where?: MapWhereInput;
  };

  export type MapUpdateToOneWithWhereWithoutUser_map_visitsInput = {
    where?: MapWhereInput;
    data: XOR<
      MapUpdateWithoutUser_map_visitsInput,
      MapUncheckedUpdateWithoutUser_map_visitsInput
    >;
  };

  export type MapUpdateWithoutUser_map_visitsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUpdateManyWithoutMapNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedMapsNestedInput;
    template?: MapUpdateOneWithoutChildMapsNestedInput;
    childMaps?: MapUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUpdateManyWithoutMapNestedInput;
  };

  export type MapUncheckedUpdateWithoutUser_map_visitsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
    mapElements?: MapElementUncheckedUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutMapNestedInput;
    childMaps?: MapUncheckedUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutMapNestedInput;
  };

  export type UserUpsertWithoutUser_map_visitsInput = {
    update: XOR<
      UserUpdateWithoutUser_map_visitsInput,
      UserUncheckedUpdateWithoutUser_map_visitsInput
    >;
    create: XOR<
      UserCreateWithoutUser_map_visitsInput,
      UserUncheckedCreateWithoutUser_map_visitsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutUser_map_visitsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutUser_map_visitsInput,
      UserUncheckedUpdateWithoutUser_map_visitsInput
    >;
  };

  export type UserUpdateWithoutUser_map_visitsInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: AvatarUpdateOneWithoutUsersNestedInput;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutUser_map_visitsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyAvatarInput = {
    id?: number;
    username: string;
    password: string;
    avatarName?: string | null;
    role?: $Enums.UserRole;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type UserUpdateWithoutAvatarInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    spaces?: SpaceUncheckedUpdateManyWithoutOwnerNestedInput;
    createdAvatars?: AvatarUncheckedUpdateManyWithoutCreatorNestedInput;
    createdElements?: ElementUncheckedUpdateManyWithoutCreatorNestedInput;
    createdMaps?: MapUncheckedUpdateManyWithoutCreatorNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    lastLoginAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MapElementCreateManyElementInput = {
    id?: number;
    mapId: number;
    x: number;
    y: number;
  };

  export type SpaceElementCreateManyElementInput = {
    id?: number;
    spaceId: number;
    x: number;
    y: number;
  };

  export type MapElementUpdateWithoutElementInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    map?: MapUpdateOneRequiredWithoutMapElementsNestedInput;
  };

  export type MapElementUncheckedUpdateWithoutElementInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapElementUncheckedUpdateManyWithoutElementInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type SpaceElementUpdateWithoutElementInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    space?: SpaceUpdateOneRequiredWithoutElementsNestedInput;
  };

  export type SpaceElementUncheckedUpdateWithoutElementInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type SpaceElementUncheckedUpdateManyWithoutElementInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapElementCreateManyMapInput = {
    id?: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type MapSpaceCreateManyMapInput = {
    id?: number;
    spaceId: number;
    x: number;
    y: number;
  };

  export type MapCreateManyTemplateInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    creatorId: number;
    isTemplate?: boolean;
    accessCode?: string | null;
  };

  export type MessageCreateManyMapInput = {
    id?: number;
    spaceId?: number | null;
    userId: number;
    displayName: string;
    text: string;
    createdAt?: Date | string;
  };

  export type user_map_visitsCreateManyMapsInput = {
    id?: number;
    user_id: number;
    visited_at?: Date | string;
  };

  export type MapElementUpdateWithoutMapInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    element?: ElementUpdateOneRequiredWithoutMapElementsNestedInput;
  };

  export type MapElementUncheckedUpdateWithoutMapInput = {
    id?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapElementUncheckedUpdateManyWithoutMapInput = {
    id?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapSpaceUpdateWithoutMapInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    space?: SpaceUpdateOneRequiredWithoutMapSpacesNestedInput;
  };

  export type MapSpaceUncheckedUpdateWithoutMapInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapSpaceUncheckedUpdateManyWithoutMapInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapUpdateWithoutTemplateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUpdateManyWithoutMapNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedMapsNestedInput;
    childMaps?: MapUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUncheckedUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutMapNestedInput;
    childMaps?: MapUncheckedUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: IntFieldUpdateOperationsInput | number;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type MessageUpdateWithoutMapInput = {
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    space?: SpaceUpdateOneWithoutMessagesNestedInput;
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutMapInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: NullableIntFieldUpdateOperationsInput | number | null;
    userId?: IntFieldUpdateOperationsInput | number;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyWithoutMapInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: NullableIntFieldUpdateOperationsInput | number | null;
    userId?: IntFieldUpdateOperationsInput | number;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_map_visitsUpdateWithoutMapsInput = {
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateOneRequiredWithoutUser_map_visitsNestedInput;
  };

  export type user_map_visitsUncheckedUpdateWithoutMapsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_map_visitsUncheckedUpdateManyWithoutMapsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SpaceCreateManyOwnerInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    thumbnail?: string | null;
    bgImg?: string | null;
    tilemapUrl?: string | null;
  };

  export type AvatarCreateManyCreatorInput = {
    id?: number;
    imageUrl: string;
    name: string;
    avatarIdle?: string | null;
    avatarRun?: string | null;
  };

  export type ElementCreateManyCreatorInput = {
    id?: number;
    width: number;
    height: number;
    imageUrl: string;
    isStatic?: boolean;
  };

  export type MapCreateManyCreatorInput = {
    id?: number;
    name: string;
    width: number;
    height: number;
    bgImg?: string | null;
    tilemapUrl?: string | null;
    isTemplate?: boolean;
    accessCode?: string | null;
    templateId?: number | null;
  };

  export type MessageCreateManyUserInput = {
    id?: number;
    spaceId?: number | null;
    displayName: string;
    text: string;
    createdAt?: Date | string;
    mapId?: number | null;
  };

  export type ActivityLogCreateManyUserInput = {
    id?: number;
    date: Date | string;
  };

  export type user_map_visitsCreateManyUsersInput = {
    id?: number;
    map_id: number;
    visited_at?: Date | string;
  };

  export type SpaceUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    mapSpaces?: MapSpaceUpdateManyWithoutSpaceNestedInput;
    messages?: MessageUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUpdateManyWithoutSpaceNestedInput;
  };

  export type SpaceUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutSpaceNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutSpaceNestedInput;
    elements?: SpaceElementUncheckedUpdateManyWithoutSpaceNestedInput;
  };

  export type SpaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AvatarUpdateWithoutCreatorInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: UserUpdateManyWithoutAvatarNestedInput;
  };

  export type AvatarUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: UserUncheckedUpdateManyWithoutAvatarNestedInput;
  };

  export type AvatarUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    avatarIdle?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarRun?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ElementUpdateWithoutCreatorInput = {
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    mapElements?: MapElementUpdateManyWithoutElementNestedInput;
    spaceElements?: SpaceElementUpdateManyWithoutElementNestedInput;
  };

  export type ElementUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
    mapElements?: MapElementUncheckedUpdateManyWithoutElementNestedInput;
    spaceElements?: SpaceElementUncheckedUpdateManyWithoutElementNestedInput;
  };

  export type ElementUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    isStatic?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MapUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mapElements?: MapElementUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUpdateManyWithoutMapNestedInput;
    template?: MapUpdateOneWithoutChildMapsNestedInput;
    childMaps?: MapUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
    mapElements?: MapElementUncheckedUpdateManyWithoutMapNestedInput;
    mapSpaces?: MapSpaceUncheckedUpdateManyWithoutMapNestedInput;
    childMaps?: MapUncheckedUpdateManyWithoutTemplateNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutMapNestedInput;
    user_map_visits?: user_map_visitsUncheckedUpdateManyWithoutMapsNestedInput;
  };

  export type MapUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    width?: IntFieldUpdateOperationsInput | number;
    height?: IntFieldUpdateOperationsInput | number;
    bgImg?: NullableStringFieldUpdateOperationsInput | string | null;
    tilemapUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isTemplate?: BoolFieldUpdateOperationsInput | boolean;
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type MessageUpdateWithoutUserInput = {
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    map?: MapUpdateOneWithoutMessagesNestedInput;
    space?: SpaceUpdateOneWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: NullableIntFieldUpdateOperationsInput | number | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mapId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    spaceId?: NullableIntFieldUpdateOperationsInput | number | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mapId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ActivityLogUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_map_visitsUpdateWithoutUsersInput = {
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    maps?: MapUpdateOneRequiredWithoutUser_map_visitsNestedInput;
  };

  export type user_map_visitsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    map_id?: IntFieldUpdateOperationsInput | number;
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_map_visitsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    map_id?: IntFieldUpdateOperationsInput | number;
    visited_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MapSpaceCreateManySpaceInput = {
    id?: number;
    mapId: number;
    x: number;
    y: number;
  };

  export type MessageCreateManySpaceInput = {
    id?: number;
    userId: number;
    displayName: string;
    text: string;
    createdAt?: Date | string;
    mapId?: number | null;
  };

  export type SpaceElementCreateManySpaceInput = {
    id?: number;
    elementId: number;
    x: number;
    y: number;
  };

  export type MapSpaceUpdateWithoutSpaceInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    map?: MapUpdateOneRequiredWithoutMapSpacesNestedInput;
  };

  export type MapSpaceUncheckedUpdateWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MapSpaceUncheckedUpdateManyWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    mapId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type MessageUpdateWithoutSpaceInput = {
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    map?: MapUpdateOneWithoutMessagesNestedInput;
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mapId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type MessageUncheckedUpdateManyWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    displayName?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mapId?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type SpaceElementUpdateWithoutSpaceInput = {
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
    element?: ElementUpdateOneRequiredWithoutSpaceElementsNestedInput;
  };

  export type SpaceElementUncheckedUpdateWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  export type SpaceElementUncheckedUpdateManyWithoutSpaceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    elementId?: IntFieldUpdateOperationsInput | number;
    x?: IntFieldUpdateOperationsInput | number;
    y?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
