import { ApolloClient, InMemoryCache } from "@apollo/client";

const externalLink = "https://888f-240f-65-33a0-1-bc10-cedc-59e2-b8a6.jp.ngrok.io"
const url =  `${externalLink}/graphql`
const backup = "56c8753b-e8e2-4b32-b728-660089391bc4"

const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers: { "Auth-Token": backup }
});

export default client;
