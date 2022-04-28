import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native'
import React from 'react'

const Payment = (props) => {
  return (
    <View style={styles.Container}>
      <View style={{flex:7,backgroundColor:"#2F393D"}}>
      {/* <TouchableOpacity  onPress={() => navigation.navigate("Payment")}> */}
          <View style={styles.List1}>
        <Image
          source={require("../Images/breakfast.jpg")}
        //   resizeMode="contain"
          style={{
            marginLeft: 5,
            width: 200,
            height: 200,
            marginTop:50,
            alignSelf:"center"
          }}
        />
        <View style={{flexDirection: "column"}}>
        <Text style={{fontSize: 25, marginLeft: 50, marginTop: 40,paddingBottom:10, fontStyle:"italic", color:"white"}}>Tea with Toasted Bread</Text>
        <Text style={{fontSize: 25, marginLeft: 20, textAlign: "center",color:"white", fontStyle:"italic"}}>USD$ 10.99</Text>
        </View>
      </View>
     {/* </TouchableOpacity> */}
      </View>
     
  
      <View style={styles.bottom}>
       
       <View style={{justifyContent: "space-between", flexDirection: "row", marginTop: 20, paddingHorizontal: 20}}>
        <TouchableOpacity  onPress={() => props.navigation.navigate("Cash")}>
          <Text style={styles.btn}>Cash</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => props.navigation.navigate("Card")}>
          <Text style={styles.btm}>Card</Text>
        </TouchableOpacity>
        </View>
       
      </View> 
    </View>

  
  )
}

export default Payment

const styles = StyleSheet.create({
  Container:{
    backgroundColor:"#2F393D",
    flex:1,
    // justifyContent: "space-between"
  },




  btm:{  
      fontSize:40,
      textAlign:"center",
      // paddingHorizontal:20,
      backgroundColor:"lightblue",
      borderRadius:10,
      width: 140,
      height: 50,
      marginTop: 60,
      // marginLeft:20     
  },
  


 btn:{
    fontSize:40,
    textAlign:"center",
    // paddingHorizontal:20,
    backgroundColor:"lightblue",
    borderRadius:10,
    marginTop: 60,
    width: 140,
    height: 50
    
 },

  bottom:{
      flex:3,
    borderRadius:35,
    // marginTop:550,
    backgroundColor:"white",
  },

  
})