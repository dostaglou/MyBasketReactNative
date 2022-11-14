import { View, Text } from 'react-native'
import client from '../apollo-client'
import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'

const QUERY_STRING = gql`query { privateData }`

export default function MainScreen() {
  const [state, setState] = useState() 
  useEffect(() => {
    const query_call = async () => {
      const response = await client.query({
        query: QUERY_STRING, 
        fetchPolicy: "network-only"
      })
      setState(response.data)
    }
    console.log("here")
    query_call
  }, [state])

  console.log("something")
  return (
    <View>
      <Text>Something</Text>
    </View>
  )
}