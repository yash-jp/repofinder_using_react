import React,{ Component } from 'react';
import { render } from '@testing-library/react';

const UserItem = (props) => {
  const {avatar_url,login,html_url} = props.user;
  return(
    <div className='card text-center'>
      <img className='round-img' src={avatar_url} alt='' style={{width:'60px'}}></img>
      <h2>{login}</h2>
      <div><a href={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</a></div>
    </div>
  );
};

// class UserItem extends Component{
//   render(){
//     const { avatar_url,login } = this.props.user;
//     return(
//       <div className='card text-center'>
//         <img className="round-img" src = {avatar_url} alt='' style={{width:'60px'}}></img>
//         <h3>{login}</h3>
//         <div><a href={this.props.html_url} className="btn btn-dark btn-sm my-1">More</a></div>
//       </div>
//     );
//   }
// }

export default UserItem;