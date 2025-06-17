import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function modulo1() {
  const router = useRouter();
  const Mod1 = () => {
    router.push("/(tabs)/modulos");
    return;
  };
  return (
    <View style={styles.container}>
      <View style={styles.seila}>
        <Image
          style={styles.heart}
          source={require("../assets/images/heart.png")}
        />
        <Text style={styles.vida}>3</Text>
      </View>
      <TouchableOpacity onPress={Mod1}>
        <View style={styles.box1}>
          <Text style={styles.mods}> Outros módulos</Text>
          <View style={styles.box2}></View>
          <Image
            style={styles.img1}
            source={require("../assets/images/box4.png")}
          />
        </View>
      </TouchableOpacity>
      <View>
        <Image
          style={styles.linha}
          source={require("../assets/images/linha.png")}
        />
      </View>

      <TouchableOpacity>
        <View>
          <Image
            style={styles.circle1}
            source={require("../assets/images/circle.png")}
          />
          <Image
            style={styles.sifrao1}
            source={require("../assets/images/sifrao.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Image
            style={styles.circle2}
            source={require("../assets/images/circle.png")}
          />
          <Image
            style={styles.sifrao2}
            source={require("../assets/images/sifrao.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Image
            style={styles.circle3}
            source={require("../assets/images/circle.png")}
          />
          <Image
            style={styles.sifrao3}
            source={require("../assets/images/sifrao.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Image
            style={styles.circle4}
            source={require("../assets/images/circle.png")}
          />
          <Image
            style={styles.sifrao4}
            source={require("../assets/images/sifrao.png")}
          />
        </View>
      </TouchableOpacity>

      <View>
        <TouchableOpacity>
          <Image
            style={styles.circle5}
            source={require("../assets/images/circle.png")}
          />
          <Image
            style={styles.sifrao5}
            source={require("../assets/images/sifrao.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.circle6}
            source={require("../assets/images/circle.png")}
          />
          <Image
            style={styles.sifrao6}
            source={require("../assets/images/sifrao.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    alignItems: "center",
  },
  box1: {
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
  mods: {
    fontSize: 20,
    fontWeight: "bold",
  },
  box2: {
    backgroundColor: "#DCEAFD",
    padding: 7,
    borderRadius: 20,
    width: 80,
    height: 79,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    top: 0,
    left: 290,
    alignSelf: "center",
    position: "absolute",
  },
  img1: {
    width: 70,
    height: 70,
    alignSelf: "flex-end",
    position: "absolute",
    left: 297,
    top: 0,
  },
  heart: {
    width: 23,
    height: 23,
  },
  vida: {
    fontSize: 18,
    color: "#F9001F",
    left: 4,
    marginTop: -2,
    fontWeight: "bold",
  },
  seila: {
    flexDirection: "row",
  },

  circle1: {
    width: 70,
    height: 65,
    position: "absolute",
    alignSelf: "center",
    left: 0,
    top: -100,

  },
  sifrao1: {
    alignSelf: "center",
    left: 15,
    position: "absolute",
    top: -96,
    width: 35,
    height: 35,
  },
  linha: {
    width: 150,
    height: 700,
    resizeMode: "stretch",
  },
  circle2: {
    width: 70,
    height: 65,
    position: "absolute",
    alignSelf: "center",
    right: 20,
    top: -200,
  },
  sifrao2: {
    width: 35,
    height: 35,
    top: -196,
    right: 40,
  },
  circle3: {
    width: 70,
    height: 65,
    position: "absolute",
    alignSelf: "center",
    top: -350,
    right: 50,
  },
  sifrao3: {
    width: 35,
    height: 35,
    top: -345,
    right: 70,
  },
  circle4: {
    width: 70,
    height: 65,
    position: "absolute",
    alignSelf: "center",
    top: -500,
    right: 20,
  },
  sifrao4: {
    width: 35,
    height: 35,
    top: -495,
    right: 35,
  },
  circle5: {
    width: 70,
    height: 65,
    position: "absolute",
    alignSelf: "center",
    left: 10,
    top: -650,
  },
  sifrao5: {
    width: 35,
    height: 35,
    top: -645,
    left: 25,
  },
  circle6: {
    width: 70,
    height: 65,
    position: "absolute",
    alignSelf: "center",
    top: -800,
    left: 50,
  },
  sifrao6: {
    width: 35,
    height: 35,
    top: -795,
    left: 65,
  },
});
