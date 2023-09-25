import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem("user_id").then((value) =>
        navigation.replace(value === null ? "Auth" : "Dashboard")
      );
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/favicon.png")}
        style={{
          width: "100%",
          height: "10%",
          resizeMode: "contain",
          margin: 30,
        }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
