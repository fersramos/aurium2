import { Image, StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native";
export default function perfil() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.boxes}>
          <View>
            <Text style={styles.nome}> Marta Fernandes </Text>
            <Text style={styles.text}> Empresa:</Text>
            <Text style={styles.nome}> Marta's hair</Text>
            <Text style={styles.text}> Idade:</Text>
            <Text style={styles.nome}> 23 anos </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.perfil}
              source={require("../../assets/images/perfil.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.box2}>
          <Text style={styles.text2}>50%</Text>
          <Text style={styles.text3}>MÓDULOS COMPLETOS </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text2}>50%</Text>
          <Text style={styles.text3}>CONQUISTAS </Text>
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.box4}>
          <Text style={styles.text2}>5º</Text>
          <Text style={styles.text3}>ESTRATEGISTA MESTRE </Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text2}>150</Text>
          <Text style={styles.text3}>DIAS NO AURIUM </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 8,
  },
  box1: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 15,
    width: 324,
    height: 188,
    marginTop: 40,
    borderColor: "#D9D9D9",
    borderWidth: 2,
  },
  perfil: {
    width: 155,
    height: 155,
    borderRadius: 80,
    left: 30,
  },
  boxes: {
    flexDirection: "row",
  },
  nome: {
    fontSize: 15,
    top: 10,
  },
  empresa: {},
  text: {
    fontSize: 15,
    top: 10,
    fontWeight: "bold",
  },
  box2: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 15,
    width: 155.4,
    height: 167,
    marginTop: 40,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    right: 5,
  },
  box3: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 15,
    width: 155.4,
    height: 167,
    marginTop: 40,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    left: 5,
  },
  box4: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 15,
    width: 155.4,
    height: 167,
    marginTop: 40,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    right: 5,
  },
  box5: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 15,
    width: 155.4,
    height: 167,
    marginTop: 40,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    left: 5,
  },
  text2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
  },
  text3: {
    textAlign: "center",
    fontWeight: "semibold",
    fontSize: 20,
  },
});
