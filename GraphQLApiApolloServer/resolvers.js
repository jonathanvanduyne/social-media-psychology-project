const { GraphQLDate } = require("graphql-iso-date");

module.exports = {
    Date: GraphQLDate,
    Query: {
        posts: (parent, args, { dataSources }, info) => {
            return dataSources.postsAPI.getPosts(args); // Note the lowercase "postsAPI"
        },
        postById: (parent, { id }, { dataSources }, info) => {
            return dataSources.postsAPI.getPostById(id);
        }
    },
};