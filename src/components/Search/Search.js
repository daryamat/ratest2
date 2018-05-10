import React, { Component } from 'react';
import img from '../../images/profile-pictures.jpg';

class Search extends Component {
	constructor(props){
        super(props);
        this.state={
            match:false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
    	this.setState({match:true});
    }
  render() {
    return (
    	<div className="container-3 search-box">
        <h2 className="text-left">Paitent Search</h2>
        <div className="search row small-12 medium-8 large-6 columns align-center">
         <input type="search" name="search"  placeholder="&#61447;" className="animated-search-form" />
        <span onClick={this.handleClick}><i className="zmdi zmdi-search"></i></span>
       </div>
     { this.state.match === true 
     	?
     	<div>
     	<div className="match-head">
       	 <h2 className="text-left">Matches</h2>
       </div>
       <div className="recent-box">
       	 <div className="row">
       	 	<div className="columns recent">
       	 	<div className="row">
	       	 	<div className="columns small-2">
 					<img src={img} />
	       	 	</div>
	       	 	<div className="columns small-10">
	       	 	  <span className="">Name</span><br/>
	       	 	  <span className="">Last Seen</span>
	       	 	</div>
       	 	</div>
       	 	</div>
       	 	<div className="columns recent">
       	 	<div className="row">
	       	 	<div className="columns small-2">
	       	 	<img src={img} />
	       	 	</div>
	       	 	<div className="columns small-10">
	       	 	 <span className="">Name</span><br/>
	       	 	  <span className="text-left">Last Seen</span>
	       	 	</div>
       	 	</div>
       	 	</div>
       	 	<div className="columns recent">
       	 	<div className="row">
	       	 	<div className="columns small-2">
	       	 	<img src={img} />
	       	 	</div>
	       	 	<div className="columns small-10">
	       	 	 <span className="">Name</span><br/>
	       	 	  <span className="">Last Seen</span>
	       	 	</div>
       	 	</div>
       	 	</div>
       	 </div>
       </div>
       </div>
     	:
     	<div>
        <div className="recent-head">
       	 <h2 className="text-left">Recent Searches</h2>
       </div>
       <div className="recent-box">
       	 <div className="row">
       	 	<div className="columns recent">
       	 	<div className="row">
	       	 	<div className="columns small-3">
	       	 	<img src={img} />
	       	 	</div>
	       	 	<div className="columns small-6">
	       	 	  <span className="">Name</span><br/>
	       	 	  <span className="">Last Seen</span>
	       	 	</div>
	       	 	<div className="columns small-3 text-right">Today</div>
       	 	</div>
       	 	</div>
       	 	<div className="columns recent">
       	 	<div className="row">
	       	 	<div className="columns small-3">
	       	 	<img src={img} />
	       	 	</div>
	       	 	<div className="columns small-6">
	       	 	 <span className="">Name</span><br/>
	       	 	  <span className="text-left">Last Seen</span>
	       	 	</div>
	       	 	<div className="columns small-3 text-right">Today</div>
       	 	</div>
       	 	</div>
       	 	<div className="columns recent">
       	 	<div className="row">
	       	 	<div className="columns small-3">
	       	 	<img src={img} />
	       	 	</div>
	       	 	<div className="columns small-6">
	       	 	 <span className="">Name</span><br/>
	       	 	  <span className="">Last Seen</span>
	       	 	</div>
	       	 	<div className="columns small-3 text-right">Today</div>
       	 	</div>
       	 	</div>
       	 </div>
       </div>
       </div>
     }
      </div>
    )
  }
}

export default Search ;