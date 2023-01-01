import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloProvider } from '@apollo/client';
import makeApolloClient from './utils/apollo';
import ScreenCase from './src/screens/screenCase'
import LoadingIndicator from './src/components/loadingIndicator';

const Main = () => {
  const [client, setClient] = useState(null);

  const fetchSession = async () => {
    const storedToken = await AsyncStorage.getItem('@authToken');

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

