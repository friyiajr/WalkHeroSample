import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const Profile = () => {
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <View style={styles.profileRow}>
        <Text style={styles.labelFont}>NAME:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.profileRow}>
        <Text style={styles.labelFont}>AGE:</Text>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  labelFont: {
    fontWeight: "bold",
    fontSize: 30,
    width: 100,
  },
  textInput: {
    borderBottomWidth: 1,
    fontSize: 30,
    width: 200,
  },
});
