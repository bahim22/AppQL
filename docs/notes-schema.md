
# Notes for Schema

## Schema

- A schema is a collection of type definitions (hence "typeDefs") that together define the "shape" of queries that are executed against your data
- Schema is req so the gql service can define a set of types that describes the set of possible data one  query on that service
- The type def enables a query named books which will return an array of >= 0 books from server
- defines structure of the data

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

1. schema.ts: generate schema w/ *Nexus*

- Schema.ts

```ts
(alias) function makeSchema(config: SchemaConfig): NexusGraphQLSchema import makeSchema
```

> Defines the GraphQL schema, by combining the GraphQL types defined by the GraphQL Nexus layer or any manually defined GraphQLType objects. Requires at least one type be named "Query", which will be used as the root query type.

>(alias) (method) join(...paths: string[]): string import join

Join all arguments together and normalize the resulting path. Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
