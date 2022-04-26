import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LunchList = ({ navigation }) => {
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          paddingHorizontal: 16,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ color: "black", fontSize: 25, marginLeft: 10 }}>
          Lunch Menu
        </Text>
      </TouchableOpacity>
    );
  }

  function List1() {
    return (
     <TouchableOpacity  onPress={() => navigation.navigate("Payment")}>
          <View style={styles.List1}>
        <Image
          source={require("../Images/breakfast.jpg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 30, marginLeft: 20, marginTop: 30}}>Tea and Bread</Text>
        <Text style={{fontSize: 25, marginLeft: 20, textAlign: "center"}}>GH$20.00</Text>
        </View>
      </View>
     </TouchableOpacity>
    );
  }

  function List2() {
    return (
        <TouchableOpacity  onPress={() => navigation.navigate("Payment")}>
          <View style={styles.List1}>
        <Image
          source={require("../Images/koko.jpg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 22, marginLeft: 28, marginTop: 30}}>Porriage and Bread</Text>
        <Text style={{fontSize: 22, marginLeft: 20, textAlign: "center"}}>GH$20.00</Text>
        </View>
      </View>
     </TouchableOpacity>
    );
  }

  function List3() {
    return (
        <TouchableOpacity  onPress={() => navigation.navigate("Payment")}>
          <View style={styles.List1}>
        <Image
          source={require("../Images/image3.jpeg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 20, marginLeft: 15, marginTop: 30}}>Tombrown and Bread</Text>
        <Text style={{fontSize: 20, marginLeft: 20, textAlign: "center"}}>GH$20.00</Text>
        </View>
      </View>
     </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {renderHeader()}
        {List1()}
        {List2()}
        {List3()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LunchList;

const styles = StyleSheet.create({
  List1: {
    flex: 0.3,
    // borderWidth: 1,
    borderColor: "black",
    marginTop: 30,
    height: 150,
    flexDirection: "row",
  },

  List2: {
    flex: 0.3,
    // borderWidth: 1,
    borderColor: "black",
    marginTop: 30,
    height: 150,
    flexDirection: "row",
  },

  List3: {
    flex: 0.3,
    // borderWidth: 1,
    borderColor: "black",
    marginTop: 30,
    height: 150,
    flexDirection: "row",
  },
});
