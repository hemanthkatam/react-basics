import React, { useState, useEffect } from "react";
 //import "./BillingTable.css";
 
export  const BillingTable =()=>{
    const [item, updatedItem]=useState([])
    const [itemName, updatedItemName] = useState("");
    const [price, updatedPrice] = useState("");
    const [itemQuantity, updatedItemQuantity] = useState("");
    const [amount, updatedAmount] = useState("");
    const headers=["itemName","price","itemQuantity","amount"]
    
    // const onItemChange=(event)=>{
    //     updatedItem(event.target.value)
    // } 

    const onItemNameChange=(event)=>{
        updatedItemName(event.target.value)
    }
    const onPriceChange=(event)=>{
        updatedPrice(event.target.value)
    }
    const onItemQuantityChange=(event)=>{
        updatedItemQuantity(event.target.value)
    }
    const onAmountChange=(event)=>{
        updatedAmount(event.target.value)
    }

    let onSubmit=()=>{
        const data={
            itemName:itemName,
            price:price,
            itemQuantity:itemQuantity,
            amount:amount
        };
        console.log("....details....",data)
        const updatedData=[...item,data]
        updatedItem(updatedData)
        updatedItemName("")
        updatedPrice("")
        updatedItemQuantity("")
        updatedAmount("")

    };

    

      // c

    return(
        <div class="Chitty">
        
            <div>
                <div>itemName:</div>
                <div>
                    <input type="textbox" value={itemName} onChange={onItemNameChange}></input>
                </div>
                <div></div>
            </div>
            <div>
                <div>price:</div>
                <div>
                    <input type="textbox" value={price} onChange={onPriceChange}></input>
                </div>
            </div>
            <div>
                <div>itemQuantity:</div>
                <div>
                    <input type="textbox" value={itemQuantity} onChange={onItemQuantityChange}></input>
                </div>
            </div>
            <div>
                <div>amount:</div>
                <div>
                    <input type="textbox" value={amount} onChange={onAmountChange}></input>
                </div>
            </div>
            <div>
            <button onClick={onSubmit} disabled={!itemName || !price || !itemQuantity || !amount}>Submit</button>
            </div>
            <table>
                <thead>
                {headers.map((test) => (
                  <th>{test}</th>
                 ))}
                </thead>
                 
                <tbody>
                  {item.map((test) => {
                    return(
                            <tr>
                            <td>{test.itemName}</td>
                            <td>{test.price}</td>
                            <td>{test.itemQuantity}</td>
                            <td>{test.amount}</td>
                            </tr>
                    )
                  })}
                    
                </tbody>
            </table>
        </div>
        
    )
}