import React, { Component } from 'react'
import Logo from './Img/h_&_s_black.png'
import { Link } from "react-router-dom";
import cart_img from './Img/cart.png';
export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='Navmain'>
                    <div className='nav_center'>
                        <ul className='List'>
                            <li className='navitom'>
                                <Link to="/" className='fontco'>Home</Link>
                            </li >
                            <li className='navitom'>
                                <Link to="/about" className='fontco'>AboutUs</Link>
                            </li>
                            <li className='navitom'>
                                <img src={Logo} alt="Logo" className='logonav' />
                            </li>

                            <li className='navitom'>
                                <Link to="/menu" className='fontco'>Menu</Link>
                            </li>
                            <li className='navitom'>
                                <Link to="/cart" className='cart-trolley--link fontco'>
                                    <img src={cart_img} alt="Cart" className='cart-trolley cart_img' />
                                    {/* <FiShoppingCart className="cart-trolley" /> */}
                                    <span className="cart-total--item"> 10 </span>
                                </Link>
                            </li>
                        </ul >
                    </div >

                </nav >
            </>
        )
    }
}
