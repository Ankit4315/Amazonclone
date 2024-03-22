import React from 'react';
import "./bynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>

                <div className="item_containert">
                    <img style={{marginLeft:"30px", marginTop:"50px"}} src="https://m.media-amazon.com/images/I/51lUkxkNXDL.AC_SX250.jpg" alt="" />
                    <div className="item_details">
                        <h3>boAt Wave Sigma with 2.01 HD Display,Bluetooth Calling, Coins, DIY Watch Face Studio, 700+ Active Modes, HR&SpO2 Monitoring, Energy and Sleep Scores,IP67, Smart Watch for Men & Women(Cool Blue)</h3>
                        <h3>boAt</h3>
                        <h3 className='diffrentprice'>$1,499</h3>
                        <p className='unusuall'>Usually dispatched in 8 days.</p>
                        <p>Eligible for Free Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" />
                        <Option/>
                    </div>
                    <h3 className='item_price'>$1,499</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default Buynow
