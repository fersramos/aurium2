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
import {useFonts} from 'expo-font';
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

const [fonte1]= useFonts({
'LeagueSpartan':require ('../assets/fonts/leaguespartan/LeagueSpartan-Medium.ttf'),
});

  if (!fonte1) {
    return null;
  }
  const showAlert = (message: string) => {
    if (Platform.OS === "web") {
      window.alert(` ${message}`);
    } else {
      Alert.alert(message);
    }
  };
  const FazerLogin = () => {
    if (email === "fernanda@gmail.com" && senha === "123456") {
      showAlert("Login realizado com sucesso!");
      return;
    } else {
      showAlert("Senha ou email incorretos");
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
          <Text style={{ fontFamily: 'LeagueSpartan', fontSize: 50, fontWeight: "bold",
    marginTop: -10,
    color: "#1A4CF0", }}>
            Bem-vindo!
          </Text>
        </View>
      <Text style={styles.subtitle}>Efetue seu login</Text>
      <p></p>
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
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.esquec}>Esqueceu a senha? </Text>
        <p></p>
      <p></p>
    
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={FazerLogin}>
        <Text style={styles.textoButton}>Acessar</Text>
      </TouchableOpacity>
      <Text style={styles.conta}>
        Não tem uma conta?
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.click}> Clique Aqui!</Text>
        </TouchableOpacity>
      </Text>
      <p></p>
      <Text style={styles.ou}> —————————  ou  ————————— </Text>
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
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 0,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: -60,
    color: "#1A4CF0",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "semibold",
    color: "#000000",
    marginBottom: 30,
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333333",
    marginRight: 10,
  },
  button: {
    width: "80%",
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: "#0026A1",
    padding: 15,
    justifyContent: 'center',
  },

  textoButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
  },
  gf: {
    marginHorizontal: 20,
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
  click: {
    color: "#0026A1",
    fontSize: 15,
  },
  esquec: {
    color: "#0026A1",
    fontSize: 12,
    marginBottom: 30,
    marginTop: -15,
    marginLeft:200,
  },
  ou: {
    color: "#030303",
  },
  conta:{
    fontSize: 15,
  },
  
});
