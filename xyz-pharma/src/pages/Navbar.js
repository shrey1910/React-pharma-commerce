import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends React.Component{



  render(){

    return(
    
      <React.Fragment>
            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <ul className="navbar navbar-light">
        <li className="navbar navbar-light">
          <a href="#" className="nav-link active navbar-brand" aria-current="page" href="#">PQR Pharma</a>
        </li>
        <li className="navbar navbar-light">
          <a href="#" className="nav-link" href="#">Home</a>
        </li>
        <li className="navbar navbar-light">
          <a href="#" className="nav-link" href="#">About</a>
        </li>
        <li className="navbar navbar-light">
          <a href="#" className="nav-link disabled">Products</a>
        </li>
        <li className="navbar navbar-light">
          <a href="#" className="nav-link disabled">Investors</a>
        </li>
        </ul>
 
</nav>


      </React.Fragment>
    )
  }

  
}

export default Navbar;