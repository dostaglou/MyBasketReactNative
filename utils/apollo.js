
import { ApolloClient, InMemoryCache } from "@apollo/client";

const externalLink = "d895-240f-65-33a0-1-8869-cefa-2be2-c3d2"
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
