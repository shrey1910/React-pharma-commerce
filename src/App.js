import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import axios from 'axios';
import Navbar from './pages/Navbar';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import Investors from './pages/Investors';
import About from './pages/About';
import Home from './pages/Home';
import Reviews from './pages/Reviews';






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
        <Navbar />    
        
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={this.state.medicineList && <Products medicineList={this.state.medicineList} />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/investors" element={<Investors />} />
          <Route exact path="/reviews" element={<Reviews />} />
        </Routes>
        
          
       
       
        
        
      </React.Fragment>
    )
  }

  
}

export default App;