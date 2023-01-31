import { Text, StyleSheet, View, Pressable, Button, TouchableOpacity } from 'react-native'

const shoppingListItem = (data, statusToggle) => {
  const item = data.item
  // TODO: Probably should abstract these out into a kind of global const
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
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </Pressable>
      <View style={styles.statusButtonSection}>
        <View style={styles.statusButton}>
          {/* on tap this geneates TypeError: statusToggle is not a function */}
          <Button color={statusColor[item.status]} title={statusText[item.status]} onPress={()=> { statusToggle(item.status) }}/>
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
  },
  deleteButtonText: {
    color: "white"
  },
  statusButtonSection: {
    width: "100%",
    marginHorizontal: 0,
    flexDirection: 'row'
  },
  statusButton: {
    flex: 1
  }
})

export default shoppingListItem
