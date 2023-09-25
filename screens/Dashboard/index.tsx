import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { fetchStorage } from "../../hooks/fetchStorage";
import { User } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ClText } from "../../components/Text/ClText";
import FooterComponent from "../../components/BottomBar";
import Headder from "../../components/Headder";
import { StackScreenProps } from "@react-navigation/stack";

const { width } = Dimensions.get("window");
const boxWidth = width * 0.5; // 50% of the screen width
const Dashboard = ({ navigation }: StackScreenProps<any>) => {
  const [data, setData] = React.useState<User | null>(null); // Explicitly define the type of data
  const [currentDate, setCurrentDate] = React.useState("");
  setTimeout(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date +
        "-" +
        "0" +
        month +
        "-" +
        year +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec
    );
  }, 1000);

  React.useEffect(() => {
    const fetchData = async (): Promise<User | null> => {
      try {
        const fetchedData = await fetchStorage();
        setData(fetchedData);
        return fetchedData;
      } catch (error) {
        return null;
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ImageBackground
        source={require("../../assets/background/background.png")}
        style={styles.imageBackground}
      >
        <ScrollView style={{ height: 100 }}>
          <View style={styles.welcomeView}>
            <View style={styles.welcomeText}>
              {/* <Text style={styles.welcomeMText}>Welcome {data?.user_name}</Text> */}
              <ClText
                text={`welcome ${data?.user_name}`}
                style={styles.welcomeMText}
              />
              <ClText
                style={[styles.welcomeMText, { fontSize: 10 }]}
                text={currentDate}
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => navigation.replace("leads")}>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor: "orange",
                      shadowColor: "white",
                      shadowRadius: 20,
                      shadowOpacity: 0.5,
                    },
                  ]}
                >
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ marginTop: "10%" }}>
                      <Image
                        source={require("../../assets/icons/social-media-unscreen.gif")}
                        style={{
                          width: 50,
                          height: 50,
                          alignItems: "center",
                          alignContent: "center",
                          alignSelf: "center",
                        }}
                      />
                    </View>
                    <View style={{ marginTop: "3%" }}>
                      <ClText
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                        text={"Lead"}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor: "blue",
                      shadowColor: "white",
                      shadowRadius: 20,
                      shadowOpacity: 0.5,
                    },
                  ]}
                >
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ marginTop: "10%" }}>
                      <Image
                        source={require("../../assets/icons/document.gif")}
                        style={{
                          width: 50,
                          height: 50,
                          alignItems: "center",
                          alignContent: "center",
                          alignSelf: "center",
                        }}
                      />
                    </View>
                    <View style={{ marginTop: "3%" }}>
                      <ClText
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                        text={"Tasks"}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor: "blue",
                      shadowColor: "white",
                      shadowRadius: 20,
                      shadowOpacity: 0.5,
                    },
                  ]}
                >
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ marginTop: "10%" }}>
                      <Image
                        source={require("../../assets/icons/document.gif")}
                        style={{
                          width: 50,
                          height: 50,
                          alignItems: "center",
                          alignContent: "center",
                          alignSelf: "center",
                        }}
                      />
                    </View>
                    <View style={{ marginTop: "3%" }}>
                      <ClText
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                        text={"Calender"}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.box]}>
                  <ClText style={{ textAlign: "center" }} text={"Visit"} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity>
                <View style={[styles.box]}>
                  <ClText style={{ textAlign: "center" }} text={"Reports"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.box]}>
                  <ClText style={{ textAlign: "center" }} text={"Documents"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View>
          <FooterComponent />
        </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    height: 100,
    backgroundColor: "#FFF",
    marginLeft: 4,
    marginRight: 4,
    marginTop: 10,
  },
  welcomeText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  welcomeMText: {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 30,
    textAlign: "left",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    width: boxWidth,
    height: 130,
    alignContent: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    margin: 0,
    borderColor: "#D7DAE5",
    borderWidth: 1,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
});
export default Dashboard;
