
import { ApolloClient, InMemoryCache } from "@apollo/client";

const externalLink = "2bc5-240f-65-33a0-1-4d73-ac75-5ff3-1f5b"
const url = `https://${externalLink}.jp.ngrok.io/graphql`

const makeApolloClient = (token) => {
  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers: { "Auth-Token": token }
  });

  return client;
}

export default makeApolloClient;
