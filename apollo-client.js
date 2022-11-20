import { ApolloClient, InMemoryCache } from "@apollo/client";

const externalLink = "https://3dc4-240f-65-33a0-1-5c6e-b88f-719-422a.jp.ngrok.io"
const url =  `${externalLink}/graphql`
const backup = "56c8753b-e8e2-4b32-b728-660089391bc4"

const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers: { "Auth-Token": backup }
});

export default client;
