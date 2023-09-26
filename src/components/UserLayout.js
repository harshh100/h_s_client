import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function UserLayout({ children }) {
    return (

        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default UserLayout