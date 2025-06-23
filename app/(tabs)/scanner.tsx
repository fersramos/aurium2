import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from 'react';
export default function Scanner () {
  const [flash, setFlash]= useState< 'off'|'auto'|'on'>('off');
const Flash= ()=>{
 if(flash==='off'){
  setFlash ('auto');
 } else if (flash ==='auto'){
  setFlash ('on');
 } else {
  setFlash ('off');
 }
};
const flashIcon=()=>{
  if(flash==='on'){
    return require('../../assets/images/flashon.png');
  }else if (flash==='auto'){
    return require('../../assets/images/flasha.png');
  }else {
    return require('../../assets/images/flash.png');
  }
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}> SCANNER DE DOCUMENTO</Text>
      <Text style={styles.text}> Leia um código QR ou um documento físico</Text>
     
      <View style={styles.box1}>
         <View style={styles.images}>
      <TouchableOpacity onPress={Flash}>
     <Image source={flashIcon()} 
     style={styles.img2}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
         style={styles.img3}
         source={require('../../assets/images/galeria.png')}/>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title:{
   fontWeight: 'bold',
   fontSize: 24,
   top: 40,
  },
  text:{
fontWeight: 'semibold',
fontSize: 15,
top: 45,
backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 1,
    width: 307,
    height: 49,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
   
  },
  img: {
    width: 312,
    height:283,
    top:150,
    alignSelf:'center'
  },
  box1:{
backgroundColor: "#E9E9E9",
    padding: 0,
    borderRadius: 1,
    width: 409,
    height: 77,
    marginTop: 600,
    borderColor: "#D9D9D9",
    borderWidth: 2,
   alignSelf:'center'
  },
  img2:{
width: 40,
height: 40,
right: 120,
top: 15,
  },
  img3:{
width: 40,
height: 40, 
left:120,
top: 15,
  },
  images:{
flexDirection: 'row',
alignSelf: 'center',
  },
});
