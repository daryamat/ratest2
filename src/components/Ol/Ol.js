import React, { Component } from 'react';
import profile from '../../images/profile-pictures.jpg';
import { NavLink } from 'react-router-dom';

class Ol extends Component {
    constructor(props){
        super(props);
        this.handleCheck=this.handleCheck.bind(this)
        this.state={ total_items:5 ,assigned_check:false}
        this.data=[
            {
                'icon':'zmdi-accounts',
                'id': 0,
                'title':'Alvarez, Angela L',
                'last_seen':' 4/17/2018',
                'action':'profile-details',
                'image':0,
                'day':'Today',
                'assigned':0,
                'dob': '03/28-1984',
                'sex': 'Female',
                'phone': '444-555-3333'
            },
            {
                'icon':profile,
                'id': 1,
                'title':'Gonzalez, Mirabel S',
                'last_seen':' 4/10/2018',                
                'action':'profile-details',
                'image':1,
                'day':'Today',
                'assigned':1,
                'dob': '04/28-1984',
                'sex': 'Female',
                'phone': '444-555-4444'                
            },
            {
                'icon':'zmdi-accounts',
                'id': 2,
                'title':' Nardi, Carmen A',
                'last_seen':' 1/12/2018',                
                'action':'profile-details',
                'image':0,
                'day':'Today',
                'assigned':0,
                'dob': '05/28-1984',
                'sex': 'Male',
                'phone': '444-555-5555'                                             
            },
            {
                'icon':'zmdi-accounts',
                'id': 3,
                'title':' Putnam, Ray S',
                'last_seen':' 6/22/2018',                
                'action':'profile-details',
                'image':0,
                'day':'Today',
                'assigned':0,
                'dob': '06/28-1984',
                'sex': 'Male',
                'phone': '444-555-6666'                                                            
            },
            {
                'icon':'zmdi-accounts',
                'id': 4,
                'title':' White, Candance B',
                'last_seen':' 4/17/2018',                
                'action':'profile-details',
                'image':0,
                'day':'2d',
                'assigned':0,
                'dob': '07/28-1984',
                'sex': 'Female',
                'phone': '444-555-7777'
                
            }
        ]
    }
    handleCheck(e){
            this.setState({
                assigned_check: !this.state.assigned_check,
            })
    }

    handleClick(data, e){
        if(data.action === "profile-details"){
            return true;
        }else{
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="gray">
                <div className="container">
                    <div className="row">
                        <div className="columns small-12">
                            <div className="container-2 pb0">
                            
                                <h2>Outreach List</h2>
                                <p>{this.state.total_items} total</p>
                                <p><input id="" type="checkbox" defaultChecked={this.state.assigned_check} name="assigned_check" onClick={this.handleCheck} /><label htmlFor="checkbox12">assigned to me</label></p>
                            </div>
                            <div className="container-3">
                                {this.data.map((data,i) => {
                                    if(this.state.assigned_check){
                                        if(data.assigned === 1){
                                            return (
                                                <NavLink className="lists-items nonfilter" to={`/${data.action}/${data.id}`} key={i} onClick={this.handleClick.bind(this, data)}>
                                                <span className="li1">
                                                    <span>
                                                        {data.image === 0 ?
                                                            <i className="zmdi zmdi-account">
                                                        </i>
                                                        :<img src={data.icon} alt={data.title} />}
                                                    </span>
                                                </span>  
                                                <span className="li2">
                                                    {data.title}
                                                    <span>Last seen: {data.last_seen}</span>
                                                </span>
                                                <span className="li3">{data.day}</span>
                                                </NavLink>    
                                            )        
                                        }
                                    }else{
                                        return(
                                            <NavLink className="lists-items nonfilter" to={`/${data.action}/${data.id}`} key={i} onClick={this.handleClick.bind(this, data)}>
                                            <span className="li1">
                                                <span>
                                                    {data.image === 0 ?
                                                        <i className="zmdi zmdi-account">
                                                    </i>
                                                    :<img src={data.icon} alt={data.title} />}
                                                </span>
                                            </span>  
                                            <span className="li2">
                                                {data.title}
                                                <span>Last seen: {data.last_seen}</span>
                                            </span>
                                            <span className="li3">{data.day}</span>
                                            </NavLink>    
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>  
          </div>
        );
    }
}

export default Ol;
