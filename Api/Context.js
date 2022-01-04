import { createContext,useState,useEffect } from "react";
import React from "react";
import axios from "axios"
import {getNewsAPI ,getSourceAPI} from "./api" 

export const NewsContext = createContext()


const Context =({children})=>{
    const [news,setNews] = useState([])
    const[category,setCategory] = useState("general")
    const[index,setIndex] = useState(1)
    const[source , setSource] = useState()
    const [darkTheme,setDarkTheme]=useState(true)
     const fetchNews = async (reset  = category)=>{
         const {data} = await axios.get(getNewsAPI(reset))
         setNews(data)
         setIndex(1)
     }
const fetchNewsFromSources = async ()=>{
    try{
     const {data} = await axios.get(getSourceAPI(source))
     setNews(data)
     setIndex(1)
    }catch(err){
console.log(err)
    }
}

     useEffect(()=>{
         fetchNews();
     },[category])
     useEffect(()=>{
        fetchNewsFromSources();
    },[source])
    return(
        <NewsContext.Provider value={{
            news,
            index,
            darkTheme,
            setIndex,
            fetchNews,
            setCategory,
            setSource,
            setDarkTheme
        
        }}>{children}</NewsContext.Provider>
    )
}

export default Context