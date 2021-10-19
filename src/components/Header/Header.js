import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'
import Services from '../Services/Services'
import Slider from '../Slider/Slider'

export default function Header() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Services></Services>
            <Footer></Footer>
        </div>
    )
}
