import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return(
    <View style={styles.headerBox} >
      <View style={styles.headerLogoCircle}>
        <Text style={styles.headerText}>My Basket</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: 'transparent',
    height: 100,
    alignItems: 'center'
  },
  headerLogoCircle: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'lavenderblush'
  }
})

export default Header;
