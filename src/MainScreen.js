import { View, Text, StyleSheet, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import { PrivateDataFetch } from './gql/queries/privateData';

export default function MainScreen({navigation}) {
  return (
    <View style={styles.homeScreen}>
      <Button style={styles.button} title="Signup" onPress={()=> navigation.navigate("Signup")} />
      <Button style={styles.button} title="Login" onPress={()=> navigation.navigate("Login")} />
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
