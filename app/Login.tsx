import React, { useState } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const showAlert = ( message: string) => {
    if (Platform.OS === 'web') {
      window.alert(` ${message}`);
    } else {
      Alert.alert(message);
    }
  };
  const FazerLogin = () => {
    if (email=== 'fernanda@gmail.com' && senha=== '123456') {
      showAlert('Login realizado com sucesso!');
      return;
    }
    else  {
      showAlert( 'Senha ou email incorretos');
      return;
    }
   
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style= {styles.subtitle}>Efetue seu login</Text>

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
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 0,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -20,
    color: '#1A4CF0',
  },
   subtitle: {
    fontSize: 15,
    fontWeight: 'semibold',
    color: '#000000',
    marginBottom: 30,
   },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  button: {
    width: '80%',
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
