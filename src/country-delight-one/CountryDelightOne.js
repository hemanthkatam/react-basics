import React from "react";
import { titleImage, exploreProducts, newLaunches } from "./Mock";
import "./countrydelightone.css";

export const CountryDelightOne = () => {
  return (
    <div className="root-main">
      <header className="countrydelight-header">
        <div className="first-four">
          <img
            className="header-one"
            src="https://cdproductimg.s3-us-west-2.amazonaws.com/cdproductimg/new-website/logo.png_1717266318639.png"
          />

          <div className="header-two">
            <div>Deliver here</div>
            <div>Bangalore </div>
          </div>
          <div className="header-two">Our story</div>
          <div className="header-two">Products</div>
        </div>

        <button className="header-button">Download App</button>
      </header>
      <div className="title-image">
        <img className="image-title" src={titleImage} />
      </div>
      <div className="explore-categories">
        <div>explore categories</div>
        <div className="total-details">
          {exploreProducts.map((product) => {
            return (
              <div className="explore-content">
                <img className="explore-image" src={product.img} />
                <div>{product.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="new-launches">New launches
      <div className="New-items">
        {newLaunches.map((product)=>{
           return(
            <div>
              <img className="New-item1" src={product.image} />
              <div> {product.title}</div>
              </div>
           )
        })}
      </div>
      <button className="footer-button">Available on App</button>
      </div>
    </div>
  );
};
