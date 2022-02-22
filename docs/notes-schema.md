
# Notes for Schema

## Schema

A. schema.ts: generate schema w/ *Nexus*

- A schema is a collection of type definitions (hence "typeDefs") that together define the "shape" of queries that are executed against your data
- Schema is req so the gql service can define a set of types that describes the set of possible data one can query on that service
- The type def enables a query which will return an array from server
- defines structure of the data

1. 1st output file: Nexus creates a GQL schema file w/ type *.graphql*
   1. GQL Schema Definition Langauge (*SDL*) which sets the structure of the API
2. 2nd output file: *typegen*: will have TS type def for the types in the schema
   1. this keeps the schema def synced w/ the schema implementation

```ts
(alias) function makeSchema(config: SchemaConfig): NexusGraphQLSchema import makeSchema
//
(alias) (method) join(...paths: string[]): string import join
```

> Defines the GraphQL schema, by combining the GraphQL types defined by the GraphQL Nexus layer or any manually defined GraphQLType objects. Requires at least one type be named "Query", which will be used as the root query type.
> Join all arguments together and normalize the resulting path. Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.

- run npx ts-node --transpile-only src/schema
- enables Nexus to create schema.graphql and nexus-trypegen.ts
  - typegen has auto-gen TS interface & type defs which are auto added to Nexus func signatures
- create generate and dev tasks in script section of pack.json to update the schema and typegen files and the dev scipt to start server

```js
const { ApolloServer, gql } = require('apollo-server');
const typeDefsOne = gql`
# book type defines queryable field for books in data source
  type Book {
    title: String
    author: String
  }
# Query type lists all the queries a user can exe & what's returned
  type Query {
    books: [Book]
  }
  `;
```

B. *index.ts*: create GQL web server w/ *apollo*

```ts
(method) ApolloServer.listen(...opts: any[]): Promise<ServerInfo>
(alias) new ApolloServer(config: ApolloServerExpressConfig & {
    cors?: boolean | e.CorsOptions | undefined;
    onHealthCheck?: ((req: e.Request<ParamsDictionary, any, any, QueryString.ParsedQs, Record<...>>) => Promise<...>) | undefined;
    healthCheckPath?: string | ... 1 more ... | undefined;
    stopGracePeriodMillis?: number | undefined;
}): ApolloServer
import ApolloServer

then(onfulfilled?: ((value: ServerInfo) => ServerInfo | PromiseLike<ServerInfo>) | null | undefined, onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<ServerInfo>
```

- The callback to execute when the Promise is resolved.
- Attaches callbacks for the resolution and/or rejection of the Promise.
- @returns — A Promise for the completion of which ever callback is executed.

1. The Nexus created schema object defines the GQL schema
   1. required when instantiating server so let Apollo Server know what API ops to support in GQL API
2. Then start the server & create port
   1. server rt url string inside a promise
3. go to query your server to redirect to studio explorer
   1. schema tab shows full GQL schema to look up schema details
   2. explorer tab to test query

___
//query graph directly

```shell
curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:3000/ \
  --data '{"query":"query { __typename }"}'
```

___

1. GQL schemas all contain 3 root types: Query, Mutation, Subscription, which correspond w/ the operation types.
   1. the fields are root fields & define available API ops
   2. each op has to start w/ a root field
   3. the <!> (non-nullable) makes it an error if you return null for that field
2. Ex. 1: the type of the ok root field, annotated as Boolean! which rt true or false & the API only accepts one possible query

```ts
type Query {
 ok: Boolean!
 users: [User!]!
 user(id:ID!): User
}
type Mutation {
 createUser(name: String!): User!
}
type User {
 id: ID!
 name: String!
}
```

1. Ex. 2: root fields = Query - users & user, Mutation - createUser
2. the root field types = [User!]!, User & User!
3. Scalar types: basic types containing no sub-fields
   1. Int, Float, String, Boolean, ID
4. if the root field type is an object type; you can expand it (query, mutation, or sub) w/ fields of that type (expanded section is the selection set)
5. The GQL API that implements ex. 2 accepts the below operations

- *Operations*
  - query for all users, single user by id and create user
  - when querying an object type, you must query >= 1 selection set field
  - the 3 root fields have diff type modifiers (combos of being list and/or required) for the User type
  - 1. users field w/ return type [User!]! returns list of User elements (non-null; always returns empty list or User objects)
  - 2. user(id:ID!) field has return type User, that can return null or User object
  - 3. createUser(name:String!) field, return type User!, op will always return User object

```ts
query {
 users {
  id
  name
 }
}
query {
 user(id: 'user-1') {
  id
  name
 }
}
mutation {
 createUser(name:'Dean') {
  id
  name
 }
}
```
