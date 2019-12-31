import React,{Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component{
  componentDidMount(){
  this.props.getUser(this.props.match.params.login);
  this.props.getUserRepo(this.props.match.params.login);
}

static proptype = {
  getUser : PropTypes.func.isRequired,
  user : PropTypes.object.isRequired
}

  render(){
    const { login,avatar_url,hireable,name,location,bio,html_url,blog,company,followers, following,public_repos, public_gists } = this.props.user;
    return(
      <div>
        <Link to={`/`} className="btn btn-light">Back</Link>
        Hireable :
        {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}

        <div className="card grid-2">
          <div className="all-center">
            <img 
            src={avatar_url} className="round-img" style={{width:'150px'}} alt=""/>
            <h1>{name}</h1>
            {location?<p>{location}</p>:<p>No location found</p>}
          </div>
          <div>
            {bio && <div>
              <h3>Bio</h3>
            <p>{bio}</p>
              </div>}
              <a href={html_url} className="btn btn-dark my-1">Visit GITHUB profile</a>
              <ul>
                <li>
                  {login && <Fragment>
                      <strong>Username: </strong>{login}
                    </Fragment>}
                </li>

                <li>
                  {company && <Fragment>
                      <strong>Company: </strong>{company}
                    </Fragment>}
                </li>

                <li>
                  {blog && <Fragment>
                      <strong>Website: </strong>{blog}
                    </Fragment>}
                </li>
                
              </ul>
          </div>
        </div>

        <div className="card text-center">
                  <div className="badge badge-primary">Followers: {followers}</div>

                  <div className="badge badge-success">Following: {following}</div>

                  <div className="badge badge-light">Public Repos: {public_repos}</div>

                  <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
      </div>
    );
  }
}

export default User;