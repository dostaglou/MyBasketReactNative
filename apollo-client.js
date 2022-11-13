import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://69f4-240f-65-33a0-1-d57c-d02f-ec5a-9f2d.jp.ngrok.io/graphql',
    cache: new InMemoryCache(),
});

export default client;