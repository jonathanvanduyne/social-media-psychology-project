const { ApolloServer, gql } = require("apollo-server");
const posts = require("/Users/j_vanduyne/workspace/social-media-psychology-project/GraphQLApi:ApolloServer/data/posts.json");
const PostAPI = require("./datasources/posts.js");

const typeDefs = require("./schema.js");

const resolvers = require("./resolvers.js");

const server = new ApolloServer({
  typeDefs, resolvers, dataSources: () => ({
    postsAPI: new PostAPI(),
  })
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`GraphQL running at ${url}`);
  });
