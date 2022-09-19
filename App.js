import { StatusBar } from 'expo-status-bar';
import React, {useEffect}from 'react';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';


// export default function App() {
//   useEffect(()=>{
//     const hasPermission = PermissionsAndroid.check(PermissionsAndroid.Permissions.READ_EXTERNAL_STORAGE)
//   },[])
//   return (
//     <SafeAreaView>
//       <ScrollView>

//       </ScrollView>
//     </SafeAreaView>
  
//   );
// }

const App = ()=>{

    useEffect(()=>{
     checkPermission()
  },[])

  const checkPermission = async()=>{
    const hasPermission = PermissionsAndroid.check(PermissionsAndroid.Permissions.READ_EXTERNAL_STORAGE);
    console.log(hasPermission)
    if(hasPermission){
     return true;
    }

    const status = await PermissionsAndroid.request(PermissionsAndroid.Permissions.READ_EXTERNAL_STORAGE,{
     title: "Image Gallery app permissions",
     message: "Image gallery needs your permission to access your photos",
     buttonPositive: "Ok"
    })
    return status === "granted"
 }


return (
      <SafeAreaView>
        <ScrollView>
  
        </ScrollView>
      </SafeAreaView>
    
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App