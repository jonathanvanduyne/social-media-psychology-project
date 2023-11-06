const posts = require("/Users/j_vanduyne/workspace/social-media-psychology-project/GraphQLApi:ApolloServer/data/posts.json");
const { DataSource } = require("apollo-datasource");
const _ = require('lodash');

class PostAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        // You can perform initialization here if needed.
    }

    getPosts(args) {
        return _.filter(posts, args);;
    }

    getPostById(id) {
        const post = _.filter(posts, { id: parseInt(id) });
        return post[0]
    }
}

module.exports = PostAPI;
