import { useState } from 'react'
import { Text, StyleSheet, View, Pressable, Button, TouchableOpacity } from 'react-native'

const shoppingListItem = (data, statusToggle) => {
  console.log(data, statusToggle)
  const item = data.item
  const statusColor = { "pending": "green", "picked_up": "grey" }
  const statusText = { "pending": "Picked Up", "picked_up": "Pickup"}

  return(
    <View key={item.id} style={styles.item}>
      <Pressable style={[styles.itemContainer, {justifyContent: 'space-between'}]}>
        <View style={{ padding: 10}}>
          <Text>Name: {item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Shopping List: Three</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={()=> {}}>
          <Text style={{color: 'white'}}>X</Text>
        </TouchableOpacity>
      </Pressable>
      <View style={[styles.itemContainer, {width: "100%", marginHorizontal: 0}]}>
        <View style={{flex:1}}>
          <Button color={statusColor[item.status]} title={statusText[item.status]} onPress={()=> { handleStatusToggle(item.status) }}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row'
  },
  shoppingListItem: {
    marginHorizontal: 0,
    width: "50%",
    borderWidth: 1,
    padding: 0,
  },
  deleteButton: {
    borderRadius: 10,
    height: 20,
    width: 20,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4
  }
})

export default shoppingListItem
