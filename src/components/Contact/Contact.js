import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function Contact() {
    const handleClick = () => {
        alert("Thanks for contacting us. We'll let you know");
    }
    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-center">
                Have some questions or suggestions?
            </h2>
            <div className="mt-4 d-flex align-items-center justify-content-around">
                <div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EBJy2-BKwI-20iKK8iSESIyMpA-H4rgBPw&usqp=CAU" width="100%" height="300px" alt="" />
                    </div>
                </div>
                <div>
                    <table>
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
                                <input type="button" value="Submit" onClick={handleClick} className="border rounded border-warning bg-warning " />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
