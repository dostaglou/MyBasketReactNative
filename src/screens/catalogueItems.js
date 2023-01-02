import { useQuery } from "@apollo/client"
// import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import LoadingIndicator from '../components/loadingIndicator'
import { gql } from '@apollo/client'


const catalogueItemSearchQuery = gql`
  query catalogueItemSearch($catalogueItemId: ID){
    catalogueItemSearch(catalogueItemId: $catalogueItemId){
      id
      userId
      imageUrl
      name
      description
    }
  }
`
// <Image source={uri: item.image_url}>
const handleData = (catalogueItems) => {
  return(
    <View>
      <Text>Info</Text>
      <FlatList
        data={catalogueItems}
        renderItem={({item}) =>
        <View>
          <Text>ID: {item.id}  Name: {item.name}</Text>
          <Image style={styles.logo} source={{uri: item.imageUrl}}/>
        </View>
      }
      />
    </View>
  )
}

const handleError = (data) => {
  console.log(data)
  return ( <Text>Error Case</Text>)
}


const CatalogueItems = ({navigation}) => {
  const { data, loading, error } = useQuery(
    catalogueItemSearchQuery,
    {
      catalogueItemId: null,
      fetchPolicy: 'cache-and-network'
    }
  )

  if (data) { return handleData(data.catalogueItemSearch) }
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


export default CatalogueItems
