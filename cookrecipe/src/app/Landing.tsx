import { FoodImagesList } from "@/assets/images";
import { Image } from "@/ui/image";
import { Marquee } from "@animatereactnative/marquee";
import { useLogto } from '@logto/rn';
// import { Button } from "expo-router/build/react-navigation";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, } from "react-native-gesture-handler";
import Colors from "../services/Colors";

const Landing = () => {
    const { signIn, signOut, isAuthenticated } = useLogto();

  return (
    <GestureHandlerRootView>
      <View>
        <Marquee
          spacing={10}
          speed={0.7}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {FoodImagesList.map((image, index) => (
              <Image key={index} style={styles.image} source={image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.4}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 10 }}
        >
          <View style={styles.imageContainer}>
            {FoodImagesList.map((image, index) => (
              <Image key={index} style={styles.image} source={image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.5}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 10 }}
        >
          <View style={styles.imageContainer}>
            {FoodImagesList.map((image, index) => (
              <Image key={index} style={styles.image} source={image} />
            ))}
          </View>
        </Marquee>
      </View>

      <View
        style={{ backgroundColor: Colors.WHITE, height: "100%", padding: 20 }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Cookmate AI 🥗 🔍 | Find, Create & Enjoy Delicious Recipes!
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 7,
          }}
        >
          Generate delicious recipes in seconds with the power of AI! 🍔 ✨
        </Text>

        <TouchableOpacity
         onPress={async () => signIn('recipe://callback')} 
         style={styles.button}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        <Button title="Sign Out" onPress={async () => signOut()} />
      </View>
    </GestureHandlerRootView>
  );
};
// @hshhswiw
const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
});

export default Landing;
