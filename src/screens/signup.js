import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Modal, Alert, ActivityIndicator } from 'react-native'
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client'
import SignupFailedMessageWindow from '../components/SignupFailedMessageWindow'
// import SignupMutation from '../gql/mutations/signup.js'

const SignupMutation = gql`
  mutation Signup($email: String!, $password: String!, $username: String!){
    signup(
      input: {
        email: $email,
        password: $password,
        username: $username
      }
    ) {
      token
    }
  }
`

const handleRejection = (navigation) => {
  return (
    <Modal
      transparent={ true }
      visible={ true }
      animationType="slide"
      onRequestClose={()=>{
        Alert.alert("an error has occurred")
        navigation.navigate("MainScreen")
      }}
    />
  )
}

const handleAcceptance = (navigation, data) => {
  return(
    <View>
      <Text>Success: {data.signup.token}</Text>
      <Button title="Main Screen" onPress={()=> navigation.navigate("MainScreen")} />
    </View>
  )
}

const SignUp = ({navigation}) => {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [handleSubmit, { data, loading, error }] = useMutation(
    SignupMutation,
    { variables: { email: email, password: password, username: username } }
  )

  if (loading) { return(<ActivityIndicator />)}
  if (data) { return handleAcceptance(navigation, data) }

  return (
    <SafeAreaView>
      <TextInput
        style={style.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="username"
      />
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

export default SignUp
