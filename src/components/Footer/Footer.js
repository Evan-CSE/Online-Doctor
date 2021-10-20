import React from 'react'

export default function Footer() {
    const style = {
        height: "400px",
        width: "100%",
        marginTop: "14px",
    }
    return (
        <div style={style} className="bg-success row">
            <div className='col-md-6 my-auto'>
                <h3 className="text-white">
                    Contact Us
                </h3>
                <h5 className="text-white">
                    <i class="fas fa-location-arrow text-info">
                    </i>
                    House No 43, Road number 32, Dhanmondi, Dhaka,Bangladesh
                </h5>
                <h5 className="text-white">
                    <i class="fas fa-phone text-info"></i>
                    +8801821484988
                </h5>
                <h5 className="text-white">
                    <i class="fas fa-business-time text-info"></i>
                    Open Hours: Mn - St: 8:00am - 9:00pm Sn: Closed
                </h5>
            </div>
            <div className="col-md-6 my-auto">
                    <iframe width="100%" height="90%" id="gmap_canvas" src="https://maps.google.com/maps?q=dhanmondi%2032,%20dhaka,%20bangladesh&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            <h5 className="text-center">
                @copyright evanshareef@gmail.com
            </h5>
        </div>
    )
}
