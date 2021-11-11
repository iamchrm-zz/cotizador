import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

export default function Resultado(props) {
  const { Capital, Interes, Meses, Total, ErrorMsg } = props;
  return (
    <View style={styles.colorFondo}>
      {Total && (
        <View style={styles.boxResultado}>
          <Text style={styles.title}> RESUMEN</Text>
          <DataResult title="Cantidad solicitada: " value={`${Capital} $`} />
          <DataResult title="Interes %: " value={`${Interes} %`} />
          <DataResult title="Meses: " value={`${Meses} meses `} />
          <DataResult
            title="Total a pagar: "
            value={`${Total.monthlyFee} 💰`}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}>{ErrorMsg}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const { title, value } = props;
  return (
    <View style={styles.value}>
      <Text>{title} </Text>
      <Text>{value} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  boxResultado: {
    fontSize: 40,
    backgroundColor: "#f00",
  },
  error: {
    textAlign: "center",
    color: "#26262",
    fontSize: 20,
    fontWeight: "bold",
  },
  boxResultado: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
