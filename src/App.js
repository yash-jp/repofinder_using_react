import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import './App.css';
import UserItem from './components/users/UserItem';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';
import axios from 'axios';



class App extends Component{
  state = {
    users: new Array(),
    loading : false,
    doShowClear : false,
    user:{},
    repos:[]
  };

  async componentDidMount(){
    // console.log(`CLIENT SECRET - ${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({users:res.data});
    // console.log(`fetched users are ${this.state.users}`);
    if(this.state.users.length<0){
      this.setState({doShowClear:false});
    }else{
      this.setState({doShowClear:true});
    }
  }
  
  clearUser = ()=>{
    console.log("here");
    this.setState({users:[]});
    this.setState({doShowClear:false});
  }

  getUsers = async (userName) =>{
    const res = await axios.get(`https://api.github.com/search/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users:res.data.items});

    if(this.state.users.length<0){
      this.setState({doShowClear:false});
    }else{
      this.setState({doShowClear:true});
    }
  }

  getUser = async (userName) =>{
    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(`my user data - ${res.data}`);
    this.setState({user:res.data});
  }

  getUserRepo = async (userName)=>{
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(`my repo data - ${res.data}`);
    this.setState({repos:res.data});
  }
  
  render(){
      return(
        <Router>
          <div className="App">
            <Navbar title="GITHUB Finder"/>
            <div className="container">
              <Switch>
                <Route exact path = '/' render={props => (
                  <div>
                    <Search getUser={this.getUsers} clearUser={this.clearUser} doShowClear={this.state.doShowClear}/>
                    <Users users={this.state.users} />
                  </div>
                )}/>

                <Route exact path = '/about' component={About}></Route>

                <Route exact path = '/user/:login' render={(props) =>(
                  <User {...props} getUser={this.getUser} user={this.state.user} getUserRepo={this.getUserRepo} repos={this.state.repos}/>
                )}></Route>
              
              </Switch>
            </div>
          </div>
        </Router>
      );
  }
}

export default App;
