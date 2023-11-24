const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
  }
    type Todo {
        id: ID
        title: String!
        description: String!
        done: Boolean!
    }

    type Mutation {
        createTodo(
            title: String!
            description: String!
            done: Boolean!
        ): Todo!
        updateTodo(
            id: ID!
            title: String!
            description: String!
            done: Boolean!
        ): Todo!
        deleteTodo(
            id: ID!
        ): Todo!
        getTodo: [Todo]!

    }
`;

module.exports = { typeDefs };