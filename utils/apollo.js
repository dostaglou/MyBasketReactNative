
import { ApolloClient, InMemoryCache } from "@apollo/client";

const externalLink = "f418-240f-65-33a0-1-a12e-45a2-b5de-64b8"
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
