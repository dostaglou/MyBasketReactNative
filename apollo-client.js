import { ApolloClient, HttpLink, ApolloLink,  InMemoryCache, concat } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const baseLink = "https://575a-240f-65-33a0-1-d57c-d02f-ec5a-9f2d.jp.ngrok.io"
const url =  `${baseLink}/graphql`
const backup = "56c8753b-e8e2-4b32-b728-660089391bc4"

const httpLink = new HttpLink({ uri: url });
const authMiddleware = new ApolloLink((operation, foward) => {
  operation.setContext(({ headers = {}}) => ({
    headers: {
      ...headers,
      "Auth-Token": backup
    }
  }))

  return foward(operation)
})

const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});

export default client;
