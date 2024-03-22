import React from "react";
import "./fasion.css";
import { NavLink, json } from "react-router-dom";

const Fashion = () => {
  return (
    <>
      <div className="outer">
        <div className="imgs">
          <NavLink to="/mobiles">
            <img
              className="img"
              src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/MensSBC/Unrec/Casual-shirts_1._CB580636347_.png"
              alt=""
            />
          </NavLink>
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Men's Clothing</p>
        </div>

        <div className="imgs">
          <NavLink to="/laptops">
            <img
              className="img"
              src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensSBC/Unrec/Tops_and_tees_434x658_1709809594308_0._CB580646075_.png"
              alt=""
            />
          </NavLink>
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Women's Clothing</p>
        </div>

        <div className="imgs">
          <NavLink to="/watch">
            <img
              className="img"
              src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Kids/Unrec/Boys_clothing_434x658_1709887907103_0._CB580421452_.png"
              alt=""
            />
          </NavLink> 
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Kids' Collections</p>
        </div>
      </div>
    </>
  );
};

export default Fashion;
