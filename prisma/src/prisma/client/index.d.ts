
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SearchNumber
 * 
 */
export type SearchNumber = $Result.DefaultSelection<Prisma.$SearchNumberPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SearchNumbers
 * const searchNumbers = await prisma.searchNumber.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SearchNumbers
   * const searchNumbers = await prisma.searchNumber.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.searchNumber`: Exposes CRUD operations for the **SearchNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchNumbers
    * const searchNumbers = await prisma.searchNumber.findMany()
    * ```
    */
  get searchNumber(): Prisma.SearchNumberDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SearchNumber: 'SearchNumber'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'searchNumber'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      SearchNumber: {
        payload: Prisma.$SearchNumberPayload<ExtArgs>
        fields: Prisma.SearchNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchNumberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchNumberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload>
          }
          findFirst: {
            args: Prisma.SearchNumberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchNumberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload>
          }
          findMany: {
            args: Prisma.SearchNumberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload>[]
          }
          create: {
            args: Prisma.SearchNumberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload>
          }
          createMany: {
            args: Prisma.SearchNumberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SearchNumberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload>
          }
          update: {
            args: Prisma.SearchNumberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload>
          }
          deleteMany: {
            args: Prisma.SearchNumberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SearchNumberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SearchNumberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchNumberPayload>
          }
          aggregate: {
            args: Prisma.SearchNumberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSearchNumber>
          }
          groupBy: {
            args: Prisma.SearchNumberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SearchNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchNumberCountArgs<ExtArgs>,
            result: $Utils.Optional<SearchNumberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SearchNumber
   */

  export type AggregateSearchNumber = {
    _count: SearchNumberCountAggregateOutputType | null
    _min: SearchNumberMinAggregateOutputType | null
    _max: SearchNumberMaxAggregateOutputType | null
  }

  export type SearchNumberMinAggregateOutputType = {
    id: string | null
    key_value: string | null
    count_unit: string | null
    compite_result: boolean | null
    create_data: Date | null
    update_data: Date | null
  }

  export type SearchNumberMaxAggregateOutputType = {
    id: string | null
    key_value: string | null
    count_unit: string | null
    compite_result: boolean | null
    create_data: Date | null
    update_data: Date | null
  }

  export type SearchNumberCountAggregateOutputType = {
    id: number
    key_value: number
    count_unit: number
    compite_result: number
    create_data: number
    update_data: number
    _all: number
  }


  export type SearchNumberMinAggregateInputType = {
    id?: true
    key_value?: true
    count_unit?: true
    compite_result?: true
    create_data?: true
    update_data?: true
  }

  export type SearchNumberMaxAggregateInputType = {
    id?: true
    key_value?: true
    count_unit?: true
    compite_result?: true
    create_data?: true
    update_data?: true
  }

  export type SearchNumberCountAggregateInputType = {
    id?: true
    key_value?: true
    count_unit?: true
    compite_result?: true
    create_data?: true
    update_data?: true
    _all?: true
  }

  export type SearchNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchNumber to aggregate.
     */
    where?: SearchNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchNumbers to fetch.
     */
    orderBy?: SearchNumberOrderByWithRelationInput | SearchNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchNumbers
    **/
    _count?: true | SearchNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchNumberMaxAggregateInputType
  }

  export type GetSearchNumberAggregateType<T extends SearchNumberAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchNumber[P]>
      : GetScalarType<T[P], AggregateSearchNumber[P]>
  }




  export type SearchNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchNumberWhereInput
    orderBy?: SearchNumberOrderByWithAggregationInput | SearchNumberOrderByWithAggregationInput[]
    by: SearchNumberScalarFieldEnum[] | SearchNumberScalarFieldEnum
    having?: SearchNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchNumberCountAggregateInputType | true
    _min?: SearchNumberMinAggregateInputType
    _max?: SearchNumberMaxAggregateInputType
  }

  export type SearchNumberGroupByOutputType = {
    id: string
    key_value: string
    count_unit: string
    compite_result: boolean
    create_data: Date
    update_data: Date
    _count: SearchNumberCountAggregateOutputType | null
    _min: SearchNumberMinAggregateOutputType | null
    _max: SearchNumberMaxAggregateOutputType | null
  }

  type GetSearchNumberGroupByPayload<T extends SearchNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchNumberGroupByOutputType[P]>
            : GetScalarType<T[P], SearchNumberGroupByOutputType[P]>
        }
      >
    >


  export type SearchNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key_value?: boolean
    count_unit?: boolean
    compite_result?: boolean
    create_data?: boolean
    update_data?: boolean
  }, ExtArgs["result"]["searchNumber"]>

  export type SearchNumberSelectScalar = {
    id?: boolean
    key_value?: boolean
    count_unit?: boolean
    compite_result?: boolean
    create_data?: boolean
    update_data?: boolean
  }



  export type $SearchNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchNumber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key_value: string
      count_unit: string
      compite_result: boolean
      create_data: Date
      update_data: Date
    }, ExtArgs["result"]["searchNumber"]>
    composites: {}
  }


  type SearchNumberGetPayload<S extends boolean | null | undefined | SearchNumberDefaultArgs> = $Result.GetResult<Prisma.$SearchNumberPayload, S>

  type SearchNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SearchNumberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SearchNumberCountAggregateInputType | true
    }

  export interface SearchNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchNumber'], meta: { name: 'SearchNumber' } }
    /**
     * Find zero or one SearchNumber that matches the filter.
     * @param {SearchNumberFindUniqueArgs} args - Arguments to find a SearchNumber
     * @example
     * // Get one SearchNumber
     * const searchNumber = await prisma.searchNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SearchNumberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SearchNumberFindUniqueArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SearchNumber that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SearchNumberFindUniqueOrThrowArgs} args - Arguments to find a SearchNumber
     * @example
     * // Get one SearchNumber
     * const searchNumber = await prisma.searchNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SearchNumberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchNumberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SearchNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchNumberFindFirstArgs} args - Arguments to find a SearchNumber
     * @example
     * // Get one SearchNumber
     * const searchNumber = await prisma.searchNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SearchNumberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchNumberFindFirstArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SearchNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchNumberFindFirstOrThrowArgs} args - Arguments to find a SearchNumber
     * @example
     * // Get one SearchNumber
     * const searchNumber = await prisma.searchNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SearchNumberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchNumberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SearchNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchNumberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchNumbers
     * const searchNumbers = await prisma.searchNumber.findMany()
     * 
     * // Get first 10 SearchNumbers
     * const searchNumbers = await prisma.searchNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchNumberWithIdOnly = await prisma.searchNumber.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SearchNumberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchNumberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SearchNumber.
     * @param {SearchNumberCreateArgs} args - Arguments to create a SearchNumber.
     * @example
     * // Create one SearchNumber
     * const SearchNumber = await prisma.searchNumber.create({
     *   data: {
     *     // ... data to create a SearchNumber
     *   }
     * })
     * 
    **/
    create<T extends SearchNumberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SearchNumberCreateArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SearchNumbers.
     *     @param {SearchNumberCreateManyArgs} args - Arguments to create many SearchNumbers.
     *     @example
     *     // Create many SearchNumbers
     *     const searchNumber = await prisma.searchNumber.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SearchNumberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchNumberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SearchNumber.
     * @param {SearchNumberDeleteArgs} args - Arguments to delete one SearchNumber.
     * @example
     * // Delete one SearchNumber
     * const SearchNumber = await prisma.searchNumber.delete({
     *   where: {
     *     // ... filter to delete one SearchNumber
     *   }
     * })
     * 
    **/
    delete<T extends SearchNumberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SearchNumberDeleteArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SearchNumber.
     * @param {SearchNumberUpdateArgs} args - Arguments to update one SearchNumber.
     * @example
     * // Update one SearchNumber
     * const searchNumber = await prisma.searchNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SearchNumberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SearchNumberUpdateArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SearchNumbers.
     * @param {SearchNumberDeleteManyArgs} args - Arguments to filter SearchNumbers to delete.
     * @example
     * // Delete a few SearchNumbers
     * const { count } = await prisma.searchNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SearchNumberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchNumberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchNumbers
     * const searchNumber = await prisma.searchNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SearchNumberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SearchNumberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SearchNumber.
     * @param {SearchNumberUpsertArgs} args - Arguments to update or create a SearchNumber.
     * @example
     * // Update or create a SearchNumber
     * const searchNumber = await prisma.searchNumber.upsert({
     *   create: {
     *     // ... data to create a SearchNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchNumber we want to update
     *   }
     * })
    **/
    upsert<T extends SearchNumberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SearchNumberUpsertArgs<ExtArgs>>
    ): Prisma__SearchNumberClient<$Result.GetResult<Prisma.$SearchNumberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SearchNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchNumberCountArgs} args - Arguments to filter SearchNumbers to count.
     * @example
     * // Count the number of SearchNumbers
     * const count = await prisma.searchNumber.count({
     *   where: {
     *     // ... the filter for the SearchNumbers we want to count
     *   }
     * })
    **/
    count<T extends SearchNumberCountArgs>(
      args?: Subset<T, SearchNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchNumberAggregateArgs>(args: Subset<T, SearchNumberAggregateArgs>): Prisma.PrismaPromise<GetSearchNumberAggregateType<T>>

    /**
     * Group by SearchNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchNumberGroupByArgs} args - Group by arguments.
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
      T extends SearchNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchNumberGroupByArgs['orderBy'] }
        : { orderBy?: SearchNumberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, SearchNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchNumber model
   */
  readonly fields: SearchNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SearchNumber model
   */ 
  interface SearchNumberFieldRefs {
    readonly id: FieldRef<"SearchNumber", 'String'>
    readonly key_value: FieldRef<"SearchNumber", 'String'>
    readonly count_unit: FieldRef<"SearchNumber", 'String'>
    readonly compite_result: FieldRef<"SearchNumber", 'Boolean'>
    readonly create_data: FieldRef<"SearchNumber", 'DateTime'>
    readonly update_data: FieldRef<"SearchNumber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchNumber findUnique
   */
  export type SearchNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * Filter, which SearchNumber to fetch.
     */
    where: SearchNumberWhereUniqueInput
  }

  /**
   * SearchNumber findUniqueOrThrow
   */
  export type SearchNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * Filter, which SearchNumber to fetch.
     */
    where: SearchNumberWhereUniqueInput
  }

  /**
   * SearchNumber findFirst
   */
  export type SearchNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * Filter, which SearchNumber to fetch.
     */
    where?: SearchNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchNumbers to fetch.
     */
    orderBy?: SearchNumberOrderByWithRelationInput | SearchNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchNumbers.
     */
    cursor?: SearchNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchNumbers.
     */
    distinct?: SearchNumberScalarFieldEnum | SearchNumberScalarFieldEnum[]
  }

  /**
   * SearchNumber findFirstOrThrow
   */
  export type SearchNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * Filter, which SearchNumber to fetch.
     */
    where?: SearchNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchNumbers to fetch.
     */
    orderBy?: SearchNumberOrderByWithRelationInput | SearchNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchNumbers.
     */
    cursor?: SearchNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchNumbers.
     */
    distinct?: SearchNumberScalarFieldEnum | SearchNumberScalarFieldEnum[]
  }

  /**
   * SearchNumber findMany
   */
  export type SearchNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * Filter, which SearchNumbers to fetch.
     */
    where?: SearchNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchNumbers to fetch.
     */
    orderBy?: SearchNumberOrderByWithRelationInput | SearchNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchNumbers.
     */
    cursor?: SearchNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchNumbers.
     */
    skip?: number
    distinct?: SearchNumberScalarFieldEnum | SearchNumberScalarFieldEnum[]
  }

  /**
   * SearchNumber create
   */
  export type SearchNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * The data needed to create a SearchNumber.
     */
    data: XOR<SearchNumberCreateInput, SearchNumberUncheckedCreateInput>
  }

  /**
   * SearchNumber createMany
   */
  export type SearchNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchNumbers.
     */
    data: SearchNumberCreateManyInput | SearchNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchNumber update
   */
  export type SearchNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * The data needed to update a SearchNumber.
     */
    data: XOR<SearchNumberUpdateInput, SearchNumberUncheckedUpdateInput>
    /**
     * Choose, which SearchNumber to update.
     */
    where: SearchNumberWhereUniqueInput
  }

  /**
   * SearchNumber updateMany
   */
  export type SearchNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchNumbers.
     */
    data: XOR<SearchNumberUpdateManyMutationInput, SearchNumberUncheckedUpdateManyInput>
    /**
     * Filter which SearchNumbers to update
     */
    where?: SearchNumberWhereInput
  }

  /**
   * SearchNumber upsert
   */
  export type SearchNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * The filter to search for the SearchNumber to update in case it exists.
     */
    where: SearchNumberWhereUniqueInput
    /**
     * In case the SearchNumber found by the `where` argument doesn't exist, create a new SearchNumber with this data.
     */
    create: XOR<SearchNumberCreateInput, SearchNumberUncheckedCreateInput>
    /**
     * In case the SearchNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchNumberUpdateInput, SearchNumberUncheckedUpdateInput>
  }

  /**
   * SearchNumber delete
   */
  export type SearchNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
    /**
     * Filter which SearchNumber to delete.
     */
    where: SearchNumberWhereUniqueInput
  }

  /**
   * SearchNumber deleteMany
   */
  export type SearchNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchNumbers to delete
     */
    where?: SearchNumberWhereInput
  }

  /**
   * SearchNumber without action
   */
  export type SearchNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchNumber
     */
    select?: SearchNumberSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SearchNumberScalarFieldEnum: {
    id: 'id',
    key_value: 'key_value',
    count_unit: 'count_unit',
    compite_result: 'compite_result',
    create_data: 'create_data',
    update_data: 'update_data'
  };

  export type SearchNumberScalarFieldEnum = (typeof SearchNumberScalarFieldEnum)[keyof typeof SearchNumberScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type SearchNumberWhereInput = {
    AND?: SearchNumberWhereInput | SearchNumberWhereInput[]
    OR?: SearchNumberWhereInput[]
    NOT?: SearchNumberWhereInput | SearchNumberWhereInput[]
    id?: StringFilter<"SearchNumber"> | string
    key_value?: StringFilter<"SearchNumber"> | string
    count_unit?: StringFilter<"SearchNumber"> | string
    compite_result?: BoolFilter<"SearchNumber"> | boolean
    create_data?: DateTimeFilter<"SearchNumber"> | Date | string
    update_data?: DateTimeFilter<"SearchNumber"> | Date | string
  }

  export type SearchNumberOrderByWithRelationInput = {
    id?: SortOrder
    key_value?: SortOrder
    count_unit?: SortOrder
    compite_result?: SortOrder
    create_data?: SortOrder
    update_data?: SortOrder
  }

  export type SearchNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key_value?: string
    AND?: SearchNumberWhereInput | SearchNumberWhereInput[]
    OR?: SearchNumberWhereInput[]
    NOT?: SearchNumberWhereInput | SearchNumberWhereInput[]
    count_unit?: StringFilter<"SearchNumber"> | string
    compite_result?: BoolFilter<"SearchNumber"> | boolean
    create_data?: DateTimeFilter<"SearchNumber"> | Date | string
    update_data?: DateTimeFilter<"SearchNumber"> | Date | string
  }, "id" | "key_value">

  export type SearchNumberOrderByWithAggregationInput = {
    id?: SortOrder
    key_value?: SortOrder
    count_unit?: SortOrder
    compite_result?: SortOrder
    create_data?: SortOrder
    update_data?: SortOrder
    _count?: SearchNumberCountOrderByAggregateInput
    _max?: SearchNumberMaxOrderByAggregateInput
    _min?: SearchNumberMinOrderByAggregateInput
  }

  export type SearchNumberScalarWhereWithAggregatesInput = {
    AND?: SearchNumberScalarWhereWithAggregatesInput | SearchNumberScalarWhereWithAggregatesInput[]
    OR?: SearchNumberScalarWhereWithAggregatesInput[]
    NOT?: SearchNumberScalarWhereWithAggregatesInput | SearchNumberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchNumber"> | string
    key_value?: StringWithAggregatesFilter<"SearchNumber"> | string
    count_unit?: StringWithAggregatesFilter<"SearchNumber"> | string
    compite_result?: BoolWithAggregatesFilter<"SearchNumber"> | boolean
    create_data?: DateTimeWithAggregatesFilter<"SearchNumber"> | Date | string
    update_data?: DateTimeWithAggregatesFilter<"SearchNumber"> | Date | string
  }

  export type SearchNumberCreateInput = {
    id?: string
    key_value: string
    count_unit: string
    compite_result: boolean
    create_data?: Date | string
    update_data?: Date | string
  }

  export type SearchNumberUncheckedCreateInput = {
    id?: string
    key_value: string
    count_unit: string
    compite_result: boolean
    create_data?: Date | string
    update_data?: Date | string
  }

  export type SearchNumberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key_value?: StringFieldUpdateOperationsInput | string
    count_unit?: StringFieldUpdateOperationsInput | string
    compite_result?: BoolFieldUpdateOperationsInput | boolean
    create_data?: DateTimeFieldUpdateOperationsInput | Date | string
    update_data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchNumberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key_value?: StringFieldUpdateOperationsInput | string
    count_unit?: StringFieldUpdateOperationsInput | string
    compite_result?: BoolFieldUpdateOperationsInput | boolean
    create_data?: DateTimeFieldUpdateOperationsInput | Date | string
    update_data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchNumberCreateManyInput = {
    id?: string
    key_value: string
    count_unit: string
    compite_result: boolean
    create_data?: Date | string
    update_data?: Date | string
  }

  export type SearchNumberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key_value?: StringFieldUpdateOperationsInput | string
    count_unit?: StringFieldUpdateOperationsInput | string
    compite_result?: BoolFieldUpdateOperationsInput | boolean
    create_data?: DateTimeFieldUpdateOperationsInput | Date | string
    update_data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchNumberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key_value?: StringFieldUpdateOperationsInput | string
    count_unit?: StringFieldUpdateOperationsInput | string
    compite_result?: BoolFieldUpdateOperationsInput | boolean
    create_data?: DateTimeFieldUpdateOperationsInput | Date | string
    update_data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SearchNumberCountOrderByAggregateInput = {
    id?: SortOrder
    key_value?: SortOrder
    count_unit?: SortOrder
    compite_result?: SortOrder
    create_data?: SortOrder
    update_data?: SortOrder
  }

  export type SearchNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    key_value?: SortOrder
    count_unit?: SortOrder
    compite_result?: SortOrder
    create_data?: SortOrder
    update_data?: SortOrder
  }

  export type SearchNumberMinOrderByAggregateInput = {
    id?: SortOrder
    key_value?: SortOrder
    count_unit?: SortOrder
    compite_result?: SortOrder
    create_data?: SortOrder
    update_data?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SearchNumberDefaultArgs instead
     */
    export type SearchNumberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SearchNumberDefaultArgs<ExtArgs>

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