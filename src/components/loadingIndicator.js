import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const LoadingIndicator = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" />
    {/* <Text>Loading</Text> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default LoadingIndicator;
