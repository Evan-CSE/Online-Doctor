import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'
import Service from '../Service/Service';

export default function SERVICESPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then((r) => r.json())
            .then(data => setData(data));
    }, [])
    const container = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap:'15px'
    }
    return (
        <div>
            <NavBar></NavBar>
            <h3 className="text-center text-success">
                Our Services
            </h3>
            <div style={container}>
                {
                    
                    data?.map(service =>
                        <Service key={service.id} obj={service}></Service>
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

