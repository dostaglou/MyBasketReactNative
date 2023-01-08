import { View, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const loggedInView = (navigation) => {
  return (
    <View style={styles.homeScreen}>
      <Button style={styles.button} title="Logout" onPress={()=> navigation.navigate("Logout")} />
      <Button style={styles.button} title="Cataglog Items" onPress={()=> navigation.navigate("CatalogueItems")} />
      <Button style={styles.button} title="Shopping Lists" onPress={()=> navigation.navigate("ShoppingLists")} />
    </View>
  )
}

const loggedOutView = (navigation) => {
  return (
    <View style={styles.homeScreen}>
      <Button style={styles.button} title="Signup" onPress={()=> navigation.navigate("Signup")} />
      <Button style={styles.button} title="Login" onPress={()=> navigation.navigate("Login")} />
    </View>
  )
}

export default function MainScreen({navigation}) {
  const [loggedIn, setLoggedIn] = useState(false)

  const fetchSession = async () => {
    const authToken = await AsyncStorage.getItem('@authToken');
    setLoggedIn(!!authToken)
  }

  useEffect(() => {
    navigation.addListener('focus', () => {fetchSession()})
  }, [navigation])

  console.log(loggedIn)

  if (loggedIn) {
    return loggedInView(navigation)
  } else {
    return loggedOutView(navigation)
  }
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
