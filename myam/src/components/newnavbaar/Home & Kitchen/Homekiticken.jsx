import React from "react";
import "./homekitchen.css";
import { NavLink, json } from "react-router-dom";

const homeki = () => {
  return (
    <>
      <div className="outer">
        <div className="imgs">
          <NavLink to="/mobiles">
            <img
              className="img"
              src="https://m.media-amazon.com/images/G/31/img21/OHL/UNREC_ROOM_BEDROOM/ShopforBedroom_1._CB579997420_.png"
              alt=""
            />
          </NavLink>
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Fans</p>
        </div>

        <div className="imgs">
          <NavLink to="/laptops">
            <img
              className="img"
              src="https://m.media-amazon.com/images/G/31/img21/OHL/UNREC_ROOM_BEDROOM/ShopforBedroom_2._CB579997420_.png"
              alt=""
            />
          </NavLink>
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Bedsheets</p>
        </div>

        <div className="imgs">
          <NavLink to="/watch">
            <img
              className="img"
              src="https://m.media-amazon.com/images/G/31/img21/OHL/UNREC_REV_KITCHEN_SBR/Shop-for-Kitchen_07._CB580043309_.jpg"
              alt=""
            />
          </NavLink> 
          <p style={{fontSize:"20px", fontWeight:"600",color:"#cc0c39", marginLeft:"75px"}}>Dinner sets</p>
        </div>
      </div>
    </>
  );
};

export default homeki;
