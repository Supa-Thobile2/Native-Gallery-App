import React, {useState,useEffect} from "react"
import {Text} from "react-native"
import axios from "axios"
import Photo from "./photos"

export default function Gallery(){
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('https://api.unsplash.com/photos/random?count=20&client_id=lBN8nRCAzRamHokrSHjivF7oNVegZgwd6INhEXo9Mr8').then((res)=>{
        res.data.map((unit)=>setData((prevState)=>[...prevState, unit]));
        console.log(res.data)
    })
  }, [])
  return(
    <Photo/>
  )
}