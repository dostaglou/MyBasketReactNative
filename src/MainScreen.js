import { View, Text } from 'react-native'
import client from '../apollo-client'
import { gql } from '@apollo/client'

async function getData() {
  const response = await client.query({
    query: gql`query { privateData }`,
    fetchPolicy: "network-only"
  })

  const data = response.data;
  const errors = response.errors;

  console.log(data, errors)
  return({data: data, errors: errors})
}

export default function MainScreen() {
  let info = getData()
  
  return (
    <View>
      <Text>Something</Text>
    </View>
  )
}