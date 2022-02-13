import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../images/banner_img.png'





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
        

        <div className="row" style={{maxWidth: '100%',height: 'auto',marginLeft:'1rem'}}  >
                <div className="card text-white bg-primary mb-4" style={{maxWidth: "20rem",margin:"2rem"}}>
                    <div className="card-header" style={{color:"black"}}>Mission</div>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"black"}}>Our Mission</h5>
                        <p className="card-text" style={{color:"black"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-4" style={{maxWidth: "20rem",margin:"2rem"}}>
                    <div className="card-header" style={{color:"black"}}>Vision</div>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"black"}}>Our Vision</h5>
                        <p className="card-text" style={{color:"black"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-success mb-4" style={{maxWidth: "20rem",margin:"2rem"}}>
                    <div className="card-header" style={{color:"black"}}>Why Us?</div>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"black"}}>We are leading</h5>
                        <p className="card-text" style={{color:"black"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                
         </div>
         </div> 
    
      </React.Fragment>
    )
  }

  
}

export default Home;