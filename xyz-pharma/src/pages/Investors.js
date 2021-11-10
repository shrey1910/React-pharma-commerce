import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Table from "react-bootstrap/Table";

const Investors =() =>{
    const[state,setstate] = useState({Year:"",Quater:""})
    const[res,setRes]=useState([])
    const[count,setCount]=useState(0)
    const[data,setData]=useState(false)
    const updateState=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
       
    }
  
    var arr=[]
    const submitForm=(e)=>{
        e.preventDefault();//stops reloading
        console.log('form is submitted');
        axios.get('http://localhost:4000/table').then((response)=>{
            arr=response.data
            setData(arr);
            if(state.Year==='2019')
                {
                    if(state.Quater==='1'){
                        arr=arr[0].data[0];
                    }
                    if(state.Quater==='2'){
                        arr=arr[0].data[1];
                    }
                    if(state.Quater==='3'){
                        arr=arr[0].data[2];
                    }
                    if(state.Quater==='4'){
                        arr=arr[0].data[3];
                    }
                }
            else if(state.Year==='2020')
            {
                if(state.Quater==='1'){
                    arr=arr[1].data[0];
                }
                if(state.Quater==='2'){
                    arr=arr[1].data[1];
                }
                if(state.Quater==='3'){
                    arr=arr[1].data[2];
                }
                if(state.Quater==='4'){
                    arr=arr[1].data[3];
                }
            }
            else{
                const error = new Error("Invalid request")
                throw error;
            }
            console.log(arr.rows)
           
            console.log([...res,arr.rows])
            //setRes(res=>[...res,...arr.rows]);
            setRes([...arr.rows])
            setCount(count=>count+1)
            console.log(res)
            console.log(count)

                res.map((item,index)=>{
                    console.log(item.title)
                })

            
            
            
        })
    }

    return(
        <React.Fragment>
            <center>
            
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

    </center>
    {data && <Table stripped bordered hover>
                <thead>
                <tr>
                        <th>Q{state.Quater} {state.Year} Results</th>
                        <th>Q{state.Quater} {state.Year} </th>
                        <th></th>
                        <th>Growth</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>$m</th>
                        <th>$%</th>
                        <th>CER%</th>
                    </tr>
                </thead>
                <tbody>
               
                    {
                       res.map((item,index)=>{
                            return <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.million}</td>
                                <td>{item.growthPercentage}</td>
                                <td>{item.cer}</td>
                            </tr>
                        }
                        )}
                </tbody>
                </Table>
}
    </React.Fragment>
    )
}

export default Investors