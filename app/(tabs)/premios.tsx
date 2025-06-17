import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conquistas</Text>
      <View style={styles.boxes}>
      <TouchableOpacity>
      <View style={styles.box1}>
        <View style={styles.box12}>
      <Image 
      style={styles.img1}
      source={require('../../assets/images/premios1.png')}/>
   </View>
   <Text style={styles.text1}> MESTRE DOS NEGÓCIOS</Text>
      </View>
      </TouchableOpacity>
       <TouchableOpacity>
      <View style={styles.box2}>
        <View style={styles.box21}>
      <Image 
      style={styles.img2}
      source={require('../../assets/images/premios2.png')}/>
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
      source={require('../../assets/images/premios3.png')}/>
   </View>
   <Text style={styles.text3}> LUCRO EM DOBRO</Text>
      </View>
      </TouchableOpacity>
       <TouchableOpacity>
      <View style={styles.box4}>
        <View style={styles.box41}>
      <Image 
      style={styles.img4}
      source={require('../../assets/images/premios4.png')}/>
   </View>
   <Text style={styles.text4}> GÊNIO DO MARKETING</Text>
      </View>
      </TouchableOpacity>
      </View>
      <Text style={styles.title2}> Ranking </Text>
      <View style={styles.box5}>
      <View style={styles.boxes}>
<Image
source={require('../../assets/images/trofeu1.png')}/>
<Image
source={require('../../assets/images/trofeu2.png')}/>
<Image source={require('../../assets/images/trofeu3.png')}/>

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
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
  boxes:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1:{
     backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    right:8,
  },
  img1:{
width:124,
height:92,
alignSelf:'center',
  },
  box12:{
     backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf:'center',
  },
  text1:{
    fontWeight:'bold',
    fontSize:15,
    textAlign: 'center',
  },
  box2:{
 backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
    marginTop: 50,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    left:8, 
  },
  box21:{
 backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf:'center',
  },
  img2:{
width:124,
height:92,
alignSelf:'center',
  },
  text2:{
 fontWeight:'bold',
    fontSize:15,
    textAlign: 'center',
  },
  boxes2:{
flexDirection: 'row',
    alignItems: 'center',
  },
  box3:{
  backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
    marginTop: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    right:8,
  },
   text3:{
     fontWeight:'bold',
    fontSize:15,
    textAlign: 'center',
  },
  img3:{
width:124,
height:92,
alignSelf:'center',
  },
  box31:{
backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf:'center',
  },
  box4:{
 backgroundColor: "#FFFFFF",
    padding: 7,
    borderRadius: 20,
    width: 164,
    height: 187,
marginTop:20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    left:8, 
  },
 text4:{
fontWeight:'bold',
    fontSize:15,
    textAlign: 'center',
 },
 img4:{
width:124,
height:92,
alignSelf:'center',
 },
 box41:{
backgroundColor: "#C2DCFF",
    padding: 7,
    borderRadius: 20,
    width: 137,
    height: 118,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignSelf:'center',
 },
 title2:{
fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    top:24,
 },
 
 box5:{

 },
});
