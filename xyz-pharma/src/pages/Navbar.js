import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Navbar extends React.Component{



  render(){

    return(

      
    
      <React.Fragment>

        


        <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
          <ul className="navbar navbar-light">
            <li className="navbar navbar-light">
              <a href="/" className="nav-link active navbar-brand" aria-current="page" href="/">PQR Pharma</a>
            </li>
            <li className="navbar navbar-light">
              <a href="/" className="nav-link" href="/">Home</a>
            </li>
            <li className="navbar navbar-light">
              <a href="/about" className="nav-link" href="/about">About</a>
            </li>
            <li className="navbar navbar-light">
            <a href="/products" className="nav-link" href="/products">Our Products</a>
            </li>
            <li className="navbar navbar-light">
            <a href="/investors" className="nav-link" href="/investors">Investors</a>
            </li>
          </ul>
        </nav>

        {/* <Link to={'/'}> Home </Link> */}
      </React.Fragment>
    )
  }

  
}

export default Navbar;