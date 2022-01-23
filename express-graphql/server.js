const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema} =  require('graphql');

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    hello: () => 'Hello world'
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql: true,
}));

const port = 9000;
app.listen(port, () => console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`));
