
import { ApolloClient, InMemoryCache } from "@apollo/client";

const externalLink = "https://299b-240f-65-33a0-1-9864-9b3a-3fc1-4082.jp.ngrok.io"
const url = `${externalLink}/graphql`
// const backup = "56c8753b-e8e2-4b32-b728-660089391bc4"

const makeApolloClient = (token) => {
  let authToken = token

  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers: { "Auth-Token": authToken }
  });

  return client;
}

export default makeApolloClient;
