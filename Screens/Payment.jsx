import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Payment = () => {
  return (
    <View style={styles.Container}>
      
    <Text style={styles.text}></Text> 
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  Container:{
    backgroundColor:"#2F393D",
    flex:1,
    justifyContent:"center"
  },

  text:{
    fontSize:50,
    color:"black",
    flex:1,
    borderRadius:35,
    marginTop:540,
    textAlign:"center",
    backgroundColor:"white"
  }
})