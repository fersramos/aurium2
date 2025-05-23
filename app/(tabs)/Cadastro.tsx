import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() { 
  const [nome, setNome]= useState ('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 
  const [senhanov, setSenhanov]= useState ('');
 

  const FazerLogin = () => {
    if (senha === '123456' && senhanov=== senha) {
      Alert.alert('Cadastrado com sucesso!');
    } else {
      Alert.alert('senha incorreta');
    }
  };
   

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Cadastrar</Text>
     
    
     <TextInput
        style={styles.input}
        placeholder="Digite seu nome:"
        value={nome}
        onChangeText={setNome}
        keyboardType= 'default'
        autoCapitalize="words"
      /> 

      <TextInput
        style={styles.input}
        placeholder="Digite seu email:"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha:"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

       <TextInput
        style={styles.input}
        placeholder="Digite sua senha novamente:"
        value={senhanov}
        onChangeText={setSenhanov}
        secureTextEntry
      />


<TouchableOpacity style={styles.button} onPress={FazerLogin}>
  <Text style={styles.textoButton}>Acessar</Text>
</TouchableOpacity>
</View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 3,
  },

  title: {
    fontSize: 40,
    fontWeight:'medium',
    marginTop: -20,
    marginBottom: 30,
    color: '#000000',
  },
  
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: '90%',
    marginTop: 10,
    borderRadius: 100,
    backgroundColor:'#0026A1',
   padding: 15,
  },

textoButton: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'semibold',
  textAlign: 'center',
},
});
