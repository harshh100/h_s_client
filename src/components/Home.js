import React, { Component } from 'react'
import Logo from './Img/is_here.png'
import Imgbur from './Img/burgerimg-nobg.png'
import cart from './Img/cart.png'
import { Link } from "react-router-dom";
export default class home extends Component {
  render() {
    return (
      <>
        <div className="container my-2" id="homediv">
          <div className="fooddiv">
            <Link to="/">
              <img src={Imgbur} alt="foodimage" className="burimg" id="burimg" />
            </Link>
          </div>
          <div id="HomeLogoDiv">
            <div>
              <img src={Logo} alt="" id='logohome' />
            </div>
            <div id="btndiv">
              <Link to="/menu">
                {/* <button type="submit" id="buttonorder">Order Now</button> */}
                <button class="button"> Order Now <img src={cart} alt="icon" id='cart' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
