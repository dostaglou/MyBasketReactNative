import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Button } from 'react-native'
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client'
import LoadingIndicator from '../components/loadingIndicator';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutMutation = gql`
  mutation logout($authToken: String!){
    logout(input: { authToken: $authToken })
  }
`
const Logout = ({navigation}) => {
  const [authToken, setAuthToken] = useState(null)
  const [handleSubmit, { data, loading, error }] = useMutation(
    LogoutMutation,
    {
      variables: { authToken: authToken },
      onCompleted: async () => {
        AsyncStorage.removeItem('@authToken')
        navigation.navigate("MainScreen")
      }
    },
  )

  useEffect(() => {
    const fetchSession = async () => {
        const storedToken = await AsyncStorage.getItem('@authToken');
        setAuthToken(storedToken)
      }

      fetchSession();
  }, [])

  if (loading) { return(<LoadingIndicator />) }

  return(
    <SafeAreaView style={styles.logoutButton}>
      <Button title="Confirm Logout" onPress={()=> handleSubmit()} />
    </SafeAreaView>
  )
}

export default Logout

const styles = StyleSheet.create({
  logoutButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD5DF',
    color: "#BBECFC"
  }
})

