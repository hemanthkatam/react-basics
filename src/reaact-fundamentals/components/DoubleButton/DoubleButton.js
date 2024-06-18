import React, { useState } from "react";
 export const DoubleButton = (props) =>
    {
        const [NoClicks,NumberofTimes] = useState(0);
        const [input, setInput] = useState("")
    
        console.log("---Button props", props);

   const ClickCounts = () =>{ 
      const updatedValue = NoClicks + 1 ;
      NumberofTimes(updatedValue)
      console.log('---no.of times Clicked--',NoClicks)
    }
    const UiChanges = (event) => {
        console.log("display changes",event)
        setInput(event.target.value)
    }
    return(
        <div className="Counting" >
        <button onClick={props.onButtonClickHandler}>{props.title}</button>
        <button onClick={ClickCounts}>Click</button>
        <div>you clicked me this number: {NoClicks}</div> 
        <div>
        {NoClicks === 5 ? (<button onClick={ClickCounts}>Click me to increase count</button>) : (<div>no button</div>)}
        </div>
        <input type="textbox" updatedValue={input} onChange={UiChanges} />
        <div>input text: {input} </div>
        
        <button onClick={props.onButtonClickHandler}>{props.title}</button>;

        </div>
    )
    }
    
//     //{clickedCounts === 5 ? (
//         <button onClick={countClick}>Click me to increase count</button>
//       ) : (
//         <div>no button</div>
//       )}