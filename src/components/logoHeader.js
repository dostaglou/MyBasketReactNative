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
    backgroundColor: 'beige',
    height: 150,
    alignItems: 'center'
  },
  headerLogoCircle: {
    backgroundColor: 'red',
    borderRadius: 150/2,
    width: 150,
    height: 150,
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'transparent',
    backgroundColor: 'beige'
  }
})

export default Header;
