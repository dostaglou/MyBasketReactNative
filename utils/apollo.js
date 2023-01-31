
import { ApolloClient, InMemoryCache } from "@apollo/client";

const url = `https://${process.env.NGROK}.jp.ngrok.io/graphql`

const makeApolloClient = (token) => {
  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers: { "Auth-Token": token }
  });

  return client;
}

export default makeApolloClient;
