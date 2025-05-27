import { useState } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastro() { 
  const [nome, setNome]= useState ('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 
  const [senhanov, setSenhanov]= useState ('');

const showAlert = ( message: string) => {
  if (Platform.OS === 'web') {
    window.alert(` ${message}`);
  } else {
    Alert.alert(message);
  }
};
const FazerCadastro = () => {
  if (!nome || !email || !senha || !senhanov) {
    showAlert('Preencha todos os campos');
    return;
  }
  if (senha !== senhanov) {
    showAlert( 'Senha incorreta');
    return;
  }
};
  return (
    <View style={styles.container}>
      <Image
       source={require('../assets/images/logo.png')}
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
      <Text>ou</Text>
       <View style={styles.buttongf}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../assets/images/google.png')}
            style={styles.gf}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.gf} 
          />
        </TouchableOpacity>
        
      </View>
<TouchableOpacity style={styles.button} onPress={FazerCadastro}>
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
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  marginRight:10,

  },
  button: {
    width: '80%',
    marginTop: 14,
    borderRadius: 100,
    backgroundColor:'#0026A1',
   padding: 13,
   marginRight: 12,
  },
textoButton: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'semibold',
  textAlign: 'center',
},
gf:{
   width: 50,
    height:50 ,
    resizeMode: 'contain',
  marginHorizontal: 20,
    
},
buttongf:{
  flexDirection: 'row',
},
});
