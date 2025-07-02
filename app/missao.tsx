import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

type Answer = {
  id: number;
  text: string;
};

type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.error(err));
  }, []);
 
  return (
    <View style={styles.container}>
    <div>
      {questions.map((q, idx) => (
        <div key={q.id}>
          <h3>{idx + 1}. {q.text}</h3>
          <ul>
            {q.answers.map(a => (
              <li key={a.id}>{a.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <Text style={styles.title}> Missão </Text>
    <Text style={styles.pergunta}> Pergunta </Text>
    <View style={styles.boxes}>
    <TouchableOpacity>
    <View style={styles.box1}>
    <Text style={styles.resposta1}>
        Resposta 1
    </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.box2}>
        <Text style={styles.resposta2}>
            Resposta 2
        </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.box3}>
<Text style={styles.resposta3}>
Resposta 3
</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.box4}>
<Text style={styles.resposta4}>
    Resposta 4
</Text>
    </View>
    </TouchableOpacity>
   <TouchableOpacity>
    <View style={styles.button}>
        <Text style={styles.textbutton}>
            Confirmar
        </Text>
    </View>
   </TouchableOpacity>
   </View>
   </View>
  );
}

const styles = StyleSheet.create ({
    container:{
padding: 8,
flex:1,
backgroundColor: "#fff",
    alignItems: "center",
    },
    title:{
fontSize: 40,
fontWeight: 'bold',
    },
    pergunta:{
fontSize: 20,
fontWeight: 'bold',
top:10,
    },
    boxes:{
top: 80,
    },
    box1:{
backgroundColor: '#C2DCFF',
width: 327,
height: 60,
borderColor: "#D9D9D9",
borderRadius: 10,
alignSelf: 'center',
top: 10,
    },
    resposta1:{
        fontSize: 20,    
 textAlign:'center'
    },
    box2:{
backgroundColor: '#C2DCFF',
width: 327,
height: 60,
borderColor: "#D9D9D9",
borderRadius: 10,
alignSelf: 'center',
top:20,
    },
    resposta2:{
 fontSize: 20,
 textAlign:'center'
    },
    box3:{
backgroundColor: '#C2DCFF',
width: 327,
height: 60,
borderColor: "#D9D9D9",
borderRadius: 10,
alignSelf: 'center',
top:30,
    },
    resposta3:{
 fontSize: 20,
  textAlign:'center'
    },
    box4:{
backgroundColor: '#C2DCFF',
width: 327,
height: 60,
borderColor: "#D9D9D9",
borderRadius: 10,
alignSelf: 'center',
top:40,
    },
    resposta4:{
 fontSize: 20,
  textAlign:'center'
    },
   button:{
backgroundColor: '#3088FF',
width: 150,
height: 50,
borderColor: "#D9D9D9",
borderRadius: 10,
alignSelf: 'center',
top: 90,
   },
   textbutton:{
fontSize: 20,
  textAlign:'center'
   },
});
