import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Text } from "react-native";

interface textProps {
  text: any;
  style?: any;
}

export const ClText = ({ text, style }: textProps) => {
  const [loaded] = useFonts({
    Montserrat:
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Raleway:wght@100&family=Ruthie&family=Spectral:ital,wght@1,200&display=swap",
  });
  useEffect(() => {
    loaded;
  }, []);

  return <Text style={[{ fontFamily: "Montserrat", ...style }]}>{text}</Text>;
};
