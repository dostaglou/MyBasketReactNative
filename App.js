import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloProvider } from '@apollo/client';
import makeApolloClient from './apollo';
import { Text } from 'react-native'
import ScreenCase from './src/components/screenCase'
import LoadingIndicator from './utils/loadingIndicator';

const Main = () => {
  const [client, setClient] = useState(null);

  const fetchSession = async () => {
    const storedToken = await AsyncStorage.getItem('@authToken');
    console.log("fetch", storedToken)
    const client = makeApolloClient(storedToken);

    setClient(client);
  }

  useEffect(() => {
    fetchSession();
  }, [])

  if (!client) { return <LoadingIndicator />}

  return (
    <ApolloProvider client={client}>
      <ScreenCase />
    </ApolloProvider>
  );
}

export default Main;

