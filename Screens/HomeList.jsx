import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const HomeList = ({navigation}) => {
  function breakfast() {
    return (
      <View>
        <TouchableOpacity  onPress={() => navigation.navigate("BreakFastList")}>
          <ImageBackground
            source={require("../Images/image2.jpeg")}
            resizeMode="cover"
            style={{ height: 180, width: 350, marginTop: 30 }}
          >
            <View style={{backgroundColor: "#000000c0", }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                  
                }}
              >
                BreakFast
              </Text>
             
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  function lunch() {
    return (
      <View>
          <TouchableOpacity  onPress={() => navigation.navigate("LunchList")}>
          <ImageBackground
            source={require("../Images/gob3.jpeg")}
            resizeMode="cover"
            style={{ height: 180, width: 350, marginTop: 30 }}
          >
            <View style={{backgroundColor: "#000000c0", }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                  
                }}
              >
               Lunch
              </Text>
             
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  function supper() {
    return (
      <View>
          <TouchableOpacity  onPress={() => navigation.navigate("Dessert")}>
          <ImageBackground
            source={require("../Images/dessert5.jpeg")}
            resizeMode="cover"
            style={{ height: 180, width: 350, marginTop: 30 }}
          >
            <View style={{backgroundColor: "#000000c0", }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                  
                }}
              >
                Dessert
              </Text>
              
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20, paddingHorizontal: 16 }}>
      <ScrollView>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginTop: 30,
            fontWeight: "bold",
          }}
        >
          PLEASE CHOOSE YOUR MENU
        </Text>
        {breakfast()}
        {lunch()}
        {supper()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeList;

const styles = StyleSheet.create({});
