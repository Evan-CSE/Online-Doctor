import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function Consult() {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-success text-center">
                Confirmation Successful
            </h2>
            <h4>
                Our doctor will call you as soon as possible. Thanks for using our service.
            </h4>
            <Footer></Footer>
        </div>
    )
}
