import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Resultado from "./src/components/Resultado";

export default function App() {
  const [Capital, setCapital] = useState(null);
  const [Interes, setInteres] = useState(null);
  const [Meses, setMeses] = useState(null);
  const [Total, setTotal] = useState(null);
  const [ErrorMsg, setErrorMsg] = useState("");
  const calcular = () => {
    reset();
    if (!Capital) {
      setErrorMsg("Añade la cantidad que quieres solicitar");
    } else if (!Interes) {
      setErrorMsg("Añade el interes del prestamos");
    } else if (!Meses) {
      setErrorMsg("Seleccióna los meses a pagar");
    } else {
      const i = Interes / 100;
      const fee = Capital / ((1 - Math.pow(i + 1, -Meses)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace(".", ","),
        totalPayable: (fee * Meses).toFixed(2).replace(".", ","),
      });
    }
  };

  const reset = () => {
    setErrorMsg("");
    setTotal(null);
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.PRIMARY_COLOR}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>COTIZA TU PRESTAMO 🤑!</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>

      <Resultado
        ErrorMsg={ErrorMsg}
        Capital={Capital}
        Interes={Interes}
        Meses={Meses}
        Total={Total}
      />

      <Footer calcular={calcular} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,

    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
