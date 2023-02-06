
import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseUrl = "https://URL-POINTER.jp.ngrok.io/graphql"

const makeApolloClient = (token) => {
  let url = baseUrl.replace("URL-POINTER", process.env.NGROK)
  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers: { "Auth-Token": token }
  });

  return client;
}

export default makeApolloClient;
