import React from 'react';
import { Link } from 'react-router-dom';

const RepoItem = (props) =>{
  return(
    <div className="card text-center">
    <a href={`${props.repo.html_url}`}>{props.repo.name}</a>
    </div>
  );
}

export default RepoItem;