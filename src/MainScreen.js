import { View, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from './components/logoHeader'
import FooterList from './components/footerList';

const mainScreenView = (buttonArray) => {
  return (
    <View style={{ height: "100%" }}>
      <Header />
      <FooterList style={styles.footer} buttonArray={buttonArray}/>
    </View>
  )
}

export default function MainScreen({navigation}) {
  const [loggedIn, setLoggedIn] = useState(false)
  const fullButtonOptions = {
    loggedIn: [
      { title: "Logout", buttonFunction: () => navigation.navigate("Logout") },
      { title: "Catalogue", buttonFunction: () => navigation.navigate("CatalogueItems") },
      { title: "Shopping Lists", buttonFunction: () => navigation.navigate("Logout") }
    ],
    notLoggedIn: [
      { title: "Signup", buttonFunction: () => navigation.navigate("Signup") },
      { title: "Login", buttonFunction: () => navigation.navigate("Login") }
    ]
  }
  const buttonOptions = (loggedIn) ? fullButtonOptions.loggedIn : fullButtonOptions.notLoggedIn

  const fetchSession = async () => {
    const authToken = await AsyncStorage.getItem('@authToken');
    setLoggedIn(!!authToken)
  }

  useEffect(() => {
    navigation.addListener('focus', () => {fetchSession()})
  }, [navigation])

  return mainScreenView(buttonOptions)
}

const styles = StyleSheet.create({
  button: {
    color: "#8BA7B0",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  }
})
