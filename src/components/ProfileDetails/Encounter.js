import React, { Component } from 'react';

class Encounter extends Component {
    render() {
        return (
            <div className="container encounter">
               	<div className="container-2 save-deaft">
               		<div className="row">
               			<h1>SAVE DRAFT</h1>
               		</div>
               	</div>
               	<div className="container-2">
               		<div className="row">
	               		<div className="row collapse date" id="dpMonths" data-date-format="mm/yyyy" data-start-view="year" data-min-view="year">
	               			<label>Date of service<span>*</span></label>
							<div className="date-input">

								<input size="16" type="text" value="02/2012" readonly />
								<div className="date-icon">	
								<span className="prefix"><i class="zmdi zmdi-calendar-alt"></i></span>
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
            </div>
        );
    }
}

export default Encounter;

