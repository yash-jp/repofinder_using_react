import React from 'react';
import { Link } from 'react-router-dom';

const RepoItem = (props) =>{
  return(
    <div className="card text-center">
    <Link to={`/${props.repo.html_url}`}>{props.repo.name}</Link>
    </div>
  );
}

export default RepoItem;