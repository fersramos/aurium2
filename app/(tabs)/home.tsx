import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.lateral}>
        <Image
          source={require("../../assets/images/perfil.png")}
          style={styles.perfil}
        />
        <Text style={styles.title}>Bem-vindo de volta!</Text>
      </View>
      <Text style={styles.subtitle}>
        Continue aniquilando seus objetivos 💪
      </Text>
      <View style={styles.boxes}>
        <TouchableOpacity >
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../../assets/images/mod1.png")}
            />
            <Text style={styles.mod1}> Módulo 1</Text>
            <Progress.Bar progress={0.6} width={146} style={styles.progresso} />
            <Text>60% concluído</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box2}>
            <Image
              style={styles.img2}
              source={require("../../assets/images/network.png")}
            />
            <Text style={styles.network}> Buscando network</Text>
            <Progress.Bar progress={0.6} width={146} style={styles.progresso} />
            <Text>60% completo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.box3}>
          <Text style={styles.outros}> Outros módulos</Text>
          <View style={styles.box4}></View>
          <Image
            style={styles.img3}
            source={require("../../assets/images/box4.png")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.missoes}>Missões Diárias</Text>
      <TouchableOpacity>
        <View style={styles.box5}>
          <Text style={styles.textbox}>🎯 Complete duas missões do módulo 1 </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.box6}>
          <Text style={styles.textbox}>
           📚 Estude por 15 minutos
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.box7}>
          <Text style={styles.textbox}>
          🎯 Complete duas missões do "Buscando network"
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "bold",
    marginTop: 45,
  },
  subtitle: {
    fontSize: 14,
    color: "#696969",
    marginTop: -15,
    marginLeft: 60,
  },
  perfil: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginTop: 40,
    marginRight: 15,
  },
  lateral: {
    flexDirection: "row",
  },
  box: {
    backgroundColor: "#EDF4FE",
    padding: 7,
    borderRadius: 20,
    width: 160,
    height: 210,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth: 2,
      alignItems: "center", 
  },
  img: {
    padding: 7,
    width: 130,
    height: 145,
    alignItems: "center",
    marginLeft: "7%",
    marginTop: -20,
  },
  mod1: {
    fontSize: 18,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 10,
  },
  box2: {
    backgroundColor: "#EDF4FE",
    padding: 7,
    borderRadius: 20,
    width: 160,
    height: 210,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    marginLeft: 30,
    alignItems: "center",
  },
  img2: {
    padding: 7,
    width: 130,
    height: 150,
    alignItems: "center",
    marginTop: -20,
    marginLeft: "7%",
  },
  network: {
    fontSize: 15,
  fontWeight: "bold",
  marginTop: 10,
  textAlign: "center",
  },
  boxes: {
     flexDirection: "row",
  justifyContent: "space-between", 
  alignItems: "center",          
  marginTop: 0,
  alignSelf: "center",
  },

  box3: {
    backgroundColor: "#EDF4FE",
    padding: 7,
    borderRadius: 20,
    width: 370,
    height: 79,
    marginTop: 40,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: 'center',
    alignContent: 'center',
    left: 25,
  },
  outros: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progresso: {
    alignSelf: "center",
    marginTop: 10,
  },
  box4: {
    backgroundColor: "#DCEAFD",
    padding: 7,
    borderRadius: 20,
    width: 80,
    height: 79,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    top: 0,
    left: 290,
    alignSelf: 'center',
    position: "absolute",
  },
  img3: {
    width: 70,
    height: 70,
    alignSelf: "flex-end",
    position: "absolute",
    left: 297,
    top: 0,
  },
  missoes: {
    fontSize: 20,
    alignSelf: "flex-start",
    fontWeight: "bold",
    top: 10,
    left: 9,
  },
  box5: {
    backgroundColor: "#FFF9F9",
    padding: 7,
    borderRadius: 20,
    width: 370,
    height: 41,
    marginTop: 40,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    left: 25,
  },
  box6: {
    backgroundColor: "#FFF9F9",
    padding: 7,
    borderRadius: 20,
    width: 370,
    height: 41,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: 'center',
    left: 25,
  },
  box7:{
backgroundColor: "#FFF9F9",
    padding: 7,
    borderRadius: 20,
    width: 370,
    height: 41,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: 'center',
    left: 25,
  },
  textbox:{
 alignSelf: 'center',
  },
  button1:{

  }
});
