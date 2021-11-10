import React from "react"
import getGifs from '../gifs/GetGif';
import Gif from "./Gif";
import "./gifs.css"
import { useEffect,useState } from "react";

export default function ListOfGifs({params}){
    const {keyword}= params
    
  const [gif, setGif] = useState({loading: false, results: []});
    useEffect(() => {
        setGif(actualGifs=> ({loading:true, results: actualGifs.results}))
        getGifs({keyword})
        .then(gif=>
            setGif({loading:false, results: gif}))
            
      }, [keyword])
      if (gif.loading) return <i>⏳</i>

    
    return <div>
            {
             gif.results.map(({id, title, url})=> 
                <Gif 
                    key= {id}
                    title={title} 
                    url={url} 
                    id={id}
                />
            )}
           </div> 

}