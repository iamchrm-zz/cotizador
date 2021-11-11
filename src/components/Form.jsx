import React, { useState, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";
import { Dropdown } from "react-native-element-dropdown";

export default function Form(props) {
  const { setCapital, setInteres, setMeses, Meses } = props;
  const [dropdown, setDropdown] = useState(null);
  const data = [
    { value: "3", label: "3 meses" },
    { value: "6", label: "6 meses" },
    { value: "12", label: "12 meses" },
    { value: "24", label: "24 meses" },
  ];
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad"
          placeholderTextColor={colors.PRIMARY_COLOR_DARK}
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          placeholderTextColor={colors.PRIMARY_COLOR_DARK}
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInteres(e.nativeEvent.text)}
        />
      </View>
      <Dropdown
        style={styles.selectItem}
        data={data}
        search
        searchPlaceholder="Buscar"
        labelField="label"
        valueField="value"
        placeholder="Cuotas"
        placeholderStyle={{
          fontWeight: "bold",
          color: colors.PRIMARY_COLOR_DARK,
          marginLeft: 20,
        }}
        value={Meses}
        autoScroll={false}
        onChange={(item) => {
          setMeses(item.value);
          console.log("selected", item);
        }}
      />
      <View style={styles.selector}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectItem: {
    backgroundColor: "#fff",
    borderRadius: 24,
  },
  selector: {
    flex: 1,
  },
  viewForm: {
    position: "absolute",
    marginTop: "25%",
    padding: 20,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    justifyContent: "center",
    shadowColor: "#000", //add shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5.62,

    elevation: 9,
  },
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 20,
    width: "50%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#080808",
    paddingHorizontal: 20,
  },

  inputPercentage: {
    width: "50%",
    marginLeft: 5,
  },
});

const picketStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    color: "#000",
    backgroundColor: "#fff",
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    borderRadius: 25,
  },
});
