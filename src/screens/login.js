import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Modal, Alert, ActivityIndicator } from 'react-native'
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client'
import LoadingIndicator from '../../utils/loadingIndicator';
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

const handleAcceptance = (navigation, data) => {
  AsyncStorage.setItem('@authToken', data.login.token);

  return(
    <View>
      <Text>Success: {data.login.token}</Text>
      <Button title="Main Screen" onPress={()=> navigation.navigate("MainScreen")} />
    </View>
  )
}

const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [handleSubmit, { data, loading, error }] = useMutation(
    LoginMutation,
    { variables: { email: email, password: password } }
  )

  if (data) { handleAcceptance(navigation, data) }
  if (loading) { return(<ActivityIndicator />) }

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
