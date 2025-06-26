import { Image, StyleSheet, Text, TouchableOpacity, View,Animated } from "react-native";
import {useRef, useState} from 'react';
import React from 'react';
const Box= ({id, ativoId, setAtivoId, textofechado, textoaberto})=> {
      const boxAnimado = useRef (new Animated.Value (41)).current;
      const expandido = id ===ativoId;
      React.useEffect(()=>{
              Animated.timing (boxAnimado, {
                toValue: expandido? 80:40,
                duration:300,
                useNativeDriver: false, }).start ();
            }, [expandido]);
        return(
              <TouchableOpacity onPress={()=> setAtivoId (expandido? null:id)}>
                <Animated.View style={[styles.box1, {height:boxAnimado}]}>
                  <Text style={styles.text1}>
                  {expandido ? textoaberto : textofechado} 
                  </Text>
                </Animated.View>
              </TouchableOpacity>
            )}
export default function Premios() {
const [ativoId, setAtivoId]= useState (null);

 const boxes= [1,2,3];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conquistas</Text>
      <View style={styles.boxes}>
        <TouchableOpacity>
          <View style={styles.box1}>
            <View style={styles.box12}>
              <Image
                style={styles.img1}
                source={require("../../assets/images/premios1.png")}
              />
            </View>
            <Text style={styles.text1}> MESTRE DOS NEGÓCIOS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box2}>
            <View style={styles.box21}>
              <Image
                style={styles.img2}
                source={require("../../assets/images/premios2.png")}
              />
            </View>
            <Text style={styles.text2}> ESPECIALISTA EM GESTÃO</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.boxes2}>
        <TouchableOpacity>
          <View style={styles.box3}>
            <View style={styles.box31}>
              <Image
                style={styles.img3}
                source={require("../../assets/images/premios3.png")}
              />
            </View>
            <Text style={styles.text3}> LUCRO EM DOBRO</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box4}>
            <View style={styles.box41}>
              <Image
                style={styles.img4}
                source={require("../../assets/images/premios4.png")}
              />
            </View>
            <Text style={styles.text4}> GÊNIO DO MARKETING</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title2}> Ranking </Text>
      <View style={styles.box5}>
        <View style={styles.boxes}>
          <Image
            style={styles.trofeu1}
            source={require("../../assets/images/trofeu1.png")}
          />
          <Image
            style={styles.trofeu2}
            source={require("../../assets/images/trofeu2.png")}
          />
          <Image
            style={styles.trofeu3}
            source={require("../../assets/images/trofeu3.png")}
          />
          <Image
            style={styles.trofeu3}
            source={require("../../assets/images/trofeu3.png")}
          />
          <Image
            style={styles.trofeu3}
            source={require("../../assets/images/trofeu3.png")}
          />
          <Image
            style={styles.trofeu3}
            source={require("../../assets/images/trofeu3.png")}
          />
        </View>
      </View>

      <View style={styles.box6}>
        <View style={styles.boxes}>
          <Text style={styles.text5}> 1º </Text>
          <Image
            style={styles.img5}
            source={require("../../assets/images/perfilpre.png")}
          />
          <Text style={styles.nome1}> Luan Andrade da Silva</Text>
          <Text style={styles.text6}> 300 Pts</Text>
        </View>
      </View>
      <View style={styles.box7}>
        <View style={styles.boxes}>
          <Text style={styles.text5}> 2º </Text>
          <Image
            style={styles.img5}
            source={require("../../assets/images/perfilpre.png")}
          />
          <Text style={styles.nome2}> Kauã Santos Almeida</Text>
          <Text style={styles.text7}> 289 Pts</Text>
        </View>
      </View>
      <View style={styles.box8}>
        <View style={styles.boxes}>
          <Text style={styles.text5}> 3º </Text>
          <Image
            style={styles.img5}
            source={require("../../assets/images/perfilpre.png")}
          />
          <Text style={styles.nome3}> Yuri Alberto Cardoso</Text>
          <Text style={styles.text8}> 258 Pts</Text>
        </View>
      </View>
      <View style={styles.box9}>
        <View style={styles.boxes}>
          <Text style={styles.text5}> 4º </Text>
          <Image
            style={styles.img5}
            source={require("../../assets/images/perfilpre.png")}
          />
          <Text style={styles.nome4}> Fernanda Lima Campos</Text>
          <Text style={styles.text9}> 250 Pts</Text>
        </View>
      </View>
      <View style={styles.box10}>
        <View style={styles.boxes}>
          <Text style={styles.text5}> 5º </Text>
          <Image
            style={styles.img5}
            source={require("../../assets/images/perfilpre.png")}
          />
          <Text style={styles.nome5}> Bruna Almeida Marquezine</Text>
          <Text style={styles.text10}> 200 Pts</Text>
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
    padding: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
  boxes: {
    flexDirection: "row",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    right: 8,
  },
  img1: {
    width: 124,
    height: 92,
    alignSelf: "center",
  },
  box12: {
    backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  box2: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    left: 8,
  },
  box21: {
    backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  img2: {
    width: 124,
    height: 92,
    alignSelf: "center",
  },
  text2: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  boxes2: {
    flexDirection: "row",
    alignItems: "center",
  },
  box3: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    right: 8,
  },
  text3: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  img3: {
    width: 124,
    height: 92,
    alignSelf: "center",
  },
  box31: {
    backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  box4: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    left: 8,
  },
  text4: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  img4: {
    width: 124,
    height: 92,
    alignSelf: "center",
  },
  box41: {
    backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  title2: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    top: 10,
  },

  box5: {
    backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 15,
    width: 409,
    height: 60,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    top: 20,
  },
  trofeu1: {
    width: 60,
    height: 65,
    left: 10,
    top: -7,
  },
  trofeu2: {
    width: 60,
    height: 65,
    left: 10,
    top: -7,
  },
  trofeu3: {
    width: 60,
    height: 65,
    left: 10,
    top: -7,
  },
  text5: {
    fontWeight: "bold",
    fontSize: 17,
  },
  box6: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderRadius: 2,
    width: 409,
    height: 30,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    top: 25,
  },
  box7: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderRadius: 2,
    width: 409,
    height: 30,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    top: 30,
  },
  box8: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderRadius: 2,
    width: 409,
    height: 30,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    top: 35,
  },
  box9: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderRadius: 2,
    width: 409,
    height: 30,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    top: 40,
  },
  box10: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderRadius: 2,
    width: 409,
    height: 30,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    top: 45,
  },
  img5: {
    width: 19,
    height: 19,
    left: 5,
  },
  text6: {
    fontSize: 15,
    color: "#4CAF50",
    left: 150,
  },
  text7: {
    fontSize: 15,
    color: "#4CAF50",
    left: 155,
  },
  text8: {
    fontSize: 15,
    color: "#4CAF50",
    left: 155,
  },
  text9: {
    fontSize: 15,
    color: "#4CAF50",
    left: 139,
  },
  text10: {
    fontSize: 15,
    color: "#4CAF50",
    left: 115,
  },
  nome1: {
    fontSize: 15,
    left: 3,
  },
  nome2: {
    fontSize: 15,
    left: 3,
  },
  nome3: {
    fontSize: 15,
    left: 3,
  },
  nome4: {
    fontSize: 15,
    left: 3,
  },
  nome5: {
    fontSize: 15,
    left: 3,
  },
});
