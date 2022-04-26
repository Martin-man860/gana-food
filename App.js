import "react-native-gesture-handler";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import GetStarted from "./Screens/GetStarted";
import LogIn from "./Screens/LogIn";
import SignUp from "./Screens/SignUp";
import Payment from "./Screens/Payment";
import HomeList from "./Screens/HomeList";
import BreakFastList from "./Screens/BreakFastList";
import LunchList from "./Screens/LunchList";
import Dessert from "./Screens/Dessert";


import { NavigationContainer } from "@react-navigation/native";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}  >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="HomeList" component={HomeList} />
      <Stack.Screen name="BreakFastList" component={BreakFastList} />
      <Stack.Screen name="LunchList" component={LunchList} />
      <Stack.Screen name="Dessert" component={Dessert} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
