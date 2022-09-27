import React from 'react';
import {Header} from 'react-native-elements';

export default function AppHeader(){

  return(
    <Header

      backgroundColor= "#1D7874"
      centerComponent={{
        text: "Photo Gallery APP",
        style:{
            color: '#071E22',
            fontWeight: 'bolder', 
            fontSize: 'large', 
            fontFamily: 'cursive'
        }
      }}
    
    />
  )
  
}