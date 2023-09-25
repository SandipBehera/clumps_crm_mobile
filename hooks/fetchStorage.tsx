import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("userData");
    if (value !== null) {
      // Data is available
      const val = JSON.parse(value);
      return val[0];
    } else {
      // Data is not available
      console.log("No data found");
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.error(error);
    return error;
  }
};
