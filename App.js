import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import Client from './apollo-client'

import ScreenCase from './src/components/screenCase'

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={Client}>
      <ScreenCase />
    </ApolloProvider>
  );
}
