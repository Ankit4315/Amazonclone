import React, { useState } from "react";
import { NavLink, json } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    const res = await fetch("http://localhost:8005/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        email,
        mobile,
        password,
        cpassword,
      })
    });

    const data = await res.json();
    // console.log(data)

    if (res.status === 422 || !data) {
        alert("no data")
    } else {
      alert("data succesfully add");
      setUdata({
        ...udata,
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
      });
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img
              //   src="https://banner2.cleanpng.com/20180501/abw/kisspng-amazon-com-logo-retail-brand-publishing-chat-room-logo-5ae868f510e770.1581033615251806610693.jpg"
              src="https://w7.pngwing.com/pngs/1012/770/png-transparent-amazon-logo-amazon-com-amazon-video-logo-company-brand-amazon-logo-miscellaneous-wish-text-thumbnail.png"
              alt="logo"
            />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>SignUp</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.fname}
                  name="fname"
                  id="fname"
                  placeholder="joi"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.email}
                  name="email"
                  id="email"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input
                  type="number"
                  onChange={adddata}
                  value={udata.mobile}
                  name="mobile"
                  id="number"
                  placeholder="9999999999"
                />
              </div>
              <div className="form_daata">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.password}
                  name="password"
                  id="password"
                  placeholder="At least 6 character"
                />
              </div>
              <div className="form_daata">
                <label htmlFor="cpassword">Password Again</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.cpassword}
                  name="cpassword"
                  id="cpassword"
                />
              </div>
              <button className="signin_btn" onClick={senddata}>
                Continue
              </button>
              <div className="signin_info">
                <p>Already heve a account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
          {/* <ToastContainer /> */}
        </div>
      </section>
    </>
  );
};

export default SignUp;
