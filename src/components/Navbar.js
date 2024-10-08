import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../img/GBS_Logo.png'

//export default function Navbar(props) {
  // const [search, setSearch] = useState('');
  // console.log(search)
  export default function Navbar({setSearch}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">{props.title}</a> */}
    <a className="navbar-brand" href="/"><img src={logo} style={{height:'auto'}} alt='PEPSICO'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/resources">Resources</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contacts">Contacts</Link>
        </li>
     
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value) }/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
  )

}
  //Proptypes
  Navbar.propTypes = {
    title:PropTypes.string,
//  about: Proptypes.string
}
