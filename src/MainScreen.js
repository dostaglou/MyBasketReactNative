import { View, Text } from 'react-native'
import client from '../apollo-client'
import { gql } from '@apollo/client'

const link = "https://69f4-240f-65-33a0-1-d57c-d02f-ec5a-9f2d.jp.ngrok.io"
const headers = { Accept: 'application/json', 'Content-Type': 'application/json'}
const details = { method: 'GET', headers: headers }

export default function MainScreen() {
  fetch(link, details)
    .then((response) => response.json())
    .then((json) => {
      console.log("json", json)
    })
    .catch ((error) => {
      console.log("error", error)
    })

  return (
    <View>
      <Text>Something</Text>
    </View>
  )
}