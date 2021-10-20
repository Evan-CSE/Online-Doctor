import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function Contact() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="text-center">
                <img src="https://image.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg" width="100%" alt="Hospital Image" />
            </div>
            <h1 className='text-center text-success'>
                Online Doctor
            </h1>
            <h3 className='ms-3'>
                We are an e-medicine based organisation providing services to patients immediately online. Our organisation proives a fast , reliable services to the usres. You can take treatment online consulting our large network of doctors with a minimum amount of fee. So what are you waiting for?
            </h3>
            <div className="text-center mt-5">
                <img src="data:image/jpeg;base64,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" width="100%" alt="" />
            </div>
            <h1 className="text-center text-info mt-5">
                Our history
            </h1>
            <h3 className="ms-3">

            Last Covid-19 situation was a challenge for whole globe. Helath check up was difficult to. Consulting to a doctor was difficult too. So online doctor came to solve the situation
            </h3>
            <Footer></Footer>
        </div>
    )
}
