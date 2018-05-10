import React, { Component } from 'react';
import MapComponent from './map';
import LocationsLists from './locationsList';
import {NavLink} from 'react-router-dom';
class Location extends Component {
    render() {
        return (
            <div className="container-3 location">
            	<LocationsLists/>
            	<MapComponent/>
            	 <div className="sne">
                    <NavLink to='/encounter' className="sne-anc">+ Log Encounter at Current Location</NavLink>
                </div>
            </div>
        );
    }
}

 

export default Location;

