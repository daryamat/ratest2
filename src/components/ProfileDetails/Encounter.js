import React, { Component } from 'react';
import MapComponent from './map';
import {NavLink} from 'react-router-dom'

class Encounter extends Component {
    render() {
        return (
            <div className="container encounter">
               	<div className="container-2 save-deaft">
               		<div className="row">
               			<h1>SAVE DRAFT</h1>
               		</div>
               	</div>
               	<NavLink to='#' className="lists-items  " >
			            <span className="li2 p10 notbold table_row">
			                <strong>Lcoation and Date of Service</strong>
			                <span><span className="dot"><i className="zmdi zmdi-circle"></i></span> 01-10-2018</span>
			            	<span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
			            </span>
		               	<div className="container-2 accordion">
		               		<div className="row">
			               		<div className="row collapse date" id="dpMonths" data-date-format="mm/yyyy" data-start-view="year" data-min-view="year">
			               			<label>Date of service<span>*</span></label>
									<div className="date-input">

										<input size="16" type="text" value="02/2012" readOnly />
										<div className="date-icon">	
										<span className="prefix"><i className="zmdi zmdi-calendar-alt"></i></span>
									</div>	
									</div>
									<label>Service loction<span>*</span></label>
									<p>This list is filtered according to your profile.Your
										con Select a site for the full list <a href="">here</a></p>
									<ul className="Outreach-list" >
										<li>Open access -50 lvy</li>
										<li>HOSPITAL / SNF</li>
										<li>6th St HR Center</li>
										<li>Outreach</li>
									</ul>
									<label>Address
								        <input type="text" />
								    </label>
								</div>
			               	</div>
		               </div>
	            </NavLink>
               <div className="margin_bot">
               	<MapComponent/>
               	<div className="row encounter_btn">
               		<div className="width_fifty"><h1 className="blue_btn">SAVE DRAFT</h1></div>
               		<div className="width_fifty"><h1 className="btn">Continue</h1></div>
               	</div>
               </div>
               <div className="gray">
				   <NavLink to='#' className="lists-items margin_bot" >
			            <span className="li2 p10 notbold">
			                <strong>Patient Information</strong>
			                <span><strong className="">Gonzalex, Mirable S</strong> <span className="dot"><i className="zmdi zmdi-circle"></i></span> 08-28-1995</span>
			            </span>
			            <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
	            	</NavLink>
	            	<NavLink to='#' className="lists-items margin_bot" >
			            <span className="li2 p10 notbold">
			                <strong>Encounter Details</strong>
			            </span>
			            <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
	            	</NavLink>
	            	<NavLink to='#' className="lists-items" >
			            <span className="li2 p10 notbold">
			                <strong>Diagnoses and Next Steps</strong>
			            </span>
			            <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
	            	</NavLink>
	            </div>
	            	<div className="container-2 save-deaft">
               		<div className="row">
               			<h1>SAVE DRAFT</h1>
               		</div>
               	</div>
            </div>
        );
    }
}

export default Encounter;

