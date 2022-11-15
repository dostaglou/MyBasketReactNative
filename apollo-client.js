import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseLink = "https://575a-240f-65-33a0-1-d57c-d02f-ec5a-9f2d.jp.ngrok.io"
const makeLink =  `${baseLink}/graphql`
const headers = { Accept: 'application/json', 'Content-Type': 'application/json', "Auth-Token": "56c8753b-e8e2-4b32-b728-660089391bc4" }

const client = new ApolloClient({
    uri: makeLink,
    cache: new InMemoryCache(),
    headers: headers
});

export default client;