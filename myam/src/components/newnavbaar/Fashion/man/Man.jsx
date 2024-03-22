import { colors } from '@mui/material';
import React from 'react';

function Product({ title, image, price, rating, bought, mrp, discount, deliveryDate, service, extra}) {
    return (
        <div style={{ 
            display: "flex", 
            alignItems: "flex-start", 
            backgroundColor: "white", 
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
            borderRadius: "8px",
            marginBottom: "10px",
            marginTop:"60px",
            marginLeft:"10px",
            marginRight:"10px"
        }}>
            <div style={{ padding: "10px", flex: "1" }}>
                <img src={image} alt="" style={{ width: "auto", borderRadius: "8px", marginLeft:"200px",}} />
            </div>
            <div style={{ padding: "20px", flex: "2",  }}>
                <h3 style={{ margin: "0", marginBottom: "10px" }}>{title}</h3>
                <h5 style={{ margin: "0", marginBottom: "10px", fontWeight: "500" }}>{bought} bought in past month</h5>
                <p style={{ margin: "0", marginBottom: "10px" }}>
                    <span style={{ fontSize: "25px", fontWeight: "600" }}>₹{price}</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>₹{mrp}</span> <span style={{color:"#cc0c39"}}>{" "}({discount}% off)</span>
                    
                </p>
                <p style={{ margin: "0", marginBottom: "10px" }}>{extra}</p>
                <p style={{ margin: "0", marginBottom: "10px" }}>Get it by <b>{deliveryDate}</b></p>
                <p style={{ margin: "0", marginBottom: "10px" }}>Service: {service}</p>
            </div>
        </div>
    );
}

export default Product;