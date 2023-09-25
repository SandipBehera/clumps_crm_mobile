import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { DevApi } from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";

export default function LoginScreen({ navigation }: StackScreenProps<any>) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = async () => {
    if (!email || !password) return Alert.alert("Please fill all the fields");
    const response = await fetch(`${DevApi}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.status === "success") {
      AsyncStorage.setItem("user_id", data.data[0].empid);
      AsyncStorage.setItem("userData", JSON.stringify(data.data));
      navigation.replace("Dashboard");
    } else {
      return Alert.alert(data.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Image
          source={require("../assets/full_logo.jpg")}
          style={{
            width: "60%",
            height: 100,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <TextInput
            label="Email"
            mode="outlined"
            placeholder="Enter your email"
            left={<TextInput.Icon icon="email" />}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setEmail(e.nativeEvent.text)}
          />
        </View>
      </View>
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <TextInput
            label="Password"
            mode="outlined"
            placeholder="Enter your password"
            left={<TextInput.Icon icon="lock" />}
            style={{ backgroundColor: "white" }}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <Button
          contentStyle={styles.buttonDesign}
          mode="contained"
          onPress={() => login()}
        >
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  LoginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1db2c4",
  },
  Middle: {
    alignItems: "center",
    width: "100%",
    marginTop: 200,
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    width: 300,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
    width: 300,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  imageStyle: {
    marginTop: 250,
    width: "100%",
    height: 70,
    marginLeft: 10,
    marginRight: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
});
