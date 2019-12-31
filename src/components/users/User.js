import React,{Component} from 'react';

class User extends Component{
  componentDidMount(){
  console.log("dsdsdsdsdsdsdsd");
  this.props.getUser(this.props.match.params.login);
}

  render(){
    const { login,id,avatar_url,url,hireable,name,blog } = this.props.user;
    return(
      <div>
        <h1>{login}</h1>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default User;