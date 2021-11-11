import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../utils/colors";
export default function Footer(props) {
  const { calcular } = props;
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.text}> CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: colors.PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: "75%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
