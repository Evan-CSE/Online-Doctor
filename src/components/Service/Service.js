import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Service(props) {
    const { obj } = props;
    const style = {
        border: "2px solid red",
        borderRadius: "30px",
        padding: "4px"
    };
    return (
        <div style={style}>
            <img src={obj.img} alt="" height='200px' style={{ width: "80%", "padding-left": "25%" }} /> <br />
            <h3>
                Category: <span style={{ color: "red" }}>{obj.name}</span>
            </h3>
            <h3>
                Number Of Doctors: {obj.totDoc}
            </h3>
            <h3>
                Doctors Currently Online: <span className="text-success">{obj.currentlyOnline}</span>
            </h3>
            <button className="d-block mx-auto my-3 border-3 rounded bg-warning border-warning ">
                <NavLink to='/consult'>
                    Consult Doctor
                </NavLink>

            </button>
        </div>
    )
}
