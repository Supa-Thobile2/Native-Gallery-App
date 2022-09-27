import React from 'react'
import {Text, View, StyleSheet, Image} from "react-native"


export default function Photo(props){

  let url = props.link
  let photographerName = props.name
  return(
    <View>
        <Image source={{uri:url}}/>
    </View>
  )
}