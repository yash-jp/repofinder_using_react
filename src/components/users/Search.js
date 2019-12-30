import React, {Component} from 'react'

class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    // console.log(`on change = ${e.target.name}`);
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = (event) =>{
    event.preventDefault();
    this.props.getUser(this.state.text);
    this.setState({"text":""});
  };

  render(){
    return(
      <div>
        
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users" value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value="search" className="btn btn-dark btn-block"/>
        </form>
        {this.props.doShowClear ? <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>:<p></p>}
        
      </div>
    );
  }
}

export default Search