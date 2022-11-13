import { View, Text } from 'react-native'
import client from '../apollo-client'
import { gql } from '@apollo/client'

const link = "https://69f4-240f-65-33a0-1-d57c-d02f-ec5a-9f2d.jp.ngrok.io"
const headers = { Accept: 'application/json', 'Content-Type': 'application/json'}
const details = { method: 'POST', headers: headers }

async function getData() {
  const response = await client.query({
    query: gql`query { testField }`,
    fetchPolicy: "network-only"
  })
  if (!response.ok) {
    console.log("err", response)
    return("error")
  }

  const data = response.json();
  console.log("data", data) 

  return(data)
}

export default function MainScreen() {
  getData()

  return (
    <View>
      <Text>Something</Text>
    </View>
  )
}