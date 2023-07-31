import React from 'react'
import { Link } from "react-router-dom";
import Devnarayan from './Img/Devnarayan-nobg.png'

export default function Services(props) {
  let bestbox = document.getElementsByClassName('ContainerImg')
  console.log(bestbox);
  return (
    <>
      <div className='MainDivServices'>
        <div className='SubDivServices'>
          <div className='ServicesName'>
            <h1>{props.name}</h1>
          </div>
          <div className='InfoDivServices'>
            <div className="DishesDivServices">
              <p>{props.dish1}</p>
              <p>{props.dish2}</p>
              <p>{props.dish3}</p>
              <p>{props.dish4}</p>
            </div>
            <div className="PriceDivServices">
              <p>{props.price1}₹</p>
              <p>{props.price2}₹</p>
              <p>{props.price3}₹</p>
              <p>{props.price4}₹</p>
            </div>
          </div>
          <div className="buttonfullmanudiv">
          <Link to="/dennis">
            <button id="ButtonFullManu" type="submit">View Full Menu</button>
          </Link> 
          </div>
        </div>
      </div>

    </>
  )
}

