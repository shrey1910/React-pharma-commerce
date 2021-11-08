import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Investors =() =>{
    const[state,setstate] = useState({Year:"",Quater:""})
    const updateState=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
       
    }

    const submitForm=(e)=>{
        e.preventDefault();//stops reloading
        console.log('form is submitted');
        console.log(state);
    }

    return(
        <React.Fragment>
     <form className="form-inline">
            <label>Financial Year</label>
            <select className="custom-select my-1 mr-md-2" id="Year" name="Year" placeholder="Choose Year" onChange={updateState}>
                <option defaultValue></option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
            </select>
            <label className="">Quater</label>
            <select className="custom-select my-1 mr-md-2" id="Quater" name="Quater" placeholder="Choose Quater" onChange={updateState}>
                <option defaultValue></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>


            <button type="submit" className="btn btn-primary my-1" onClick={submitForm}>Submit</button>
    </form>
    </React.Fragment>
    )
}

export default Investors