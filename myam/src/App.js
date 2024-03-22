import "./App.css";
import Buynow from "./components/buynow/Buynow";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Navbaar from "./components/header/Navbaar";
import Maincomp from "./components/home/Maincomp";
import Newnav from "./components/newnavbaar/Newnav";
import SignUp from "./components/signup_sign/SignUp";
import Sign_in from "./components/signup_sign/Sign_in";
import { Routes, Route } from "react-router-dom";

import Electronics from "./components/newnavbaar/electronics/Electronics";
import Mobiles from "./components/newnavbaar/electronics/mobiles/Mobiles";
import ProductPage from './components/newnavbaar/electronics/leptops/Product_for_laptop';
import Watches from './components/newnavbaar/electronics/watchs/watch_data';

import Fashion from "./components/newnavbaar/Fashion/Fashion"

import Homekiticken from "./components/newnavbaar/Home & Kitchen/Homekiticken"


function App() {
  return (
    <>
      <Navbaar />

       <Newnav/>
      <Routes>
       <Route path="/Electronics" element={<Electronics/>}/>
       <Route path="/mobiles" element={<Mobiles/>}/>
       <Route path="/laptops" element={<ProductPage/>}/>
       <Route path="/watch" element={<Watches/>}/>
      </Routes>

      <Routes>
       <Route path="/Fashion" element={<Fashion/>}/>
       <Route path="/mobiles" element={<Mobiles/>}/>
       <Route path="/laptops" element={<ProductPage/>}/>
       <Route path="/watch" element={<Watches/>}/>
      </Routes>

      <Routes>
       <Route path="/homekitchen" element={<Homekiticken/>}/>
       <Route path="/mobiles" element={<Mobiles/>}/>
       <Route path="/laptops" element={<ProductPage/>}/>
       <Route path="/watch" element={<Watches/>}/>
      </Routes>

      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
