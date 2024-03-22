import React from "react";
import Product from "./Laptops";

function ProductPage() {
  return (
    <div>
      {/* <h1>Our Products</h1> */}
      <Product
        title="Chuwi HeroBook Pro 14.1'' Intel Celeron N4020 Laptop with 8GB RAM, 256GB SSD, Windows 11, 1TB Expand, FHD IPS, Ultra Slim, USB3.0, Mini-HDMI, Webcam"
        image="https://m.media-amazon.com/images/I/618d5bS2lUL._AC_UL480_QL65_.jpg"
        price="16,990"
        bought="100+"
        mrp="34,990"
        discount="51"
        extra="Flat INR 5000 Off on SBI BankCards."
        deliveryDate="26 Mar"
        service="Installation"
      />
      <Product
        title="ASUS TUF Gaming F15, Intel Core i5-11400H 11th Gen, 15.6-inch (39.62 cm) FHD 144Hz, Gaming Laptop (16GB/512GB SSD/4GB NVIDIA GeForce RTX 2050/Win 11/ RGB Backlit KB/Black/2.30 kg), FX506HF-HN025W"
        image="https://m.media-amazon.com/images/I/71-Fx3Vfq5L._AC_UL480_QL65_.jpg"
        price="52,999"
        bought="300+"
        mrp="80,499"
        discount="35"
        extra="Flat INR 3000 Off on IDFC BankCards."
        deliveryDate="25 Mar"
        service="Service: onsite"
      />
      <Product
        title="ASUS Vivobook 15, Intel Core i3-1220P 12th Gen, 15.6 (39.62 cm) FHD, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Alexa Built-in/FP Sensor/Blue/1.7 kg), X1502ZA-EJ381WS"
        image="https://m.media-amazon.com/images/I/71c0GSxtEEL._AC_UL480_QL65_.jpg"
        price="38,490"
        bought="500+"
        mrp="60999"
        discount="36"
        extra="Flat INR 2000 Off on SBI BankCards."
        deliveryDate="Tue, 26 Mar"
        service="Installation"
      />
      <Product
        title="Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey"
        image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UL480_QL65_.jpg"
        price="74,490"
        bought="400+"
        mrp="92,999"
        discount="19"
        extra="Flat INR 5000 Off on HDFC BankCards."
        deliveryDate="28 Mar"
        service="FREE Delivery by Amazon"
      />
      <Product
        image="https://m.media-amazon.com/images/I/61GEizrmU9L._AC_UL480_QL65_.jpg"
        title="Dell 14 Laptop, 12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD Graphics/14.0(35.56cm) FHD/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Grey/Thin & Light 1.48kg"
        bought="600+"
        price="34,990"
        mrp="57,778"
        discount="39"
        extra="Flat INR 5000 Off on HDFC BankCards."
        deliveryDate="26 Mar"
        service="Installation"
      />
    </div>
  );
}

export default ProductPage;

{/* <Product
  image=""
  title=""
  bought=""
  price=""
  mrp="28999"
  discount=""
  extra=""
  deliveryDate=""
  service=""
/>; */}
