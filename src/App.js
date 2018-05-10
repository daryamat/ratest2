import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import ProfileUpdate from './components/Profile/ProfileUpdate';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import AlertDetails from './components/ProfileDetails/AlertDetails';
import Encounter from './components/ProfileDetails/Encounter';
import Ol from './components/Ol/Ol';
import Search from './components/Search/Search';
import Index from './components/Common/index';
import Cookies from 'universal-cookie';
import 'sweetalert/dist/sweetalert.css';

import './index.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      token:false
    }
  }

  redirect(e){
    this.setState({
      redirect: true
    })
  }

  render() {
    var cookie = new Cookies();
    var token = cookie.get('logged_in');
    return (
      <BrowserRouter>
      <div className="App">
        {!this.state.redirect ? <Index /> : ""}
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login"   render={()=>(
              token ? (
                <Redirect to="/profile"/>
              ) : (
                <Signin />
              )
            )} />
            <Route path="/profile"   render={(props)=>(
              token ? (
                <Profile {...props}/>
              ) : (
                <Redirect to="/login"/>
              )
            )} />
            <Route path="/profile-details/:id"  render={(props)=>(
              token ? (
                <ProfileDetails redirect = {this.redirect.bind(this)} {...props}/>
              ) : (
                <Redirect to="/login" />
              )
            )} />
            <Route path="/ol"   render={()=>(
              token ? (
                <Ol/>
              ) : (
                <Redirect to="/login"/>
              )
            )} />
            <Route path="/profile-update" render={()=>(
              token ? (
                <ProfileUpdate />
              ) : (
                <Redirect to="/login"/>
              )
            )} />
            <Route path='/search' render={()=>( <Search />)} />
            <Route path='/alert-details' render={()=>( <AlertDetails />)} />
            <Route path='/encounter' render={()=>( <Encounter />)} />
            
          </Switch>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
