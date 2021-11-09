import React from "react"
import getGifs from '../gifs/GetGif';
import Gif from "./Gif";
import { useEffect,useState } from "react";

export default function ListOfGifs({keyword}){
    
  const [gif, setGif] = useState([]);
    useEffect(() => {
        getGifs({keyword}).then(gif=>setGif(gif))
      }, [])
    
    return gif.map(({id, title, url})=> 
    <Gif 
      key= {id}
      title={title} 
      url={url} 
      id={id}
    />
  )

}