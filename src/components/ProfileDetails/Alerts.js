import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Alerts extends Component {
    render() {
        return (
            <div className="container-6">
                <div className="c-heading">
                <i className="zmdi zmdi-alert-circle"></i> <span>Alerts</span>
                </div>
                <NavLink to='/alert-details' className="lists-items" >
                <span className="li2 p10 notbold">
                    <strong>Suicide threat</strong>
                    <span><strong className="red">Safety</strong> <span className="dot"><i className="zmdi zmdi-circle"></i></span> 01-10-2018</span>
                </span>
                <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
                </NavLink>
                <NavLink to='/alert-details' className="lists-items">
                <span className="li2 p10 notbold">
                    <strong>SF Hot request: Check on log wound</strong>
                    <span>outreach <span className="dot"><i className="zmdi zmdi-circle"></i></span>  04-08-2018</span>
                </span>
                <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
                </NavLink>
                <NavLink to='/alert-details' className="lists-items" >
                <span className="li2 p10 notbold">
                    Missed follow-up for wound care
                    <span>follow-up <span className="dot"><i className="zmdi zmdi-circle"></i></span> 04-08-2018</span>
                </span>
                <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
                </NavLink>
                <NavLink to='#' className="lists-items-anc" >
                 SEE ALL ALERTS
                </NavLink>
                <div className="sec">
                <h3>Allergies</h3>
                <p>Eggs, lateex</p>
                </div>
                <div className="sec">
                <h3>Medications</h3>
                <p>XYZ<span>Prescribed 4/10/2018</span></p>
                <p>ABC<span>Prescribed 4/10/2018</span></p>
                </div>
                <div className="sec">
                <h3>Diagnoses</h3>
                <p>HIV (B20)</p>
                <p>Opiate use disorder (F11.24)</p>
                </div>
             </div>
        );
    }
}

export default Alerts;
