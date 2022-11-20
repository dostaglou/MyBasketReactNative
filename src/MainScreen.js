import { View, Text, StyleSheet, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import { PrivateDataFetch } from './gql/queries/privateData';

export default function MainScreen({navigation}) {
  const { loading, error, data } = useQuery(PrivateDataFetch)

  if (loading) { return(<Text>"loading"</Text>)}
  if (error) { return(<Text>"error"</Text>) }

  return (
    <View style={styles.homeScreen}>
      <Button style={styles.button} title="go to x" onPress={()=> navigation.navigate("Signup")} />
      <Text style={styles.button}>bob {data.privateData}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD5DF',
    color: "#BBECFC"
  },
  text: {
    color: "#BBECFC",
  },
  button: {
    color: "#8BA7B0"
  }
})
