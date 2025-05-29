
import { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from 'expo-font';

 
export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhanov, setSenhanov] =useState("");
 const [fonte] = useFonts ({
    'LeagueSpartan': require('../assets/fonts/leaguespartan/LeagueSpartan-Medium.ttf'),
  });

  if (!fonte) {
    return null;
  }
  const showAlert = (message: string) => {
    if (Platform.OS === "web") {
      window.alert(` ${message}`);
    } else {
      Alert.alert(message);
    }
  };
  const FazerCadastro = () => {
    if (!nome || !email || !senha || !senhanov) {
      showAlert("Preencha todos os campos");
      return;
    }
    if (senha !== senhanov) {
      showAlert("Senha incorreta");
      return;
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
    
       <View style={ styles.title}>
      <Text style={{ fontFamily: 'LeagueSpartan', fontSize: 50 }}>
        Cadastrar
      </Text>
    </View>
  

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome:"
        value={nome}
        onChangeText={setNome}
        keyboardType="default"
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
      <Text style={styles.ou}>————————— ou —————————</Text>
      <View style={styles.buttongf}>
        <TouchableOpacity style={styles.gf} onPress={() => {}}>
          <Image
            source={require("../assets/images/google.png")}
            style={styles.gicon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.gf} onPress={() => {}}>
          <Image
            source={require("../assets/images/facebook.png")}
            style={styles.ficon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={FazerCadastro}>
        <Text style={styles.textoButton}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    marginBottom: 3,
    marginTop: 9,
  },

  title: {
    
    fontWeight: "medium",
    marginTop: -10,
    marginBottom: 30,
    color: "#000000",
    
   
  },

  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    marginTop: 40,
    borderRadius: 100,
    backgroundColor: "#0026A1",
    padding: 13,
    marginRight: 12,
    alignContent: 'center',
  },
  textoButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
  },
  gf: {
    marginHorizontal: 30,
  },
  gicon: {
    width: 65,
    height: 65,
  },
  ficon: {
    width: 73,
    height: 73,
  },
  buttongf: {
    flexDirection: "row",
  },
  ou: {
    color: "#030303",
    marginTop: 50,
  },
});
