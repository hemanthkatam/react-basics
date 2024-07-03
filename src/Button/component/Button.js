import React from "react";
import { useState } from "react";
 
import "./Button.css"
export const Button=()=>{
        const [initial, updatedValue]=useState(0);

             const increase=()=>{
                updatedValue(initial+1)
             }
             const decrease=()=>{
                updatedValue(initial-1)
             }
     
    return(
        <div>
            <div className="headers">
                I am header
            </div>
            <img className="product-image" src="https://healthybuddha.in/image/cache/catalog/Cherry-200x200.jpg"></img>
                  <div className="button-count">
                    <button onClick={increase}>Increase</button>
                    <div> {initial}</div>
                    <button onClick={decrease}   disabled={initial==0}>Decrease</button>
                  </div>

                
        </div>
    )
}

