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
import { useRouter } from "expo-router";
export default function modulos() {
  const [pesquisar, setPesquisar] = useState("");
   const router = useRouter ();
    const modulo1 =() =>{
      router.push ('/mod1');
      return;
      
    }
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
      <TouchableOpacity onPress={modulo1}>
        <View style={styles.box2}>
          <Text style={styles.text2}> Módulo 1</Text>
          <Image
            style={styles.box21}
            source={require("../../assets/images/boxmod.png")}
          />
          <Progress.Bar progress={0.5} width={146} style={styles.progress1}/>
          <Text style={styles.porcento}> 50% </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.box3}>
          <Text style={styles.text2}> Módulo 2</Text>
          <Image
          style={styles.box31}
          source={require('../../assets/images/boxmod2.png')}
          />
          <Progress.Bar progress={0.3} width={146} style={styles.progress2}/>
          <Text style={styles.porcento2}> 30%</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.box4}>
          <Text style={styles.text2}>Módulo 3</Text>
          <Image 
          style={styles.box41}
          source={require('../../assets/images/boxmod3.png')}/>
          <Progress.Bar progress={0.3} width={146} style={styles.progress3}/>
          <Text style= {styles.porcento3}> 30% </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.box5}>
          <Text style={styles.text2}>Módulo 4 </Text>
          <Image
          style={styles.box51}
          source={require('../../assets/images/boxmod4.png')}/>
          <Progress.Bar progress={0.2} width={146} style={styles.progress4}/>
          <Text style={styles.porcento4}>20%</Text>
        </View>
      </TouchableOpacity>  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding:7,
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#FFFFFF",
  },
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
    width: 340,
    height: 120,
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
    alignSelf: "center",
    marginTop: -40,
    left: 40,
  },
  porcento:{
    alignSelf: 'flex-end',
    marginTop: -15,
    left: 8,
  },
  box3:{
backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 10,
    width: 340,
    height: 120,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  progress2:{
 alignSelf: "center",
    marginTop: -40,
    left: 40,
  },
  porcento2:{
 alignSelf: 'flex-end',
    marginTop: -15,
    left: 5,
  },
  box31:{
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
  box4:{
backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 10,
    width: 340,
    height: 120,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  box41:{
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
  progress3:{
 alignSelf: "center",
    marginTop: -40,
    left: 40,
  },
  porcento3:{
alignSelf: 'flex-end',
    marginTop: -15,
    left: 5,
  },
  box5:{
backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 10,
    width: 340,
    height: 120,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf: "center",
  },
  box51:{
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
  progress4:{
alignSelf: "center",
    marginTop: -40,
    left: 40,
  },
  porcento4:{
alignSelf: 'flex-end',
    marginTop: -15,
    left: 5,
  },
});
