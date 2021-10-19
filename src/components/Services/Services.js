import React, { useEffect, useState } from 'react'
import Service from '../Service/Service';

export default function Services() {
    const style = {
        fontSize: '50px',
        textAlign: 'center',
        marginTop: '4px'
    }
    const container = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap:'15px'
    }
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then((r) => r.json())
            .then(data => setServiceData(data));
    }, [])
    return (
        <div>
            <h3 className='text-success' style={style}>
                Our Services
            </h3>
            <div style={container}>
                {
                    serviceData.map(service =>
                        <Service key={service.id} obj={service}></Service>
                    )
                }
            </div>
        </div>
    )
}
