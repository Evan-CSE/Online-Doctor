import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function ErrorPage() {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className="text-center">
                404 Not found
            </h1>
            <p className="h3">
                Your Requested page doesn't exist. Please check the url and try again.
            </p>
            <Footer></Footer>
        </div>
    )
}
