import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import * as Progress from "react-native-progress";
export default function modulos() {
  const [pesquisar, setPesquisar] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.pesquisa}
        value={pesquisar}
        onChangeText={setPesquisar}
        keyboardType="default"
        autoCapitalize="words"
      />
      <View style={styles.box1}>
        <Text style={styles.text}> Progresso</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.box2}>
          <Text style={styles.text2}> Módulo 1</Text>
          <Image
            style={styles.box21}
            source={require("../../assets/images/boxmod.png")}
          />
          <Progress.Bar progress={0.5} width={146} style={styles.progress1} />
          <Text> 50% concluído</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  pesquisa: {
    width: 321,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#333333",
    alignSelf: "center",
    justifyContent: "center",
    top: 40,
    marginTop: 40,
  },
  box1: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 10,
    width: 111,
    height: 20,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    top: -10,
  },
  box2: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 10,
    width: 302,
    height: 107,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  text2: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  box21: {
    backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 10,
    width: 100,
    height: 95,
    marginTop: -20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "flex-start",
    justifyContent: 'flex-end',
  },
  progress1: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
});
