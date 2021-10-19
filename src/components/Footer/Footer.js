import React from 'react'

export default function Footer() {
    const style = {
        height:"400px",
        width:"100%",
        marginTop:"14px",
    }
    return (
        <div style={style} className="bg-success row">
            <div className='col-md-4'>A</div>
            <div className='col-md-4'>B</div>
            <div className='col-md-4'>C</div>
        </div>
    )
}
