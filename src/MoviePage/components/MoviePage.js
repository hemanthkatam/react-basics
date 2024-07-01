import React, { useState, useEffect } from "react";

// export const MoviePage=()=>{
//     const [moviepage,UpdatedmoviePage]=useState([])
//      const [home, UpdatedHome] = useState("")
//      const [Movies, UpdatedMovies] = useState("")
//      const [cinema, UpdatedCinema] = useState("")
//      const [orders, UpdatedOrders]=useState("")
//      const headers=["home","Movies","cinema","orders"]

//     //  const deleteFirstName = (firstname) => {
//     //     const updatedDaAta = empData.filter((emp) => emp.first_name !== firstname);
//     //     setEmpData(updatedDaAta);
//     //   };
     
//       const displayDetails=(home)=>{
//         console.log("homepage")
//       }
//       const displayDetails1=(Movies)=>{
//         console.log("Moviespage")
//       }
//       const displayDetails2=(cinema)=>{
//         console.log("MoviesPage")
//       }
//       const displayDetails3=(orders)=>{
//         console.log("OrdersPage")
//       }
    


//      const onUpdatedHome=(event)=>{
//         UpdatedHome(event.target.value)
//      }
//      const onUpdatedMovies=(event)=>{
//         UpdatedMovies(event.target.value)
//      }
//      const onUpdatedCinema=(event)=>{
//         UpdatedCinema(event.target.value)
//      }
//      const onUpdatedOrders=(event)=>{
//         UpdatedOrders(event.target.value)
//      }

//      let onSubmit=()=>{
//          const data={
//             home:home,
//             Movies:Movies,
//             cinema:cinema,
//             orders:orders
//          }
//          console.log("------",data)
//          const UpdatedData=[...moviepage,data]
//          UpdatedmoviePage(UpdatedData)
//      }

//      return(
//         <div clss="Sudarshana">
//             <div>
//                <div>home</div>
//                 <div>{onUpdatedHome}</div>
//             </div>
//             <div>
//                 <div>Movies</div>
//                 <div>{onUpdatedMovies}</div>
//             </div>
//             <div>
//                 <div>cinema</div>
//                 <div>{onUpdatedCinema}</div>
//             </div>
//             <div>
//                 <div>orders</div>
//                 <div>{onUpdatedOrders}</div>
//             </div>
//             <button onClick={onSubmit}></button>
//             <table>
//                 <thead>
//                 {headers.map((test) => (
//                   <th>{test}</th>
//                 ))}
//                 </thead>

//                 <tbody>
//                     {moviepage.map((test)=>{
//                        return (
//                         <tr>
//                             <td onClick={()=>{displayDetails()}}>{test.home}</td>
                        
//                             <td onChangeCapture={()=>{displayDetails1()}}>{test.Movies}</td>
                            
//                             <td onClick={()=>{displayDetails2()}}>{test.cinema}</td>

//                             <td onClick={()=>{displayDetails3()}}>{test.orders}</td>
//                         </tr>
//                        )
//                     } )}
            
//                 </tbody>
//             </table>
//         </div>
//      )
     

// }


 export const MoviePage=()=>{
       const headers=("home","movies","cinema","orders")
       const [languages, updatedLanguages] = useState([])
       const [format, updatedFormat] = useState([])
       const [sortBy, updatedSortBy] = useState([])
       const [genres, updatedGenres] = useState([])
         
       const handleSelectLanguages=(event)=>{
            updatedLanguages(event.target.value)
        }
        const handleSelectFormat=(event)=>{
            updatedFormat(event.target.value)
        }
        const handleSelectSortBy=(event)=>{
            updatedSortBy(event.target.value)
        }
        const handleSelectGenres=(event)=>{
            updatedGenres(event.target.value)
        }
       
        return(
            <div className="Sudarshana">
                <div>
                    <input type="radio"
                           value="telugu"
                    onSubmit={updatedLanguages}>select</input>
                </div>
                
                  
            </div>
        )
 }


 