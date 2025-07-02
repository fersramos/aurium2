import React from 'react';
import { Image, ScrollView ,StyleSheet, Text, TouchableOpacity,Animated, View } from "react-native";
import * as Progress from "react-native-progress";
import {useRef, useState} from 'react';
import { useRouter } from "expo-router";
type BoxProps = {
  id: number;
  ativoId: number | null;
  setAtivoId:  (id: number | null) => void;
  textofechado: string;
  textoaberto: string;
};
 const Box= ({id, ativoId, setAtivoId, textofechado, textoaberto}:BoxProps)=> {
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
          <Animated.View style={[styles.box5, {height:boxAnimado}]}>
            <Text style={styles.textbox}>
            {expandido ? textoaberto : textofechado} 
            </Text>
          </Animated.View>
        </TouchableOpacity>
      )}
export default function Home() {
  const router = useRouter();
  const Mod1 = () => {
    router.push("/(tabs)/modulos");
    return;
     };
    const Modulo1 = ()=>{
router.push("/mod1");
return;
    };
 const [ativoId, setAtivoId]= useState<number | null>(null);

 const boxes= [1,2,3];
  return (
    <ScrollView >
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
      <View>
        <TouchableOpacity onPress={Modulo1}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../../assets/images/mod1.png")}
            />
            <Text style={styles.mod1}> COMPLETAR MÓDULO 1</Text>
            <View style={styles.lateral}>
            <Progress.Bar progress={0.6} width={280} style={styles.progresso} />
            <Text style={styles.porcento}>60%</Text>
            </View>
          </View>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity onPress={Mod1}>
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
      <Box
      id={1}
      ativoId={ativoId}
      setAtivoId={setAtivoId}
      textofechado='🎯 Complete duas missões do módulo 1'
      textoaberto= 'Complete mais 2 missões do módulo 1 pra conseguir 23xp'/>
      <Box
       id={2}
      ativoId={ativoId}
      setAtivoId={setAtivoId}
      textofechado='📚 Estude por 15 minutos'
      textoaberto= 'Estude por 15 minutos e consiga mais 17xp'/>
      <Box  id={3}
      ativoId={ativoId}
      setAtivoId={setAtivoId}
      textofechado='🎯 Fique entre os top 3 no ranking '
      textoaberto= 'Fique entre os top 3 do ranking e consiga 3 vidas recarregadas '/>
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
    width: 370,
    height: 210,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth: 2,
   alignSelf: 'center',
  },
  img: {
    padding: 7,
    width: 200,
    height: 150,
    alignSelf:'center',
    marginLeft: "7%",
    marginTop: -20,
  },
  mod1: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
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
    alignSelf: "center",
    
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
    left: 289,
    alignSelf: "center",
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
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
    
  },
  textbox: {
    alignSelf: "center",
    fontSize: 18,
  },
  button1: {},
  click: {},
  porcento:{
textAlign: 'right',
marginTop: 10,
left: 2,
  },
});
