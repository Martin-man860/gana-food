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
        <Text style={{ color: "black", fontSize: 25, marginLeft: 10, fontStyle:"italic"}}>
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
          source={require("../Images/Fufu.jpeg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30,paddingBottom:10, fontStyle:"italic", color:"white"}}>Fufu with Light-Soup</Text>
        <Text style={{fontSize: 25, marginLeft: 20, textAlign: "center",color:"white", fontStyle:"italic",fontStyle:"italic"}}>GH$30.99</Text>
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
          source={require("../Images/BEANS.jpg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 22, marginLeft: 28, marginTop: 30,paddingBottom:10, fontStyle:"italic",color:"white"}}>Beans with Plaintain</Text>
        <Text style={{fontSize: 22, marginLeft: 20, textAlign: "center",color:"white",fontStyle:"italic"}}>GH$29.99</Text>
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
          source={require("../Images/lunch4.jpeg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 25, marginLeft: 15, marginTop: 30, paddingBottom:10, fontStyle:"italic",color:"white"}}>Rice and Stew</Text>
        <Text style={{fontSize: 20, marginLeft: 20, textAlign: "center",color:"white",fontStyle:"italic"}}>GH$10.75</Text>
        </View>
      </View>
     </TouchableOpacity>
    );
  }

  function List4() {
    return (
     <TouchableOpacity  onPress={() => navigation.navigate("Payment")}>
          <View style={styles.List1}>
        <Image
          source={require("../Images/lunch3.jpeg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 22, marginLeft: 20, marginTop: 30, paddingBottom:10, fontStyle:"italic", color:"white"}}>Yam with Egg-Stew</Text>
        <Text style={{fontSize: 25, marginLeft: 20, textAlign: "center", color:"white",fontStyle:"italic"}}>GH$20.00</Text>
        </View>
      </View>
     </TouchableOpacity>
    );
  }

  function List5() {
    return (
     <TouchableOpacity  onPress={() => navigation.navigate("Payment")}>
          <View style={styles.List1}>
        <Image
          source={require("../Images/lunch1.jpeg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 25, marginLeft: 20, marginTop: 30,paddingBottom:10, fontStyle:"italic", color:"white"}}>Plain Rice </Text>
        <Text style={{fontSize: 25, marginLeft: 20, textAlign: "center", color:"white",fontStyle:"italic"}}>GH$17.90</Text>
        </View>
      </View>
     </TouchableOpacity>
    );
  }

  function List6() {
    return (
     <TouchableOpacity  onPress={() => navigation.navigate("Payment")}>
          <View style={styles.List1}>
        <Image
          source={require("../Images/joff.jpeg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30,paddingBottom:10, fontStyle:"italic", color :"white"}}>Jollof Rice with Chicken</Text>
        <Text style={{fontSize: 25, marginLeft: 20, textAlign: "center",color:"white",fontStyle:"italic"}}>GH$21.90</Text>
        </View>
      </View>
     </TouchableOpacity>
    );
  }

  function List7() {
    return (
     <TouchableOpacity  onPress={() => navigation.navigate("Payment")}>
          <View style={styles.List1}>
        <Image
          source={require("../Images/photo.jpg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 150,
            height: 150,
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30,paddingBottom:10, fontStyle:"italic", color :"white"}}>Fried Rice with Chicken</Text>
        <Text style={{fontSize: 25, marginLeft: 20, textAlign: "center",color:"white",fontStyle:"italic"}}>GH$21.90</Text>
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
        {List4()}
        {List5()}
        {List6()}
        {List7()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LunchList;

const styles = StyleSheet.create({
  List1: {
    flex: 0.3,
    // borderWidth: 1,
    borderColor: "red",
    marginTop: 10,
    height: 160,
    flexDirection: "row",
    backgroundColor:"#2F393D",
    borderRadius:15,
    paddingTop:5,
    marginLeft:5,
    marginRight:5,
    marginBottom:15,
    paddingHorizontal:5
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
