import React, {useState} from 'react'

const Search = (props) => {
  const { getUser, doShowClear, clearUser} = props;

  const [text,setText] = useState('');

  const onChange = e => {
    // console.log(`on change = ${e.target.name}`);
    // this.setState({ [e.target.name] : e.target.value });
    setText(e.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    getUser(text);
    setText('');
  };

    return(
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange}/>
          <input type="submit" value="search" className="btn btn-dark btn-block"/>
        </form>
        {doShowClear ? <button className="btn btn-light btn-block" onClick={clearUser}>Clear</button>:<p></p>}
      </div>
    );
}

export default Search