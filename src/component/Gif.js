import React from "react";
import './gifs.css'

export default function Gif({title, id, url}){
    return(
        <a href={`#${id}`} className='gifis'>
            <h4>{title}</h4>
            <img alt={title}src={url} />
        </a>
    )
}