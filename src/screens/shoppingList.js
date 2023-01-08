import { useQuery } from "@apollo/client"
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import LoadingIndicator from "../components/loadingIndicator"
import { gql } from '@apollo/client'

const shoppingListItemQuery = gql`
query shoppingListItemSearch($shoppingListId: ID!, $shoppingListItemId: ID){
  shoppingListItemSearch(shoppingListId: $shoppingListId, shoppingListItemId: $shoppingListItemId){
    __typename
    id
    shoppingListId
    catalogueItemId
    quantity
    status
  }
}
`
const handleData = (shoppingList) => {
  console.log(shoppingList)
  return(
    <View>
      <Text>Info</Text>
      <FlatList
        data={shoppingList}
        renderItem={({item}) =>
        <View>
          <Text>ID: {item.id}  Qty: {item.quantity} Status: {item.status}</Text>
        </View>
      }
      />
    </View>
  )
}

const handleError = (data) => {
  return ( <Text>Error Case</Text>)
}

const ShoppingList = ({navigation, route}) => {
  const { data, loading, error } = useQuery(
    shoppingListItemQuery,
    {
      variables: { shoppingListId: route.params.shoppingListId },
      fetchPolicy: 'cache-and-network'
    }
  )

  if (data) { return handleData(data.shoppingListItemSearch) }
  if (error) { return handleError(data) }
  if (loading) { return LoadingIndicator() }

  return (
    <View>
      <Text>WTF</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
});

export default ShoppingList
