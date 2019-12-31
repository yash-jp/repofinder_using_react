import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return(
          <nav className="navbar bg-dark">
            <h1><i className="fab fa-github"/>{' '}  {props.title}</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
        </nav>
  );
};

Navbar.defaultProps = {
  title : "DEFAULT PROPS"
};

Navbar.propTypes = {
  title : PropTypes.string.isRequired
}

export default Navbar;