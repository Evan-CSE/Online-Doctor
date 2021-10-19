import React from 'react'
import { Carousel } from 'react-bootstrap'


export default function Slider() {
    return (
        <div className='mt-3'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://static.toiimg.com/photo/75603851.cms'
                        alt="Doctor"
                        height='500px'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://s3.envato.com/files/284457921/_8533200.jpg'
                        alt="Second slide"
                        height='500px'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src='https://scholarlyoa.com/wp-content/uploads/2020/12/doctors.jpg'
                        alt="Third slide"
                        height='500px'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
