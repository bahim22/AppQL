
# Notes for graphql, apollo backend

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

## Dataset

## Define a resolver

## create instance of ApolloServer

## Start Server

## Exe init query

### References

1. [ApolloGraphQl][https://www.apollographql.com/docs/apollo-server/getting-started/]
2. [GeekyAnts][https://geekyants.com/blog/full-stack-mern--graphql-boilerplate--starter-part-i]
