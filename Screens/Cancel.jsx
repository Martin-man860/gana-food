import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cancel = (props) => {
  return (
    <View style={styles.Container}>

    <View style={styles.txt}>

    <Text style={{color:"white",marginTop:150,textAlign:"center",fontSize:25}}>Payment Failed !</Text>
    
    {/* <Text style={{color:"white",marginTop:40,marginLeft:20,marginRight:20,fontSize:20}}>Online deposit has been initiated on your phone.
         Please follow instructions on the prompt to complete the deposit.
         If already done, Tap on the "Completed" buttom to confirm. </Text>     */}
    
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
    <TouchableOpacity onPress={() => props.navigation.navigate("HomeList")}
                style={{
                    height: 50,
                    width:130,
                    backgroundColor: "red",
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:100,
                    marginLeft:15
                }}
            >
                <Text style={{ color: "white", fontSize: 20,}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("HomeList")}
                style={{
                    height: 50,
                    width:130,
                    backgroundColor: "green",
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:100,
                    marginLeft:15,
                    marginRight:15
                }}
            >
                <Text style={{ color: "white", fontSize: 20,}}>Completed</Text>
            </TouchableOpacity>
           
    </View>
    </View>
      
    </View>

  
  )
}

export default Cancel

const styles = StyleSheet.create({})