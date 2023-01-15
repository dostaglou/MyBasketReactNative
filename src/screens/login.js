import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Alert } from 'react-native'
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client'
import LoadingIndicator from '../components/loadingIndicator';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginMutation = gql`
  mutation Login($email: String!, $password: String!){
    login(
      input: {
        email: $email,
        password: $password,
      }
    ) {
      token
    }
  }
`

const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState("dostaglou@me.co");
  const [password, onChangePassword] = useState("password");
  const [handleSubmit, { data, loading, error }] = useMutation(
    LoginMutation,
    {
      variables: { email: email, password: password },
      onCompleted: async () => {
        AsyncStorage.setItem('@authToken', data.login.token)
        navigation.navigate("MainScreen")
      }
    }
  )

  if (loading) { return(<LoadingIndicator />) }

  return (
    <SafeAreaView>
      <TextInput
        style={style.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={()=> handleSubmit()} />
    </SafeAreaView>
  )
};

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    boarderWidth: 1,
    padding: 10,
    backgroundColor: 'yellow'
  }
})

export default Login
