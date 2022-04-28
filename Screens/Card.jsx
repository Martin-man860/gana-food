import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { PayWithFlutterwave } from "flutterwave-react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Cash = (props) => {
  const [amount, setAmount] = useState("");
  const handleOnRedirect = (data) => {
    console.log(data)
    props.navigation.navigate("PaymentDone");
  };
  return (
    <View style={styles.Container}>
      {/* <View style={styles.Input}> */}
        {/* <TextInput
          style={{ color: "white", fontSize: 20, marginTop: 5 }}
          placeholder="Credit Card no xxx-xxxxx-xxxx"
        /> */}
      {/* </View> */}
      <View style={styles.input}>
        <TextInput
          value={amount}
          onChangeText={(value) => setAmount(value)}
          style={{ color: "white", fontSize: 20, marginTop: 5 }}
          placeholder="Amount (GHS)"
        />
      </View>

      <View style={{}}>
        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate("PaymentDone")}
          style={{
            height: 60,
            backgroundColor: "lightblue",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "black", fontSize: 16 }}>Continue</Text>
        </TouchableOpacity> */}

        <PayWithFlutterwave
          onRedirect={handleOnRedirect}
          options={{
            tx_ref: `tr-${Date.now()}`,
            authorization: "FLWPUBK_TEST-1f9699491453d748449ae2f335b4bbea-X",
            amount: +amount,
            currency: "GHS",
            customer: {
              email: "mathin@gmail.com",
            },
            payment_options: "card",
          }}
          customButton={(props) => (
            <TouchableOpacity
              style={{
                height: 60,
                backgroundColor: "lightblue",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 100,
              }}
              onPress={props.onPress}
              isBusy={props.isInitializing}
              disabled={props.disabled}
            >
              <Text style={{ color: "#fff" }}>Pay</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Cash;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#2F393D",
  },

  Input: {
    marginTop: 200,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    fontSize: 50,
    borderColor: "white",
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    marginTop: 50,
    paddingHorizontal: 30,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderColor: "white",
    borderRadius: 15,
  },
});
