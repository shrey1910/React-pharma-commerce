import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import axios from 'axios';




class App extends React.Component{
  constructor(){
    super();
    this.state = {medicineList:null}
  }

  componentWillMount(){
    console.log('before rendering loading');
    axios.get('http://localhost:4000/products').then((response)=>{
      this.setState({medicineList:response.data})
      console.log("updated here... and loaded")
    }).catch()
  }

  // async componentWillMount() {
  //   const response = await axios.get('http://localhost:4000/products')
  //   this.setState({medicineList:response.data});
  //   console.log(this.state.medicineList)
  // }

  render(){

    return(
    
      <React.Fragment>
        
       
       {this.state.medicineList &&<Products medicineList={this.state.medicineList}/>}
        
        
      </React.Fragment>
    )
  }

  
}

export default App;