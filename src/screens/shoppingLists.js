import { useQuery } from "@apollo/client"
// import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import LoadingIndicator from "../components/loadingIndicator"
import { gql } from '@apollo/client'

const shoppingListsQuery = gql`
query shoppingListSearch($shoppingListId: ID){
  shoppingListSearch(shoppingListId: $shoppingListId){
    __typename
    id
    userId
    name
  }
}
`

const handleData = (navigation, shoppingLists) => {
  return(
    <View>
      <Text>Info</Text>
      <FlatList
        data={shoppingLists}
        renderItem={({item}) =>
        <View>
          <Text style={{height: 50}} onPress={() => navigation.navigate('ShoppingList', {shoppingListId: item.id})} >
            ID: {item.id}  Name: {item.name}
          </Text>
        </View>
      }
      />
    </View>
  )
}

const handleError = (data) => {
  return ( <Text>Error Case</Text>)
}

const ShoppingLists = ({navigation}) => {
  const { data, loading, error } = useQuery(
    shoppingListsQuery,
    {
      shoppingListId: null,
      fetchPolicy: 'cache-and-network'
    }
  )

  if (data) { return handleData(navigation, data.shoppingListSearch) }
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

export default ShoppingLists














