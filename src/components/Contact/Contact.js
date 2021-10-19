import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function Contact() {
    const handleClick = ()=>{
        alert("Thanks for contacting us. We'll let you know");
    }
    return (
        <div>
            <NavBar></NavBar>
            <table className="mx-auto my-5">
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <input type="text" name="" id="" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        <input type="email" name="" id="" />
                    </td>
                </tr>
                <tr>
                    <td>Your Message</td>
                    <td>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="button" value="Submit" onClick={handleClick} className="border rounded border-warning bg-warning "/>
                    </td>
                </tr>
            </table>
            <Footer></Footer>
        </div>
    )
}
