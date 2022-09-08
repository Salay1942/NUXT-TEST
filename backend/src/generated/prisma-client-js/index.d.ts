
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  createdAt: Date
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id: number
  username: string
  password: string
  createdAt: Date
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: number
  title: string
  description: string
  images: string
  price: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ProductOnCheckout
 * 
 */
export type ProductOnCheckout = {
  checkoutId: number
  productId: number
}

/**
 * Model Checkout
 * 
 */
export type Checkout = {
  id: number
  userId: number
  price: number
  status: string
  transferCapture: string | null
  transferAt: Date | null
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.productOnCheckout`: Exposes CRUD operations for the **ProductOnCheckout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOnCheckouts
    * const productOnCheckouts = await prisma.productOnCheckout.findMany()
    * ```
    */
  get productOnCheckout(): Prisma.ProductOnCheckoutDelegate<GlobalReject>;

  /**
   * `prisma.checkout`: Exposes CRUD operations for the **Checkout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkouts
    * const checkouts = await prisma.checkout.findMany()
    * ```
    */
  get checkout(): Prisma.CheckoutDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Product: 'Product',
    ProductOnCheckout: 'ProductOnCheckout',
    Checkout: 'Checkout'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    checkouts: number
  }

  export type UserCountOutputTypeSelect = {
    checkouts?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    checkouts: number
  }

  export type ProductCountOutputTypeSelect = {
    checkouts?: boolean
  }

  export type ProductCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductCountOutputType
    : S extends undefined
    ? never
    : S extends ProductCountOutputTypeArgs
    ?'include' extends U
    ? ProductCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
    : ProductCountOutputType
  : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     * 
    **/
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type CheckoutCountOutputType
   */


  export type CheckoutCountOutputType = {
    products: number
  }

  export type CheckoutCountOutputTypeSelect = {
    products?: boolean
  }

  export type CheckoutCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CheckoutCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CheckoutCountOutputType
    : S extends undefined
    ? never
    : S extends CheckoutCountOutputTypeArgs
    ?'include' extends U
    ? CheckoutCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CheckoutCountOutputType ? CheckoutCountOutputType[P] : never
  } 
    : CheckoutCountOutputType
  : CheckoutCountOutputType




  // Custom InputTypes

  /**
   * CheckoutCountOutputType without action
   */
  export type CheckoutCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CheckoutCountOutputType
     * 
    **/
    select?: CheckoutCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    checkouts?: boolean | CheckoutFindManyArgs
    createdAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    checkouts?: boolean | CheckoutFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'checkouts' ? Array < CheckoutGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'checkouts' ? Array < CheckoutGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    checkouts<T extends CheckoutFindManyArgs = {}>(args?: Subset<T, CheckoutFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Checkout>>, PrismaPromise<Array<CheckoutGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: Array<AdminScalarFieldEnum>
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type AdminGetPayload<
    S extends boolean | null | undefined | AdminArgs,
    U = keyof S
      > = S extends true
        ? Admin
    : S extends undefined
    ? never
    : S extends AdminArgs | AdminFindManyArgs
    ?'include' extends U
    ? Admin 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Admin ? Admin[P] : never
  } 
    : Admin
  : Admin


  type AdminCountArgs = Merge<
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }
  >

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Admin>>, PrismaPromise<Array<AdminGetPayload<T>>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find one Admin that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }

  /**
   * Admin: findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin: findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admins to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to create a Admin.
     * 
    **/
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to update a Admin.
     * 
    **/
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     * 
    **/
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The filter to search for the Admin to update in case it exists.
     * 
    **/
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     * 
    **/
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter which Admin to delete.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin: findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = AdminFindUniqueArgsBase
      

  /**
   * Admin: findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = AdminFindFirstArgsBase
      

  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    images: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    images: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    images: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    images?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    images?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    images?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: number
    title: string
    description: string
    images: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    price?: boolean
    checkouts?: boolean | ProductOnCheckoutFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductInclude = {
    checkouts?: boolean | ProductOnCheckoutFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<
    S extends boolean | null | undefined | ProductArgs,
    U = keyof S
      > = S extends true
        ? Product
    : S extends undefined
    ? never
    : S extends ProductArgs | ProductFindManyArgs
    ?'include' extends U
    ? Product  & {
    [P in TrueKeys<S['include']>]:
        P extends 'checkouts' ? Array < ProductOnCheckoutGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'checkouts' ? Array < ProductOnCheckoutGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Product ? Product[P] : never
  } 
    : Product
  : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Find one Product that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    checkouts<T extends ProductOnCheckoutFindManyArgs = {}>(args?: Subset<T, ProductOnCheckoutFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductOnCheckout>>, PrismaPromise<Array<ProductOnCheckoutGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product: findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product: findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product: findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = ProductFindUniqueArgsBase
      

  /**
   * Product: findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = ProductFindFirstArgsBase
      

  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
  }



  /**
   * Model ProductOnCheckout
   */


  export type AggregateProductOnCheckout = {
    _count: ProductOnCheckoutCountAggregateOutputType | null
    _avg: ProductOnCheckoutAvgAggregateOutputType | null
    _sum: ProductOnCheckoutSumAggregateOutputType | null
    _min: ProductOnCheckoutMinAggregateOutputType | null
    _max: ProductOnCheckoutMaxAggregateOutputType | null
  }

  export type ProductOnCheckoutAvgAggregateOutputType = {
    checkoutId: number | null
    productId: number | null
  }

  export type ProductOnCheckoutSumAggregateOutputType = {
    checkoutId: number | null
    productId: number | null
  }

  export type ProductOnCheckoutMinAggregateOutputType = {
    checkoutId: number | null
    productId: number | null
  }

  export type ProductOnCheckoutMaxAggregateOutputType = {
    checkoutId: number | null
    productId: number | null
  }

  export type ProductOnCheckoutCountAggregateOutputType = {
    checkoutId: number
    productId: number
    _all: number
  }


  export type ProductOnCheckoutAvgAggregateInputType = {
    checkoutId?: true
    productId?: true
  }

  export type ProductOnCheckoutSumAggregateInputType = {
    checkoutId?: true
    productId?: true
  }

  export type ProductOnCheckoutMinAggregateInputType = {
    checkoutId?: true
    productId?: true
  }

  export type ProductOnCheckoutMaxAggregateInputType = {
    checkoutId?: true
    productId?: true
  }

  export type ProductOnCheckoutCountAggregateInputType = {
    checkoutId?: true
    productId?: true
    _all?: true
  }

  export type ProductOnCheckoutAggregateArgs = {
    /**
     * Filter which ProductOnCheckout to aggregate.
     * 
    **/
    where?: ProductOnCheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnCheckouts to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOnCheckoutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductOnCheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnCheckouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnCheckouts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOnCheckouts
    **/
    _count?: true | ProductOnCheckoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductOnCheckoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductOnCheckoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOnCheckoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOnCheckoutMaxAggregateInputType
  }

  export type GetProductOnCheckoutAggregateType<T extends ProductOnCheckoutAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOnCheckout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOnCheckout[P]>
      : GetScalarType<T[P], AggregateProductOnCheckout[P]>
  }




  export type ProductOnCheckoutGroupByArgs = {
    where?: ProductOnCheckoutWhereInput
    orderBy?: Enumerable<ProductOnCheckoutOrderByWithAggregationInput>
    by: Array<ProductOnCheckoutScalarFieldEnum>
    having?: ProductOnCheckoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOnCheckoutCountAggregateInputType | true
    _avg?: ProductOnCheckoutAvgAggregateInputType
    _sum?: ProductOnCheckoutSumAggregateInputType
    _min?: ProductOnCheckoutMinAggregateInputType
    _max?: ProductOnCheckoutMaxAggregateInputType
  }


  export type ProductOnCheckoutGroupByOutputType = {
    checkoutId: number
    productId: number
    _count: ProductOnCheckoutCountAggregateOutputType | null
    _avg: ProductOnCheckoutAvgAggregateOutputType | null
    _sum: ProductOnCheckoutSumAggregateOutputType | null
    _min: ProductOnCheckoutMinAggregateOutputType | null
    _max: ProductOnCheckoutMaxAggregateOutputType | null
  }

  type GetProductOnCheckoutGroupByPayload<T extends ProductOnCheckoutGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductOnCheckoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOnCheckoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOnCheckoutGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOnCheckoutGroupByOutputType[P]>
        }
      >
    >


  export type ProductOnCheckoutSelect = {
    checkout?: boolean | CheckoutArgs
    checkoutId?: boolean
    product?: boolean | ProductArgs
    productId?: boolean
  }

  export type ProductOnCheckoutInclude = {
    checkout?: boolean | CheckoutArgs
    product?: boolean | ProductArgs
  }

  export type ProductOnCheckoutGetPayload<
    S extends boolean | null | undefined | ProductOnCheckoutArgs,
    U = keyof S
      > = S extends true
        ? ProductOnCheckout
    : S extends undefined
    ? never
    : S extends ProductOnCheckoutArgs | ProductOnCheckoutFindManyArgs
    ?'include' extends U
    ? ProductOnCheckout  & {
    [P in TrueKeys<S['include']>]:
        P extends 'checkout' ? CheckoutGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'product' ? ProductGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'checkout' ? CheckoutGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'product' ? ProductGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ProductOnCheckout ? ProductOnCheckout[P] : never
  } 
    : ProductOnCheckout
  : ProductOnCheckout


  type ProductOnCheckoutCountArgs = Merge<
    Omit<ProductOnCheckoutFindManyArgs, 'select' | 'include'> & {
      select?: ProductOnCheckoutCountAggregateInputType | true
    }
  >

  export interface ProductOnCheckoutDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProductOnCheckout that matches the filter.
     * @param {ProductOnCheckoutFindUniqueArgs} args - Arguments to find a ProductOnCheckout
     * @example
     * // Get one ProductOnCheckout
     * const productOnCheckout = await prisma.productOnCheckout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductOnCheckoutFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductOnCheckoutFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductOnCheckout'> extends True ? CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>> : CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout | null >, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T> | null >>

    /**
     * Find the first ProductOnCheckout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnCheckoutFindFirstArgs} args - Arguments to find a ProductOnCheckout
     * @example
     * // Get one ProductOnCheckout
     * const productOnCheckout = await prisma.productOnCheckout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductOnCheckoutFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductOnCheckoutFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductOnCheckout'> extends True ? CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>> : CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout | null >, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T> | null >>

    /**
     * Find zero or more ProductOnCheckouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnCheckoutFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOnCheckouts
     * const productOnCheckouts = await prisma.productOnCheckout.findMany()
     * 
     * // Get first 10 ProductOnCheckouts
     * const productOnCheckouts = await prisma.productOnCheckout.findMany({ take: 10 })
     * 
     * // Only select the `checkoutId`
     * const productOnCheckoutWithCheckoutIdOnly = await prisma.productOnCheckout.findMany({ select: { checkoutId: true } })
     * 
    **/
    findMany<T extends ProductOnCheckoutFindManyArgs>(
      args?: SelectSubset<T, ProductOnCheckoutFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductOnCheckout>>, PrismaPromise<Array<ProductOnCheckoutGetPayload<T>>>>

    /**
     * Create a ProductOnCheckout.
     * @param {ProductOnCheckoutCreateArgs} args - Arguments to create a ProductOnCheckout.
     * @example
     * // Create one ProductOnCheckout
     * const ProductOnCheckout = await prisma.productOnCheckout.create({
     *   data: {
     *     // ... data to create a ProductOnCheckout
     *   }
     * })
     * 
    **/
    create<T extends ProductOnCheckoutCreateArgs>(
      args: SelectSubset<T, ProductOnCheckoutCreateArgs>
    ): CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>>

    /**
     * Delete a ProductOnCheckout.
     * @param {ProductOnCheckoutDeleteArgs} args - Arguments to delete one ProductOnCheckout.
     * @example
     * // Delete one ProductOnCheckout
     * const ProductOnCheckout = await prisma.productOnCheckout.delete({
     *   where: {
     *     // ... filter to delete one ProductOnCheckout
     *   }
     * })
     * 
    **/
    delete<T extends ProductOnCheckoutDeleteArgs>(
      args: SelectSubset<T, ProductOnCheckoutDeleteArgs>
    ): CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>>

    /**
     * Update one ProductOnCheckout.
     * @param {ProductOnCheckoutUpdateArgs} args - Arguments to update one ProductOnCheckout.
     * @example
     * // Update one ProductOnCheckout
     * const productOnCheckout = await prisma.productOnCheckout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductOnCheckoutUpdateArgs>(
      args: SelectSubset<T, ProductOnCheckoutUpdateArgs>
    ): CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>>

    /**
     * Delete zero or more ProductOnCheckouts.
     * @param {ProductOnCheckoutDeleteManyArgs} args - Arguments to filter ProductOnCheckouts to delete.
     * @example
     * // Delete a few ProductOnCheckouts
     * const { count } = await prisma.productOnCheckout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductOnCheckoutDeleteManyArgs>(
      args?: SelectSubset<T, ProductOnCheckoutDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOnCheckouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnCheckoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOnCheckouts
     * const productOnCheckout = await prisma.productOnCheckout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductOnCheckoutUpdateManyArgs>(
      args: SelectSubset<T, ProductOnCheckoutUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOnCheckout.
     * @param {ProductOnCheckoutUpsertArgs} args - Arguments to update or create a ProductOnCheckout.
     * @example
     * // Update or create a ProductOnCheckout
     * const productOnCheckout = await prisma.productOnCheckout.upsert({
     *   create: {
     *     // ... data to create a ProductOnCheckout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOnCheckout we want to update
     *   }
     * })
    **/
    upsert<T extends ProductOnCheckoutUpsertArgs>(
      args: SelectSubset<T, ProductOnCheckoutUpsertArgs>
    ): CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>>

    /**
     * Find one ProductOnCheckout that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProductOnCheckoutFindUniqueOrThrowArgs} args - Arguments to find a ProductOnCheckout
     * @example
     * // Get one ProductOnCheckout
     * const productOnCheckout = await prisma.productOnCheckout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductOnCheckoutFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductOnCheckoutFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>>

    /**
     * Find the first ProductOnCheckout that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnCheckoutFindFirstOrThrowArgs} args - Arguments to find a ProductOnCheckout
     * @example
     * // Get one ProductOnCheckout
     * const productOnCheckout = await prisma.productOnCheckout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductOnCheckoutFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductOnCheckoutFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductOnCheckoutClient<ProductOnCheckout>, Prisma__ProductOnCheckoutClient<ProductOnCheckoutGetPayload<T>>>

    /**
     * Count the number of ProductOnCheckouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnCheckoutCountArgs} args - Arguments to filter ProductOnCheckouts to count.
     * @example
     * // Count the number of ProductOnCheckouts
     * const count = await prisma.productOnCheckout.count({
     *   where: {
     *     // ... the filter for the ProductOnCheckouts we want to count
     *   }
     * })
    **/
    count<T extends ProductOnCheckoutCountArgs>(
      args?: Subset<T, ProductOnCheckoutCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOnCheckoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOnCheckout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnCheckoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductOnCheckoutAggregateArgs>(args: Subset<T, ProductOnCheckoutAggregateArgs>): PrismaPromise<GetProductOnCheckoutAggregateType<T>>

    /**
     * Group by ProductOnCheckout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnCheckoutGroupByArgs} args - Group by arguments.
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
      T extends ProductOnCheckoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOnCheckoutGroupByArgs['orderBy'] }
        : { orderBy?: ProductOnCheckoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductOnCheckoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOnCheckoutGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOnCheckout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductOnCheckoutClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    checkout<T extends CheckoutArgs = {}>(args?: Subset<T, CheckoutArgs>): CheckSelect<T, Prisma__CheckoutClient<Checkout | null >, Prisma__CheckoutClient<CheckoutGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductOnCheckout base type for findUnique actions
   */
  export type ProductOnCheckoutFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
    /**
     * Filter, which ProductOnCheckout to fetch.
     * 
    **/
    where: ProductOnCheckoutWhereUniqueInput
  }

  /**
   * ProductOnCheckout: findUnique
   */
  export interface ProductOnCheckoutFindUniqueArgs extends ProductOnCheckoutFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductOnCheckout base type for findFirst actions
   */
  export type ProductOnCheckoutFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
    /**
     * Filter, which ProductOnCheckout to fetch.
     * 
    **/
    where?: ProductOnCheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnCheckouts to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOnCheckoutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOnCheckouts.
     * 
    **/
    cursor?: ProductOnCheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnCheckouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnCheckouts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOnCheckouts.
     * 
    **/
    distinct?: Enumerable<ProductOnCheckoutScalarFieldEnum>
  }

  /**
   * ProductOnCheckout: findFirst
   */
  export interface ProductOnCheckoutFindFirstArgs extends ProductOnCheckoutFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductOnCheckout findMany
   */
  export type ProductOnCheckoutFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
    /**
     * Filter, which ProductOnCheckouts to fetch.
     * 
    **/
    where?: ProductOnCheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnCheckouts to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOnCheckoutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOnCheckouts.
     * 
    **/
    cursor?: ProductOnCheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnCheckouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnCheckouts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductOnCheckoutScalarFieldEnum>
  }


  /**
   * ProductOnCheckout create
   */
  export type ProductOnCheckoutCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
    /**
     * The data needed to create a ProductOnCheckout.
     * 
    **/
    data: XOR<ProductOnCheckoutCreateInput, ProductOnCheckoutUncheckedCreateInput>
  }


  /**
   * ProductOnCheckout update
   */
  export type ProductOnCheckoutUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
    /**
     * The data needed to update a ProductOnCheckout.
     * 
    **/
    data: XOR<ProductOnCheckoutUpdateInput, ProductOnCheckoutUncheckedUpdateInput>
    /**
     * Choose, which ProductOnCheckout to update.
     * 
    **/
    where: ProductOnCheckoutWhereUniqueInput
  }


  /**
   * ProductOnCheckout updateMany
   */
  export type ProductOnCheckoutUpdateManyArgs = {
    /**
     * The data used to update ProductOnCheckouts.
     * 
    **/
    data: XOR<ProductOnCheckoutUpdateManyMutationInput, ProductOnCheckoutUncheckedUpdateManyInput>
    /**
     * Filter which ProductOnCheckouts to update
     * 
    **/
    where?: ProductOnCheckoutWhereInput
  }


  /**
   * ProductOnCheckout upsert
   */
  export type ProductOnCheckoutUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
    /**
     * The filter to search for the ProductOnCheckout to update in case it exists.
     * 
    **/
    where: ProductOnCheckoutWhereUniqueInput
    /**
     * In case the ProductOnCheckout found by the `where` argument doesn't exist, create a new ProductOnCheckout with this data.
     * 
    **/
    create: XOR<ProductOnCheckoutCreateInput, ProductOnCheckoutUncheckedCreateInput>
    /**
     * In case the ProductOnCheckout was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductOnCheckoutUpdateInput, ProductOnCheckoutUncheckedUpdateInput>
  }


  /**
   * ProductOnCheckout delete
   */
  export type ProductOnCheckoutDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
    /**
     * Filter which ProductOnCheckout to delete.
     * 
    **/
    where: ProductOnCheckoutWhereUniqueInput
  }


  /**
   * ProductOnCheckout deleteMany
   */
  export type ProductOnCheckoutDeleteManyArgs = {
    /**
     * Filter which ProductOnCheckouts to delete
     * 
    **/
    where?: ProductOnCheckoutWhereInput
  }


  /**
   * ProductOnCheckout: findUniqueOrThrow
   */
  export type ProductOnCheckoutFindUniqueOrThrowArgs = ProductOnCheckoutFindUniqueArgsBase
      

  /**
   * ProductOnCheckout: findFirstOrThrow
   */
  export type ProductOnCheckoutFindFirstOrThrowArgs = ProductOnCheckoutFindFirstArgsBase
      

  /**
   * ProductOnCheckout without action
   */
  export type ProductOnCheckoutArgs = {
    /**
     * Select specific fields to fetch from the ProductOnCheckout
     * 
    **/
    select?: ProductOnCheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOnCheckoutInclude | null
  }



  /**
   * Model Checkout
   */


  export type AggregateCheckout = {
    _count: CheckoutCountAggregateOutputType | null
    _avg: CheckoutAvgAggregateOutputType | null
    _sum: CheckoutSumAggregateOutputType | null
    _min: CheckoutMinAggregateOutputType | null
    _max: CheckoutMaxAggregateOutputType | null
  }

  export type CheckoutAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type CheckoutSumAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type CheckoutMinAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    status: string | null
    transferCapture: string | null
    transferAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckoutMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    status: string | null
    transferCapture: string | null
    transferAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckoutCountAggregateOutputType = {
    id: number
    userId: number
    price: number
    status: number
    transferCapture: number
    transferAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CheckoutAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type CheckoutSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type CheckoutMinAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    status?: true
    transferCapture?: true
    transferAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckoutMaxAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    status?: true
    transferCapture?: true
    transferAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckoutCountAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    status?: true
    transferCapture?: true
    transferAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CheckoutAggregateArgs = {
    /**
     * Filter which Checkout to aggregate.
     * 
    **/
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     * 
    **/
    orderBy?: Enumerable<CheckoutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkouts
    **/
    _count?: true | CheckoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckoutMaxAggregateInputType
  }

  export type GetCheckoutAggregateType<T extends CheckoutAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckout[P]>
      : GetScalarType<T[P], AggregateCheckout[P]>
  }




  export type CheckoutGroupByArgs = {
    where?: CheckoutWhereInput
    orderBy?: Enumerable<CheckoutOrderByWithAggregationInput>
    by: Array<CheckoutScalarFieldEnum>
    having?: CheckoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckoutCountAggregateInputType | true
    _avg?: CheckoutAvgAggregateInputType
    _sum?: CheckoutSumAggregateInputType
    _min?: CheckoutMinAggregateInputType
    _max?: CheckoutMaxAggregateInputType
  }


  export type CheckoutGroupByOutputType = {
    id: number
    userId: number
    price: number
    status: string
    transferCapture: string | null
    transferAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CheckoutCountAggregateOutputType | null
    _avg: CheckoutAvgAggregateOutputType | null
    _sum: CheckoutSumAggregateOutputType | null
    _min: CheckoutMinAggregateOutputType | null
    _max: CheckoutMaxAggregateOutputType | null
  }

  type GetCheckoutGroupByPayload<T extends CheckoutGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CheckoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckoutGroupByOutputType[P]>
            : GetScalarType<T[P], CheckoutGroupByOutputType[P]>
        }
      >
    >


  export type CheckoutSelect = {
    id?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    products?: boolean | ProductOnCheckoutFindManyArgs
    price?: boolean
    status?: boolean
    transferCapture?: boolean
    transferAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | CheckoutCountOutputTypeArgs
  }

  export type CheckoutInclude = {
    user?: boolean | UserArgs
    products?: boolean | ProductOnCheckoutFindManyArgs
    _count?: boolean | CheckoutCountOutputTypeArgs
  }

  export type CheckoutGetPayload<
    S extends boolean | null | undefined | CheckoutArgs,
    U = keyof S
      > = S extends true
        ? Checkout
    : S extends undefined
    ? never
    : S extends CheckoutArgs | CheckoutFindManyArgs
    ?'include' extends U
    ? Checkout  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'products' ? Array < ProductOnCheckoutGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CheckoutCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'products' ? Array < ProductOnCheckoutGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CheckoutCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Checkout ? Checkout[P] : never
  } 
    : Checkout
  : Checkout


  type CheckoutCountArgs = Merge<
    Omit<CheckoutFindManyArgs, 'select' | 'include'> & {
      select?: CheckoutCountAggregateInputType | true
    }
  >

  export interface CheckoutDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Checkout that matches the filter.
     * @param {CheckoutFindUniqueArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CheckoutFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CheckoutFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Checkout'> extends True ? CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>> : CheckSelect<T, Prisma__CheckoutClient<Checkout | null >, Prisma__CheckoutClient<CheckoutGetPayload<T> | null >>

    /**
     * Find the first Checkout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindFirstArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CheckoutFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CheckoutFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Checkout'> extends True ? CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>> : CheckSelect<T, Prisma__CheckoutClient<Checkout | null >, Prisma__CheckoutClient<CheckoutGetPayload<T> | null >>

    /**
     * Find zero or more Checkouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkouts
     * const checkouts = await prisma.checkout.findMany()
     * 
     * // Get first 10 Checkouts
     * const checkouts = await prisma.checkout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkoutWithIdOnly = await prisma.checkout.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CheckoutFindManyArgs>(
      args?: SelectSubset<T, CheckoutFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Checkout>>, PrismaPromise<Array<CheckoutGetPayload<T>>>>

    /**
     * Create a Checkout.
     * @param {CheckoutCreateArgs} args - Arguments to create a Checkout.
     * @example
     * // Create one Checkout
     * const Checkout = await prisma.checkout.create({
     *   data: {
     *     // ... data to create a Checkout
     *   }
     * })
     * 
    **/
    create<T extends CheckoutCreateArgs>(
      args: SelectSubset<T, CheckoutCreateArgs>
    ): CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>>

    /**
     * Delete a Checkout.
     * @param {CheckoutDeleteArgs} args - Arguments to delete one Checkout.
     * @example
     * // Delete one Checkout
     * const Checkout = await prisma.checkout.delete({
     *   where: {
     *     // ... filter to delete one Checkout
     *   }
     * })
     * 
    **/
    delete<T extends CheckoutDeleteArgs>(
      args: SelectSubset<T, CheckoutDeleteArgs>
    ): CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>>

    /**
     * Update one Checkout.
     * @param {CheckoutUpdateArgs} args - Arguments to update one Checkout.
     * @example
     * // Update one Checkout
     * const checkout = await prisma.checkout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CheckoutUpdateArgs>(
      args: SelectSubset<T, CheckoutUpdateArgs>
    ): CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>>

    /**
     * Delete zero or more Checkouts.
     * @param {CheckoutDeleteManyArgs} args - Arguments to filter Checkouts to delete.
     * @example
     * // Delete a few Checkouts
     * const { count } = await prisma.checkout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CheckoutDeleteManyArgs>(
      args?: SelectSubset<T, CheckoutDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkouts
     * const checkout = await prisma.checkout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CheckoutUpdateManyArgs>(
      args: SelectSubset<T, CheckoutUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Checkout.
     * @param {CheckoutUpsertArgs} args - Arguments to update or create a Checkout.
     * @example
     * // Update or create a Checkout
     * const checkout = await prisma.checkout.upsert({
     *   create: {
     *     // ... data to create a Checkout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkout we want to update
     *   }
     * })
    **/
    upsert<T extends CheckoutUpsertArgs>(
      args: SelectSubset<T, CheckoutUpsertArgs>
    ): CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>>

    /**
     * Find one Checkout that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CheckoutFindUniqueOrThrowArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CheckoutFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CheckoutFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>>

    /**
     * Find the first Checkout that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindFirstOrThrowArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CheckoutFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CheckoutFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CheckoutClient<Checkout>, Prisma__CheckoutClient<CheckoutGetPayload<T>>>

    /**
     * Count the number of Checkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutCountArgs} args - Arguments to filter Checkouts to count.
     * @example
     * // Count the number of Checkouts
     * const count = await prisma.checkout.count({
     *   where: {
     *     // ... the filter for the Checkouts we want to count
     *   }
     * })
    **/
    count<T extends CheckoutCountArgs>(
      args?: Subset<T, CheckoutCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckoutAggregateArgs>(args: Subset<T, CheckoutAggregateArgs>): PrismaPromise<GetCheckoutAggregateType<T>>

    /**
     * Group by Checkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutGroupByArgs} args - Group by arguments.
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
      T extends CheckoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckoutGroupByArgs['orderBy'] }
        : { orderBy?: CheckoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckoutGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CheckoutClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    products<T extends ProductOnCheckoutFindManyArgs = {}>(args?: Subset<T, ProductOnCheckoutFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductOnCheckout>>, PrismaPromise<Array<ProductOnCheckoutGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Checkout base type for findUnique actions
   */
  export type CheckoutFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
    /**
     * Filter, which Checkout to fetch.
     * 
    **/
    where: CheckoutWhereUniqueInput
  }

  /**
   * Checkout: findUnique
   */
  export interface CheckoutFindUniqueArgs extends CheckoutFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Checkout base type for findFirst actions
   */
  export type CheckoutFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
    /**
     * Filter, which Checkout to fetch.
     * 
    **/
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     * 
    **/
    orderBy?: Enumerable<CheckoutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkouts.
     * 
    **/
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkouts.
     * 
    **/
    distinct?: Enumerable<CheckoutScalarFieldEnum>
  }

  /**
   * Checkout: findFirst
   */
  export interface CheckoutFindFirstArgs extends CheckoutFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Checkout findMany
   */
  export type CheckoutFindManyArgs = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
    /**
     * Filter, which Checkouts to fetch.
     * 
    **/
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     * 
    **/
    orderBy?: Enumerable<CheckoutOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkouts.
     * 
    **/
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CheckoutScalarFieldEnum>
  }


  /**
   * Checkout create
   */
  export type CheckoutCreateArgs = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
    /**
     * The data needed to create a Checkout.
     * 
    **/
    data: XOR<CheckoutCreateInput, CheckoutUncheckedCreateInput>
  }


  /**
   * Checkout update
   */
  export type CheckoutUpdateArgs = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
    /**
     * The data needed to update a Checkout.
     * 
    **/
    data: XOR<CheckoutUpdateInput, CheckoutUncheckedUpdateInput>
    /**
     * Choose, which Checkout to update.
     * 
    **/
    where: CheckoutWhereUniqueInput
  }


  /**
   * Checkout updateMany
   */
  export type CheckoutUpdateManyArgs = {
    /**
     * The data used to update Checkouts.
     * 
    **/
    data: XOR<CheckoutUpdateManyMutationInput, CheckoutUncheckedUpdateManyInput>
    /**
     * Filter which Checkouts to update
     * 
    **/
    where?: CheckoutWhereInput
  }


  /**
   * Checkout upsert
   */
  export type CheckoutUpsertArgs = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
    /**
     * The filter to search for the Checkout to update in case it exists.
     * 
    **/
    where: CheckoutWhereUniqueInput
    /**
     * In case the Checkout found by the `where` argument doesn't exist, create a new Checkout with this data.
     * 
    **/
    create: XOR<CheckoutCreateInput, CheckoutUncheckedCreateInput>
    /**
     * In case the Checkout was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CheckoutUpdateInput, CheckoutUncheckedUpdateInput>
  }


  /**
   * Checkout delete
   */
  export type CheckoutDeleteArgs = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
    /**
     * Filter which Checkout to delete.
     * 
    **/
    where: CheckoutWhereUniqueInput
  }


  /**
   * Checkout deleteMany
   */
  export type CheckoutDeleteManyArgs = {
    /**
     * Filter which Checkouts to delete
     * 
    **/
    where?: CheckoutWhereInput
  }


  /**
   * Checkout: findUniqueOrThrow
   */
  export type CheckoutFindUniqueOrThrowArgs = CheckoutFindUniqueArgsBase
      

  /**
   * Checkout: findFirstOrThrow
   */
  export type CheckoutFindFirstOrThrowArgs = CheckoutFindFirstArgsBase
      

  /**
   * Checkout without action
   */
  export type CheckoutArgs = {
    /**
     * Select specific fields to fetch from the Checkout
     * 
    **/
    select?: CheckoutSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CheckoutInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CheckoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    price: 'price',
    status: 'status',
    transferCapture: 'transferCapture',
    transferAt: 'transferAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CheckoutScalarFieldEnum = (typeof CheckoutScalarFieldEnum)[keyof typeof CheckoutScalarFieldEnum]


  export const ProductOnCheckoutScalarFieldEnum: {
    checkoutId: 'checkoutId',
    productId: 'productId'
  };

  export type ProductOnCheckoutScalarFieldEnum = (typeof ProductOnCheckoutScalarFieldEnum)[keyof typeof ProductOnCheckoutScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    images: 'images',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    checkouts?: CheckoutListRelationFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    checkouts?: CheckoutOrderByRelationAggregateInput
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    images?: StringFilter | string
    price?: FloatFilter | number
    checkouts?: ProductOnCheckoutListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    price?: SortOrder
    checkouts?: ProductOnCheckoutOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductWhereUniqueInput = {
    id?: number
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    images?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductOnCheckoutWhereInput = {
    AND?: Enumerable<ProductOnCheckoutWhereInput>
    OR?: Enumerable<ProductOnCheckoutWhereInput>
    NOT?: Enumerable<ProductOnCheckoutWhereInput>
    checkout?: XOR<CheckoutRelationFilter, CheckoutWhereInput>
    checkoutId?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    productId?: IntFilter | number
  }

  export type ProductOnCheckoutOrderByWithRelationInput = {
    checkout?: CheckoutOrderByWithRelationInput
    checkoutId?: SortOrder
    product?: ProductOrderByWithRelationInput
    productId?: SortOrder
  }

  export type ProductOnCheckoutWhereUniqueInput = {
    checkoutId_productId?: ProductOnCheckoutCheckoutIdProductIdCompoundUniqueInput
  }

  export type ProductOnCheckoutOrderByWithAggregationInput = {
    checkoutId?: SortOrder
    productId?: SortOrder
    _count?: ProductOnCheckoutCountOrderByAggregateInput
    _avg?: ProductOnCheckoutAvgOrderByAggregateInput
    _max?: ProductOnCheckoutMaxOrderByAggregateInput
    _min?: ProductOnCheckoutMinOrderByAggregateInput
    _sum?: ProductOnCheckoutSumOrderByAggregateInput
  }

  export type ProductOnCheckoutScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductOnCheckoutScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductOnCheckoutScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductOnCheckoutScalarWhereWithAggregatesInput>
    checkoutId?: IntWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
  }

  export type CheckoutWhereInput = {
    AND?: Enumerable<CheckoutWhereInput>
    OR?: Enumerable<CheckoutWhereInput>
    NOT?: Enumerable<CheckoutWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    products?: ProductOnCheckoutListRelationFilter
    price?: FloatFilter | number
    status?: StringFilter | string
    transferCapture?: StringNullableFilter | string | null
    transferAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CheckoutOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    products?: ProductOnCheckoutOrderByRelationAggregateInput
    price?: SortOrder
    status?: SortOrder
    transferCapture?: SortOrder
    transferAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckoutWhereUniqueInput = {
    id?: number
  }

  export type CheckoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    transferCapture?: SortOrder
    transferAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CheckoutCountOrderByAggregateInput
    _avg?: CheckoutAvgOrderByAggregateInput
    _max?: CheckoutMaxOrderByAggregateInput
    _min?: CheckoutMinOrderByAggregateInput
    _sum?: CheckoutSumOrderByAggregateInput
  }

  export type CheckoutScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CheckoutScalarWhereWithAggregatesInput>
    OR?: Enumerable<CheckoutScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CheckoutScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    price?: FloatWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    transferCapture?: StringNullableWithAggregatesFilter | string | null
    transferAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    checkouts?: CheckoutCreateNestedManyWithoutUserInput
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    checkouts?: CheckoutUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    checkouts?: CheckoutUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    checkouts?: CheckoutUncheckedUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    title: string
    description: string
    images: string
    price: number
    checkouts?: ProductOnCheckoutCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    images: string
    price: number
    checkouts?: ProductOnCheckoutUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    checkouts?: ProductOnCheckoutUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    checkouts?: ProductOnCheckoutUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnCheckoutCreateInput = {
    checkout: CheckoutCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutCheckoutsInput
  }

  export type ProductOnCheckoutUncheckedCreateInput = {
    checkoutId: number
    productId: number
  }

  export type ProductOnCheckoutUpdateInput = {
    checkout?: CheckoutUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutCheckoutsNestedInput
  }

  export type ProductOnCheckoutUncheckedUpdateInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOnCheckoutUpdateManyMutationInput = {

  }

  export type ProductOnCheckoutUncheckedUpdateManyInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type CheckoutCreateInput = {
    user: UserCreateNestedOneWithoutCheckoutsInput
    products?: ProductOnCheckoutCreateNestedManyWithoutCheckoutInput
    price: number
    status?: string
    transferCapture?: string | null
    transferAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckoutUncheckedCreateInput = {
    id?: number
    userId: number
    products?: ProductOnCheckoutUncheckedCreateNestedManyWithoutCheckoutInput
    price: number
    status?: string
    transferCapture?: string | null
    transferAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckoutUpdateInput = {
    user?: UserUpdateOneRequiredWithoutCheckoutsNestedInput
    products?: ProductOnCheckoutUpdateManyWithoutCheckoutNestedInput
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    products?: ProductOnCheckoutUncheckedUpdateManyWithoutCheckoutNestedInput
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type CheckoutListRelationFilter = {
    every?: CheckoutWhereInput
    some?: CheckoutWhereInput
    none?: CheckoutWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CheckoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ProductOnCheckoutListRelationFilter = {
    every?: ProductOnCheckoutWhereInput
    some?: ProductOnCheckoutWhereInput
    none?: ProductOnCheckoutWhereInput
  }

  export type ProductOnCheckoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type CheckoutRelationFilter = {
    is?: CheckoutWhereInput
    isNot?: CheckoutWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductOnCheckoutCheckoutIdProductIdCompoundUniqueInput = {
    checkoutId: number
    productId: number
  }

  export type ProductOnCheckoutCountOrderByAggregateInput = {
    checkoutId?: SortOrder
    productId?: SortOrder
  }

  export type ProductOnCheckoutAvgOrderByAggregateInput = {
    checkoutId?: SortOrder
    productId?: SortOrder
  }

  export type ProductOnCheckoutMaxOrderByAggregateInput = {
    checkoutId?: SortOrder
    productId?: SortOrder
  }

  export type ProductOnCheckoutMinOrderByAggregateInput = {
    checkoutId?: SortOrder
    productId?: SortOrder
  }

  export type ProductOnCheckoutSumOrderByAggregateInput = {
    checkoutId?: SortOrder
    productId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CheckoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    transferCapture?: SortOrder
    transferAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckoutAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type CheckoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    transferCapture?: SortOrder
    transferAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    status?: SortOrder
    transferCapture?: SortOrder
    transferAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckoutSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type CheckoutCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CheckoutCreateWithoutUserInput>, Enumerable<CheckoutUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CheckoutCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CheckoutWhereUniqueInput>
  }

  export type CheckoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CheckoutCreateWithoutUserInput>, Enumerable<CheckoutUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CheckoutCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CheckoutWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CheckoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CheckoutCreateWithoutUserInput>, Enumerable<CheckoutUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CheckoutCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CheckoutUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CheckoutWhereUniqueInput>
    disconnect?: Enumerable<CheckoutWhereUniqueInput>
    delete?: Enumerable<CheckoutWhereUniqueInput>
    connect?: Enumerable<CheckoutWhereUniqueInput>
    update?: Enumerable<CheckoutUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CheckoutUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CheckoutScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CheckoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CheckoutCreateWithoutUserInput>, Enumerable<CheckoutUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CheckoutCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CheckoutUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CheckoutWhereUniqueInput>
    disconnect?: Enumerable<CheckoutWhereUniqueInput>
    delete?: Enumerable<CheckoutWhereUniqueInput>
    connect?: Enumerable<CheckoutWhereUniqueInput>
    update?: Enumerable<CheckoutUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CheckoutUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CheckoutScalarWhereInput>
  }

  export type ProductOnCheckoutCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutProductInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutProductInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
  }

  export type ProductOnCheckoutUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutProductInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutProductInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductOnCheckoutUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutProductInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductOnCheckoutUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    disconnect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    delete?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    update?: Enumerable<ProductOnCheckoutUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductOnCheckoutUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductOnCheckoutScalarWhereInput>
  }

  export type ProductOnCheckoutUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutProductInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductOnCheckoutUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    disconnect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    delete?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    update?: Enumerable<ProductOnCheckoutUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductOnCheckoutUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductOnCheckoutScalarWhereInput>
  }

  export type CheckoutCreateNestedOneWithoutProductsInput = {
    create?: XOR<CheckoutCreateWithoutProductsInput, CheckoutUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutProductsInput
    connect?: CheckoutWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCheckoutsInput = {
    create?: XOR<ProductCreateWithoutCheckoutsInput, ProductUncheckedCreateWithoutCheckoutsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCheckoutsInput
    connect?: ProductWhereUniqueInput
  }

  export type CheckoutUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CheckoutCreateWithoutProductsInput, CheckoutUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutProductsInput
    upsert?: CheckoutUpsertWithoutProductsInput
    connect?: CheckoutWhereUniqueInput
    update?: XOR<CheckoutUpdateWithoutProductsInput, CheckoutUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutCheckoutsNestedInput = {
    create?: XOR<ProductCreateWithoutCheckoutsInput, ProductUncheckedCreateWithoutCheckoutsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCheckoutsInput
    upsert?: ProductUpsertWithoutCheckoutsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutCheckoutsInput, ProductUncheckedUpdateWithoutCheckoutsInput>
  }

  export type UserCreateNestedOneWithoutCheckoutsInput = {
    create?: XOR<UserCreateWithoutCheckoutsInput, UserUncheckedCreateWithoutCheckoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckoutsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductOnCheckoutCreateNestedManyWithoutCheckoutInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutCheckoutInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutCheckoutInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutCheckoutInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
  }

  export type ProductOnCheckoutUncheckedCreateNestedManyWithoutCheckoutInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutCheckoutInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutCheckoutInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutCheckoutInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutCheckoutsNestedInput = {
    create?: XOR<UserCreateWithoutCheckoutsInput, UserUncheckedCreateWithoutCheckoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckoutsInput
    upsert?: UserUpsertWithoutCheckoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCheckoutsInput, UserUncheckedUpdateWithoutCheckoutsInput>
  }

  export type ProductOnCheckoutUpdateManyWithoutCheckoutNestedInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutCheckoutInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutCheckoutInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutCheckoutInput>
    upsert?: Enumerable<ProductOnCheckoutUpsertWithWhereUniqueWithoutCheckoutInput>
    set?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    disconnect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    delete?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    update?: Enumerable<ProductOnCheckoutUpdateWithWhereUniqueWithoutCheckoutInput>
    updateMany?: Enumerable<ProductOnCheckoutUpdateManyWithWhereWithoutCheckoutInput>
    deleteMany?: Enumerable<ProductOnCheckoutScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductOnCheckoutUncheckedUpdateManyWithoutCheckoutNestedInput = {
    create?: XOR<Enumerable<ProductOnCheckoutCreateWithoutCheckoutInput>, Enumerable<ProductOnCheckoutUncheckedCreateWithoutCheckoutInput>>
    connectOrCreate?: Enumerable<ProductOnCheckoutCreateOrConnectWithoutCheckoutInput>
    upsert?: Enumerable<ProductOnCheckoutUpsertWithWhereUniqueWithoutCheckoutInput>
    set?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    disconnect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    delete?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    connect?: Enumerable<ProductOnCheckoutWhereUniqueInput>
    update?: Enumerable<ProductOnCheckoutUpdateWithWhereUniqueWithoutCheckoutInput>
    updateMany?: Enumerable<ProductOnCheckoutUpdateManyWithWhereWithoutCheckoutInput>
    deleteMany?: Enumerable<ProductOnCheckoutScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type CheckoutCreateWithoutUserInput = {
    products?: ProductOnCheckoutCreateNestedManyWithoutCheckoutInput
    price: number
    status?: string
    transferCapture?: string | null
    transferAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckoutUncheckedCreateWithoutUserInput = {
    id?: number
    products?: ProductOnCheckoutUncheckedCreateNestedManyWithoutCheckoutInput
    price: number
    status?: string
    transferCapture?: string | null
    transferAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckoutCreateOrConnectWithoutUserInput = {
    where: CheckoutWhereUniqueInput
    create: XOR<CheckoutCreateWithoutUserInput, CheckoutUncheckedCreateWithoutUserInput>
  }

  export type CheckoutUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckoutWhereUniqueInput
    update: XOR<CheckoutUpdateWithoutUserInput, CheckoutUncheckedUpdateWithoutUserInput>
    create: XOR<CheckoutCreateWithoutUserInput, CheckoutUncheckedCreateWithoutUserInput>
  }

  export type CheckoutUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckoutWhereUniqueInput
    data: XOR<CheckoutUpdateWithoutUserInput, CheckoutUncheckedUpdateWithoutUserInput>
  }

  export type CheckoutUpdateManyWithWhereWithoutUserInput = {
    where: CheckoutScalarWhereInput
    data: XOR<CheckoutUpdateManyMutationInput, CheckoutUncheckedUpdateManyWithoutCheckoutsInput>
  }

  export type CheckoutScalarWhereInput = {
    AND?: Enumerable<CheckoutScalarWhereInput>
    OR?: Enumerable<CheckoutScalarWhereInput>
    NOT?: Enumerable<CheckoutScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    price?: FloatFilter | number
    status?: StringFilter | string
    transferCapture?: StringNullableFilter | string | null
    transferAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductOnCheckoutCreateWithoutProductInput = {
    checkout: CheckoutCreateNestedOneWithoutProductsInput
  }

  export type ProductOnCheckoutUncheckedCreateWithoutProductInput = {
    checkoutId: number
  }

  export type ProductOnCheckoutCreateOrConnectWithoutProductInput = {
    where: ProductOnCheckoutWhereUniqueInput
    create: XOR<ProductOnCheckoutCreateWithoutProductInput, ProductOnCheckoutUncheckedCreateWithoutProductInput>
  }

  export type ProductOnCheckoutUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductOnCheckoutWhereUniqueInput
    update: XOR<ProductOnCheckoutUpdateWithoutProductInput, ProductOnCheckoutUncheckedUpdateWithoutProductInput>
    create: XOR<ProductOnCheckoutCreateWithoutProductInput, ProductOnCheckoutUncheckedCreateWithoutProductInput>
  }

  export type ProductOnCheckoutUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductOnCheckoutWhereUniqueInput
    data: XOR<ProductOnCheckoutUpdateWithoutProductInput, ProductOnCheckoutUncheckedUpdateWithoutProductInput>
  }

  export type ProductOnCheckoutUpdateManyWithWhereWithoutProductInput = {
    where: ProductOnCheckoutScalarWhereInput
    data: XOR<ProductOnCheckoutUpdateManyMutationInput, ProductOnCheckoutUncheckedUpdateManyWithoutCheckoutsInput>
  }

  export type ProductOnCheckoutScalarWhereInput = {
    AND?: Enumerable<ProductOnCheckoutScalarWhereInput>
    OR?: Enumerable<ProductOnCheckoutScalarWhereInput>
    NOT?: Enumerable<ProductOnCheckoutScalarWhereInput>
    checkoutId?: IntFilter | number
    productId?: IntFilter | number
  }

  export type CheckoutCreateWithoutProductsInput = {
    user: UserCreateNestedOneWithoutCheckoutsInput
    price: number
    status?: string
    transferCapture?: string | null
    transferAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckoutUncheckedCreateWithoutProductsInput = {
    id?: number
    userId: number
    price: number
    status?: string
    transferCapture?: string | null
    transferAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckoutCreateOrConnectWithoutProductsInput = {
    where: CheckoutWhereUniqueInput
    create: XOR<CheckoutCreateWithoutProductsInput, CheckoutUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutCheckoutsInput = {
    title: string
    description: string
    images: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutCheckoutsInput = {
    id?: number
    title: string
    description: string
    images: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutCheckoutsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCheckoutsInput, ProductUncheckedCreateWithoutCheckoutsInput>
  }

  export type CheckoutUpsertWithoutProductsInput = {
    update: XOR<CheckoutUpdateWithoutProductsInput, CheckoutUncheckedUpdateWithoutProductsInput>
    create: XOR<CheckoutCreateWithoutProductsInput, CheckoutUncheckedCreateWithoutProductsInput>
  }

  export type CheckoutUpdateWithoutProductsInput = {
    user?: UserUpdateOneRequiredWithoutCheckoutsNestedInput
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutCheckoutsInput = {
    update: XOR<ProductUpdateWithoutCheckoutsInput, ProductUncheckedUpdateWithoutCheckoutsInput>
    create: XOR<ProductCreateWithoutCheckoutsInput, ProductUncheckedCreateWithoutCheckoutsInput>
  }

  export type ProductUpdateWithoutCheckoutsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutCheckoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCheckoutsInput = {
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCheckoutsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCheckoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckoutsInput, UserUncheckedCreateWithoutCheckoutsInput>
  }

  export type ProductOnCheckoutCreateWithoutCheckoutInput = {
    product: ProductCreateNestedOneWithoutCheckoutsInput
  }

  export type ProductOnCheckoutUncheckedCreateWithoutCheckoutInput = {
    productId: number
  }

  export type ProductOnCheckoutCreateOrConnectWithoutCheckoutInput = {
    where: ProductOnCheckoutWhereUniqueInput
    create: XOR<ProductOnCheckoutCreateWithoutCheckoutInput, ProductOnCheckoutUncheckedCreateWithoutCheckoutInput>
  }

  export type UserUpsertWithoutCheckoutsInput = {
    update: XOR<UserUpdateWithoutCheckoutsInput, UserUncheckedUpdateWithoutCheckoutsInput>
    create: XOR<UserCreateWithoutCheckoutsInput, UserUncheckedCreateWithoutCheckoutsInput>
  }

  export type UserUpdateWithoutCheckoutsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCheckoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnCheckoutUpsertWithWhereUniqueWithoutCheckoutInput = {
    where: ProductOnCheckoutWhereUniqueInput
    update: XOR<ProductOnCheckoutUpdateWithoutCheckoutInput, ProductOnCheckoutUncheckedUpdateWithoutCheckoutInput>
    create: XOR<ProductOnCheckoutCreateWithoutCheckoutInput, ProductOnCheckoutUncheckedCreateWithoutCheckoutInput>
  }

  export type ProductOnCheckoutUpdateWithWhereUniqueWithoutCheckoutInput = {
    where: ProductOnCheckoutWhereUniqueInput
    data: XOR<ProductOnCheckoutUpdateWithoutCheckoutInput, ProductOnCheckoutUncheckedUpdateWithoutCheckoutInput>
  }

  export type ProductOnCheckoutUpdateManyWithWhereWithoutCheckoutInput = {
    where: ProductOnCheckoutScalarWhereInput
    data: XOR<ProductOnCheckoutUpdateManyMutationInput, ProductOnCheckoutUncheckedUpdateManyWithoutProductsInput>
  }

  export type CheckoutUpdateWithoutUserInput = {
    products?: ProductOnCheckoutUpdateManyWithoutCheckoutNestedInput
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    products?: ProductOnCheckoutUncheckedUpdateManyWithoutCheckoutNestedInput
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateManyWithoutCheckoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    transferCapture?: NullableStringFieldUpdateOperationsInput | string | null
    transferAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnCheckoutUpdateWithoutProductInput = {
    checkout?: CheckoutUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductOnCheckoutUncheckedUpdateWithoutProductInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOnCheckoutUncheckedUpdateManyWithoutCheckoutsInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOnCheckoutUpdateWithoutCheckoutInput = {
    product?: ProductUpdateOneRequiredWithoutCheckoutsNestedInput
  }

  export type ProductOnCheckoutUncheckedUpdateWithoutCheckoutInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOnCheckoutUncheckedUpdateManyWithoutProductsInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}