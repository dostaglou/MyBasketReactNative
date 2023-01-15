import { View, StyleSheet, Button } from 'react-native';

const buttonView = (buttonTitle, buttonFunction) => {
  return(
    <View key={buttonTitle} style={styles.button}>
      <Button title={buttonTitle} onPress={buttonFunction} />
    </View>
  )
}
const FooterList = (data) => {
  return(
    <View style={styles.buttonRow}>
      { data.buttonArray.map((data) => {
        return buttonView(data.title, data.buttonFunction)
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0
  },
  button: {
    flex: 1,
  }
})

export default FooterList
