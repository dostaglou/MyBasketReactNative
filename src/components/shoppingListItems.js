import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { Dimensions } from 'react-native';
import { useQuery, useMutation} from '@apollo/client';
import { gql } from '@apollo/client'
import LoadingIndicator from './loadingIndicator';
import ShoppingListItem from './shoppingListItem';

const { width } = Dimensions.get('screen');

const shoppingListItemUpdate = gql`
  mutation shoppingListItemUpdate($id: ID!, $status: ShoppingListItemStatusEnum, $quantity: Int){
    shoppingListItemUpdate(
      input: {
        shoppingListItemId: $id,
        quantity: $quantity,
        status: $status,
      }
    ) {
      __typename
      id
      status
      quantity
      name
      description
    }
  }
`

const statusEnum = {
  "pending": "picked_up",
  "picked_up": "pending"
}

const shoppingListItemSearch = gql`
  query shoppingListItemSearch{
    shoppingListItemSearch {
      __typename
      id
      status
      quantity
      name
      description
    }
  }
`

const Listing = () => {
  const { data, loading, error } = useQuery(shoppingListItemSearch, { fetchPolicy: 'cache-and-network' })
  const toggleStatus = (id, currentStatus) => {
    console.log(id, currentStatus)
    const { data, loading, error } = useMutation(
      shoppingListItemUpdate,
      { variables: { id: id, status: statusEnum[currentStatus] } }
    )

    if (loading) { return(LoadingIndicator) }
    if (error) { return handleError(error) }
    if (data) return(data.shoppingListItemUpdate)
  }

  if (error) { return handleError(error) }
  if (loading) { return LoadingIndicator() }

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          data.shoppingListItemSearch.map((item) => {
            return(
              <ShoppingListItem
                item={item}
                statusToggle={() => { toggleStatus(item.id, item.status)}}
                key={item.id}
              />
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 35,
    paddingTop: 5
  },
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
});


export default Listing
