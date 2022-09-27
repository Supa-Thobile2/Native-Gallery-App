import React from 'react'
import {Text} from "react-native"
import AppHeader from "./components/appHeader"
import {SafeAreaProvider} from "react-native-safe-area-context"
import Gallery from "./components/gallery"



function App(){

  return(
<SafeAreaProvider>


        <AppHeader/>
        <Gallery/>
        


</SafeAreaProvider>
    
    
  )
}

export default App
