import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Cash = (props) => {
  return (
    <View style={styles.Container}>

        <View style={styles.Input}>
           <TextInput style={{color:"white",fontSize:30,marginTop:5}} placeholder="+233"/>         
        </View>
        <View style={styles.input}>
          <TextInput style={{color:"white",fontSize:20,marginTop:5}} placeholder="Amount (GHS)"/> 
        </View>

      <View style={{ margin: 15 }}>
            <TouchableOpacity onPress={() => props.navigation.navigate("PaymentDone")}
                style={{
                    height: 60,
                    backgroundColor: "lightblue",
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:100
                }}
            >
                <Text style={{ color: "black", fontSize: 20}}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>

   
  )
}

export default Cash

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white",
    },

    Input:{
    marginTop: 200,
    paddingHorizontal: 30,
    borderWidth:1,
    borderRadius:15,
    height:50,
    fontSize:50,
    borderColor: "black",
    marginLeft:10,
    marginRight:10

    },

    input:{
    marginTop:50,
    paddingHorizontal:30,
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    height:50,
    borderColor:"black",
    borderRadius:15
    }
})