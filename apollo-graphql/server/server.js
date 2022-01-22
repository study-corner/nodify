const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greeting: String,
        music: String
    }
`;


const resolvers = {
    Query: {
        greeting: () => 'Hello GraphQL world!',
        music: () => 'Enjoy listen spotify',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
    .listen({ port: 9000})
    .then( serverInfo => console.log(`Server running at ${serverInfo.url}`));