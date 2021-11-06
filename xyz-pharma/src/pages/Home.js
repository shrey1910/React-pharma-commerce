import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../images/banner_img.png'
import Navbar from './Navbar'





class Home extends React.Component{

  constructor(){
      super()
      console.log('home.js accessed')
  }

  render(){

    return(
    
      <React.Fragment>
        <div className="container-fluid">
        
        <img style={{maxWidth: '100%',height: 'auto'}} src={banner} alt="banner"></img>
        

        <div className="row" style={{maxWidth: '100%',height: 'auto'}}  >
                <div className="card text-white bg-primary mb-4" style={{maxWidth: "18rem",margin:"1rem"}}>
                    <div className="card-header">Mission</div>
                    <div className="card-body">
                        <h5 className="card-title">Our Mission</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-4" style={{maxWidth: "18rem",margin:"1rem"}}>
                    <div className="card-header">Vision</div>
                    <div className="card-body">
                        <h5 className="card-title">Our Vision</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-success mb-4" style={{maxWidth: "18rem",margin:"1rem"}}>
                    <div className="card-header">Why Us?</div>
                    <div className="card-body">
                        <h5 className="card-title">We are leading</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                
         </div>
         </div> 
    
      </React.Fragment>
    )
  }

  
}

export default Home;