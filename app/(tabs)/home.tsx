import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        <TouchableOpacity>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../../assets/images/mod1.png")}
            />
            <Text style={styles.mod1}> Módulo 1</Text>
            <View style= {styles.porcentagem}>
               
            </View>
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
            <View style={styles.porcentagem2}>
            </View>
            <Text>60% completo</Text>
          </View>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
            <View style= {styles.box3}>
                <Text style= {styles.outros}> Outros módulos</Text>
            </View>
          </TouchableOpacity>
      
      <View> 
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
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
    padding: 5,
    borderRadius: 20,
    width: 160,
    height: 210,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth:2,
    marginLeft: 20,
  },
  img: {
    padding: 2,
    width: 130,
    height: 150,
    alignItems: "center",
    marginLeft: '7%',
    marginTop: -30,
  },
  mod1: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -15,
    alignItems: "center",
    marginLeft: 24,
  },
  box2: {
    backgroundColor: "#EDF4FE",
    padding: 5,
    borderRadius: 20,
    width: 160,
    height: 210,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    marginLeft: 30,
  },
  img2: {
    padding: 2,
    width: 130,
    height: 150,
    alignItems: "center",
    marginTop: -20,
    marginLeft: '7%',
  },
  network: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: -15,
    alignItems: "center",
    marginLeft: '3%',
  },
  boxes: {
   flexDirection: 'row',
  justifyContent: 'space-between',
  width: '90%', 
  marginTop: 20,

  },
  porcentagem: {
       height: 8,
    backgroundColor: '#007AFF', 
    borderRadius: 10,
    marginTop: 9,
    

  },
   porcentagem2: {
   height: 8,
    backgroundColor: '#007AFF', 
    borderRadius: 10,
    marginTop: 9,
   },
   box3:{
backgroundColor: "#EDF4FE",
    padding: 7,
    borderRadius: 20,
    width: 343,
    height: 79,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth: 2,
   alignSelf: 'center',
   },
   outros:{
fontSize: 20,
fontWeight: 'bold',
alignSelf: 'center',
   },
})
