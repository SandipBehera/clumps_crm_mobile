import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/loginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/splashScreen";
import Dashboard from "./screens/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FooterComponent from "./components/BottomBar";
import Headder from "./components/Headder";
import { LeadsComponent } from "./screens/leads";

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const headerBackground = require("./assets/background/topBarBg.png");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerTitle: () => <Headder title="Dashboard" name="User" />,
            headerBackground: () => (
              <Image style={styles.headerImage} source={headerBackground} />
            ),
          }}
        />
        <Stack.Screen
          name="footer"
          component={FooterComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="leads"
          component={LeadsComponent}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerTitle: () => <Headder title="Leads" name="User" />,
            headerBackground: () => (
              <Image style={styles.headerImage} source={headerBackground} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100 + "%",
    height: 100 + "%",
  },
});
