import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { NavLink, json } from "react-router-dom";


const Cart = () => {
  const { id } = useParams("");
  // console.log(id);

  const [inddata, setInddata] = useState("");
  console.log(inddata);

  const getinddata = async () => {
    const res = await fetch(`http://localhost:8005/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data)

    if (res.status !== 201) {
      console.log("no data available");
    } else {
      console.log("getdata");
      setInddata(data);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  //add cart function

  // const addtocart = async (id) => {
  //   const checkres = await fetch(`http://localhost:8005/addcart/${id}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       inddata,
  //     }),
  //     // credentials: "include"
  //   });

    
  //   const data1 = await checkres.json();
  //   console.log(data1 + "frontend data");

  //   if (checkres.status === 401 || !data1) {
  //     console.log("user invalid");
  //     alert("user invalid");
  //   } else {
  //     alert("data added in your cart");
  //   }
  // };


  // addtocart.js
  const addToCart = async (productId, userId) => {
    try {
      const response = await fetch(`http://localhost:8005/addcart/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${'65fb6d7fd2d60692cc89b6a7'}`, // Pass the user ID as an authorization header
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
  
      const data = await response.json();
      console.log("Item added to cart:", data);
      alert("Item added to cart successfully");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Error adding item to cart. Please try again later.");
    }
  };



  return (
    <div className="cart_section">
      {inddata &&
        Object.keys(inddata).length && ( //extra check for retrive data if data is null
          <div className="cart_container">
            <div className="left_cart">
              <img src={inddata?.detailUrl} alt="cart" />
              <div className="cart_btn">
                <button
                  className="cart_btn1"
                  onClick={() => addToCart(inddata.id)}
                >
                  Add to Cart
                </button>
                <NavLink to="/buynow">
                <button className="cart_btn2">Buy Now</button>
                </NavLink>
              </div>
            </div>
            <div className="right_cart">
              <h3>{inddata?.title?.shortTitle}</h3>
              <h4>{inddata?.title?.longTitle}</h4>
              <Divider />
              <p className="mrp">M.R.P. : ₹{inddata?.price?.mrp}</p>
              <p>
                Deal of the Day:
                <span style={{ color: "#B12704" }}>
                  {" "}
                  ₹{inddata?.price?.cost}
                </span>
              </p>
              <p>
                You save:
                <span style={{ color: "#B12704" }}>
                  {" "}
                  ₹{inddata?.price?.mrp - inddata?.price?.cost} (
                  {inddata?.price?.discount})
                </span>
              </p>
              <div className="discount_box">
                <h5>
                  Discount :{" "}
                  <span style={{ color: "#111" }}>{inddata?.discount}</span>
                </h5>
                <h4>
                  Free Delivery :{" "}
                  <span style={{ color: "#111", fontWeight: 600 }}>
                    Oct 8 - 24
                  </span>{" "}
                  details
                </h4>
                <p>
                  Fast delivary :{" "}
                  <span style={{ color: "#111", fontWeight: 600 }}>
                    Tomorrow
                  </span>
                </p>
              </div>
              <div className="description">
                About the iteam :{" "}
                <span
                  style={{
                    color: "#565959",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.4px",
                  }}
                >
                  {inddata?.description}
                </span>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cart;
