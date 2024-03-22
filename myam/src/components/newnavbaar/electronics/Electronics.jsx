import React from "react";
import "./electronics.css";
import { NavLink, json } from "react-router-dom";

const Mobiles = () => {
  return (
    <>
      <div className="outer">
        <div className="imgs">
          <NavLink to="/mobiles">
            <img
              className="img"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/16thMarch/Galaxy_A55_580x800.jpeg"
              alt=""
            />
          </NavLink>
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Mobiles</p>
        </div>

        <div className="imgs">
          <NavLink to="/laptops">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/61aaFLxqFKL._AC_UL480_FMwebp_QL65_.jpg"
              alt=""
            />
          </NavLink>
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>laptops</p>
        </div>

        <div className="imgs">
          <NavLink to="/watch">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/51PPxZWH88L.AC_SX250.jpg"
              alt=""
            />
          </NavLink> 
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Watchs</p>
        </div>
      </div>
    </>
  );
};

export default Mobiles;
