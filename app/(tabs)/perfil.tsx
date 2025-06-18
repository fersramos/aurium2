import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.boxes}>
          <View>
            <Text> Marta Fernandes </Text>
            <Text> Empresa:</Text>
            <Text> Marta's hair</Text>
            <Text> Idade:</Text>
            <Text> 23 anos </Text>
          </View>
          <TouchableOpacity>
          <Image
            style={styles.perfil}
            source={require("../../assets/images/perfil.png")}
          />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 8,
  },
  box1: {},
   perfil: {
    width: 155,
    height: 155,
    borderRadius: 80,
  },
  boxes: {
    flexDirection: "row",
  },
});
