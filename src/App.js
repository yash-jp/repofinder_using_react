import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import UserItem from './components/users/UserItem';
import Search from './components/users/Search';
import Users from './components/users/Users';
import axios from 'axios';



class App extends Component{
  state = {
    users: new Array(),
    loading : false,
    doShowClear : false
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
  
  render(){
    if(this.state.users.length>0){
      return(
        <div className="App">
          <Navbar title="GITHUB Finder"/>
          <div className="container">
            <Search getUser={this.getUsers} clearUser={this.clearUser} doShowClear={this.state.doShowClear}/>
            <Users users={this.state.users} /></div>
        </div>
      );
    }else{
      return(
        <div>
          <h2>no</h2>
        </div>
      );
    }
  
  }
}

export default App;
