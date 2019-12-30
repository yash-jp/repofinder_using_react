import React,{Component} from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return(
          <nav className="navbar bg-dark">
            <h1>{props.title}</h1>
        </nav>
  );
};

Navbar.defaultProps = {
  title : "DEFAULT PROPS"
};

Navbar.propTypes = {
  title : PropTypes.string.isRequired
}

// class Navbar extends Component{
//   static defaultProps={
    
//   };

//   static propTypes = {
//     title : PropTypes.string.isRequired
//   };
// }

export default Navbar;