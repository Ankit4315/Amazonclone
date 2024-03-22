import React from "react";
import "./newnav.css";
import { NavLink, json } from "react-router-dom";


const Newnav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Amazon miniTV</p>
          <p>Sell</p>
          <NavLink to="/Fashion" style={{color:"white", textDecoration:"none"}}><p>Fashion</p> </NavLink>
          <NavLink to="/Electronics" style={{color:"white", textDecoration:"none"}}> <p> Electronics</p></NavLink>
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Prime</p>
          <NavLink to="/homekitchen" style={{color:"white", textDecoration:"none"}}><p>Home & KitchenHome & Kitchen</p></NavLink>
          <p>Gift Ideas</p>
        </div>
      </div>
    </div>
  );
};

export default Newnav;
