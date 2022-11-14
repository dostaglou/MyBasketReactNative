import { View, Text } from 'react-native'
import client from '../apollo-client'
import { gql, useQuery } from '@apollo/client'

const QUERY_STRING = gql`query { privateData }`

export default function MainScreen() {
  const { loading, error, data } = useQuery(QUERY_STRING)
  if (loading) { return(<Text>"loading"</Text>)}
  if (error) { return(<Text>"error"</Text>) }

  console.log(data.privateData)
  
  return (
    <View>
      <Text>{data.privateData}</Text>
    </View>
  )
}