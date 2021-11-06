import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import medicine1 from '../images/medicine1.jpg'
import medicine2 from '../images/medicine2.jpg'
import medicine3 from '../images/medicine3.jpg'
import Navbar from './Navbar'


class Products extends React.Component {

  constructor(props){
    super(props);
    console.log("Products constructors accessed",this.props.medicineList);
  }

  getMedicineName =value =>{
      return "medicine"+value
  }
  render() {

    return (

      <React.Fragment>
       
        <h3 className="display-2 mt-3">Available Products</h3>
        <div className="row container-fluid" style={{ maxWidth: '100%', height: 'auto', margin: '2em' }}   >
        {this.props.medicineList.map((element, index) => {
          return (

            
              <div className="card mb-3" style={{ maxWidth: "540px" }} key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={medicine1} className="img-fluid rounded-start" alt={'medicine'+String(index+1)}></img>
                  </div>
                  <div className="col-md-8" style={{ backgroundColor: 'hsl(105, 100%, 40%)' }}>
                    <div className="card-body">
                      <h5 className="card-title">{element.tradeName}</h5>
                      <h6>{element.genericName}</h6>
                      
                      <h6>{element.category}</h6>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            


          )
        })}
        </div>

{/* 
        <div className="row container-fluid" style={{maxWidth: '100%',height: 'auto' ,margin:'2em'}}  >
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={medicine1} className="img-fluid rounded-start" alt="medicine_1"></img>
            </div>
            <div className="col-md-8" style={{backgroundColor:'hsl(105, 100%, 40%)'}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        </div> */}
      </React.Fragment>
    )
  }


}

export default Products;