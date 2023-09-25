import * as React from "react";
import { AppBar } from "@react-native-material/core";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Avatar, IconButton, MD3Colors, Title } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface headderData {
  title: string;
  onBack?: () => void;
  name: any;
}

const Headder = ({ title, onBack, name }: headderData) => {
  //const uname = name.substring(0, 2).toUpperCase();
  //   const CIcon = () => <Avatar.Text size={40} label={uname} />;
  return (
    <View style={{ flex: 1, margin: 0 }}>
      <View style={{ flexDirection: "row", maxWidth: 400 }}>
        <View style={{ flexDirection: "column", width: "50%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              fontStyle: "italic",
              marginTop: 0,
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ flexDirection: "column", width: "50%" }}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View style={{ flexDirection: "column", alignSelf: "flex-end" }}>
              <IconButton
                icon="bell"
                iconColor={"white"}
                size={30}
                onPress={() => console.log("Pressed")}
                // mode="contained"
                // containerColor={MD3Colors.primary100}
                style={{
                  alignContent: "flex-end",
                  alignSelf: "flex-end",
                  marginTop: "0%",
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                alignSelf: "flex-end",
                marginTop: "-6%",
              }}
            >
              <TouchableOpacity onPress={() => console.log("Pressed")}>
                <Avatar.Text
                  label={name.substring(0, 2).toUpperCase()}
                  size={30}
                  style={{ marginTop: -42 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Headder;
const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    paddingHorizontal: 10,
    bottom: Platform.OS === "ios" ? -5 : 0,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: "#555CC4",
  },
});
