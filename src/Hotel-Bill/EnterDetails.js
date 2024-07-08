import React from "react";
import "./EnterDetails.css"

 export const EnterDetails = ({
        Idli,
        Dosa,
        Poori,
        Vada,
        setIdli,
        setDosa,
        setPoori,
        setVada,
        setSubmit,
        priceIdli,
        priceDosa,
        pricePoori,
        pricevada,
        updatedIdliPrice,
        updatedDosaPrice,
        updatedPooriPrice,
        updatedVadaPrice,
        Quantity
        // idliAmount,
        // dosaAmount,
        // pooriAmount,
        // vadaAmount,
        // updatedDosaAmount,
        // updatedIdliAmount,
        // updatedPooriAmount,
        // updatedVadaAmount
        })=>{

         const increaseIdli=()=>{
            setIdli(Idli+1)
         }
         const decreaseIdli=()=>{
          setIdli(Idli-1)
       }
       
       const increasDosa=()=>{
        setDosa(Dosa+1)
     }
     const decreaseDosa=()=>{
      setDosa(Dosa-1)
      }
      const increasPoori=()=>{
       setPoori(Poori+1)
     }
    const decreasePoori=()=>{
      setPoori(Poori-1)
    }

    const increasVada=()=>{
      setVada(Vada+1)
   }
   const decreaseVada=()=>{
    setVada(Vada-1)
   }    


      const idliSubTotal=()=>{
        console.log(Quantity*Idli)
      }
      const dosaSubTotal=()=>{
        updatedDosaPrice(Dosa+30)
      }
      const pooriSubTotal=()=>{
        updatedPooriPrice(Poori+20)
      }
      const vadaSubTotal=()=>{
        updatedVadaPrice(Vada+15)
      }

      // const idliAmount=()=>{
      //     updatedIdliAmount()
      // }
      // const dosaAmount=()=>{
      //    updatedDosaAmount()
      // }
      // const pooriAmount=()=>{
      //    updatedPooriAmount()
      // }
      // const vadaAmount=()=>{
      //    updatedVadaAmount()
      // }

  return(
      <div>
        <div className="sudarshana">
          <div className="idli">
            <div className="idli-image">
            <img src="https://t3.ftcdn.net/jpg/04/19/04/94/240_F_419049416_76icDqQfAWQ2kwK8k6iAj4cXLUAZICCF.jpg"></img>
            </div>

         <div value={Idli} onChange={idliSubTotal}>Idli</div>
         <div>Idli Cost:Rs.5</div>

          <div className="idli-button">
          <button onClick={increaseIdli}>Increase</button>
          <div> {Idli}</div>
          <button onClick={decreaseIdli} disabled={Idli==0}>Decrease</button>
          </div>
          </div>
         
        <div className="dosa">
          <img className="dosa-image" src="https://t3.ftcdn.net/jpg/07/15/92/94/240_F_715929469_g8tR5ESH8PoZzBzKOTEuKJ9vXAs9frYk.jpg"></img>

         <div value={Dosa} onClick={(e) => setDosa(e.target.value)} onChange={dosaSubTotal} >Dosa</div>
         <div>Dosa Cost : Rs.30</div>

         <div className="dosa-botton">
          <button onClick={increasDosa}>Increase</button>
          <div> {Dosa}</div>
          <button onClick={decreaseDosa}   disabled={Dosa==0}>Decrease</button>
          </div>
          {/* <div onChange={(i)=>dosaPrice(i.target.value)}></div> */}
        </div>


        <div className="poori">
          <img src="https://t3.ftcdn.net/jpg/06/86/98/54/240_F_686985444_Ti5xR3IBPkC4KYDwqwfHz9xNj4qaFSZB.jpg"></img>

         <div value={Poori} onClick={(e) => setPoori(e.target.value)} onChange={pooriSubTotal}>Poori</div>
         <div>Poori Cost: Rs.20</div>

         <div className="poori-botton">
          <button onClick={increasPoori}>Increase</button>
          <div> {Poori}</div>
          <button onClick={decreasePoori}   disabled={Poori==0}>Decrease</button>
        </div>


        </div>
        <div className="vada">
          <img src="https://t3.ftcdn.net/jpg/02/45/29/90/240_F_245299022_KXUpKbqDjdhNYLmYBAwGMA1xL1pg2HaC.jpg"></img>

         <div  value={Vada} onClick={(e) => setVada(e.target.value)} onChange={vadaSubTotal}>Vada</div>
         <div>Vada Cost: Rs.15 </div>

         <div className="vada-botton">
          <button onClick={increasVada}>Increase</button>
          <div> {Vada}</div>
          <button onClick={decreaseVada}   disabled={Vada==0}>Decrease</button>
          </div>

        </div>
        
      </div>

      <div>
        <button onClick={() => setSubmit(true)} disabled={!Idli && !Dosa && !Poori && !Vada}>Submit</button>
      </div>
    </div>
  )
 }