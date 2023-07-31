import React, { Component } from 'react'
import Logo from './Img/FoodCode-1.png'
import Imgbur from './Img/burgerimg-nobg.png'
import { Link } from "react-router-dom";
export default class home extends Component {
  render() {
    return (
      <>
        <div className="container my-2" id="homediv">
          <div className="fooddiv">
            <Link to="/">
                <img src={Imgbur} alt="foodimage" className="burimg" id="burimg"/>
            </Link> 
          </div>
            <div id="HomeLogoDiv">
              <div>
                <img src={Logo} alt="" id='logohome' />
              </div>
              <div id="btndiv">
              <Link to="/services">
                <button type="submit" id="buttonorder">Order Now</button>
              </Link> 
              </div>
            </div>
        </div>
      </>
    )
  }
}
