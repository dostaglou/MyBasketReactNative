import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/MainScreen';
import ComposeScreen from './src/ComposeScreen';
import { ApolloProvider } from '@apollo/client';
import Client from './apollo-client'

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={Client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: 'メモ帳-555' // (1)
            }}
          />
          <Stack.Screen
            name="ComposeScreen"
            component={ComposeScreen}
            options={{
              title: '作成'
            }}
          />                    
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}