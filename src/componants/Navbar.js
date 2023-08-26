import React, { Component } from 'react'
import Logo from './Img/h_&_s_black.png'
import { Link } from "react-router-dom";

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
                                <Link to="/services" className='fontco'>OurServices</Link>
                            </li>
                            <li className='navitom'>
                                <Link to="/ruff" className='fontco'>ContactUS</Link>
                            </li>
                        </ul >
                    </div >

                </nav >
            </>
        )
    }
}
