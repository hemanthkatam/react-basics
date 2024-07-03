import React from "react";
import {Movies} from "./Mock"
import "./MoviePage.css"


export const MoviePage = () => { 
  return(
    <div>
    <div className="Paytm-headers">
     <div className="paytm-names">
        <img className="Paytm-image" src="https://assetscdn1.paytm.com/movies_new/_next/static/media/tpmc-logo.6a0114d4.png"></img>
        <div className="Paytm-home"> Home</div>
        <div className="Paytm-Movies"> Movies</div>
        <div className="Paytm-cinema"> Cinema</div>
        <div className="Paytm-Orders"> Orders</div> 
    </div>
    <div className="Paytm-login">
      <button className="Paytm-button">Login/Signup</button>
   </div>
   </div>
   <div className="button-headers">
   <div>
       <button className="now-button">Now Showing</button>
       <button className="coming-button">Coming Soon</button>
   </div>
   <div className="location">
    <button className="bangalore">Bangalore</button>
   </div>
   </div>
   <div className="movies-blr">
     {Movies.map((movie)=>{
         return(
          <div className="movies-details">
          <div className="movie-name">{movie.name}</div>
          <img className="movie-images" src={movie.imageUrl}></img>
          <div className="movie-languages">{movie.languages.map((element)=>{
             return(
              <div> {element}</div>             )
          })}</div>
          </div>

         )
     })}

     
   </div>
</div>
  )


}