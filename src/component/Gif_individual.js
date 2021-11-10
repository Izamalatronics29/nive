import React from "react";
import { Route } from "wouter"

export default function Omg(){
    return(
        
        <Route path= '/gif/:keyword' component={ListOfGifs}/>
    )
}