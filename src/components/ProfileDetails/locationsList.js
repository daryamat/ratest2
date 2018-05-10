import React, { Component } from 'react';
import profile from '../../images/profile-pictures.jpg';
import { NavLink } from 'react-router-dom';

class LocationsLists extends Component {
    constructor(props){
      super(props);
       this.data=[
            {
                'icon':'zmdi-pin',
                'title':'8th St and Mission St',
                'sub_titles':'12 encounters',
                'action':'',
                'image':0,
                'day':'Today',
                'assigned':0
            },
            {
                'icon':'zmdi-pin',
                'title':'9th St and Market St',
                'sub_titles':'7 encounters',                
                'action':'profile-details',
                'image':1,
                'day':'Today',
                'assigned':1                
            },
            {
                'icon':'zmdi-pin',
                'title':'Open access Clinin(50 Ivy)',
                'sub_titles':'4 encounters',                
                'action':'',
                'image':0,
                'day':'Today',
                'assigned':0                                             
            },
            
        ]
        this.handleClick=this.handleClick.bind(this);

    }

    handleClick(data){
      console.log(data)
    }
    render() {
        return (
            <div className="container-6 locationslist">
              <strong>Frequent Locations</strong>
              {this.data.map((data,i) => {
                    return (
                        <NavLink className="lists-items nonfilter no_border" to={`/${data.action}`} key={i} onClick={this.handleClick.bind(this, data)}>
                        <span className="li1">
                            <span>
                              <i className={`zmdi ${data.icon}`}></i>
                            </span>
                        </span>  
                        <span className="li2">
                            {data.title}
                            <span>{data.sub_titles}</span>
                            <span><a>VIEW ON MAP</a></span>
                        </span>
                        </NavLink>    
                    )        
              })}  
            </div>
        );
    }
}


export default LocationsLists;

