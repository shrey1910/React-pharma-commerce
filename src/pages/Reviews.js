import React from "react";
import './Reviews.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class Reviews extends React.Component{
    constructor(){
        super()
        // const [firstName,setFirstName]=useState("")
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            message:'',
            UI:0,
            Prod_Catalog:0,
            Acc_Investors:0,
            Experience:0

        }
    }

    updateState=(e)=>{
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
    }
    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
        // axios.post('http://localhost:5000/form',this.state).then(res=>{
        //             console.log(res.data);
        //         }).catch(err=>{
        //             console.log(err);
        //         })
    }


    render(){
        return(
            <div className="form-group testbox container">
      <form>
        <h1>Please provide with your valuable feedback!</h1>
        <p>Thank you for taking the time to fill in our online feedback form. By providing us your feedback, you are helping us understand what we do well and what improvements we need to implement.</p>
        <h4>Name</h4>
        <input className="form-group first-name" type="text" name="first_name" placeholder="First" onChange={this.updateState} value={this.state.first_name}/>
        <input className="form-group first-name" type="text" name="last_name" placeholder="Last" onChange={this.updateState} value={this.state.last_name}/>
        <h4>Email<span>*</span></h4>
        <input type="email" name="email" onChange={this.updateState} value={this.state.email} />
        <h4>How satisfied were you with:<span>*</span></h4>
        <table>
        <tbody>
          <tr>
            <th className="form-group first-col"></th>
            <th>Very Satisfied</th>
            <th>Satisfied</th>
            <th>Unsatisfied</th>
            <th>Very Unsatisfied</th>
          </tr>
          
          <tr>
            <td className="form-group first-col" value={this.state.UI}>User Interface</td>
            <td><input type="radio" value="4" name="UI" onChange={this.updateState}/></td>
            <td><input type="radio" value="3" name="UI" onChange={this.updateState} /></td>
            <td><input type="radio" value="2" name="UI" onChange={this.updateState} /></td>
            <td><input type="radio" value="1" name="UI" onChange={this.updateState} /></td>
          </tr>
          <tr>
            <td className="form-group first-col" value={this.state.Prod_Catalog}>Products Catalog</td>
            <td><input type="radio" value="4" name="Prod_Catalog" onChange={this.updateState}/></td>
            <td><input type="radio" value="3" name="Prod_Catalog" onChange={this.updateState}/></td>
            <td><input type="radio" value="2" name="Prod_Catalog" onChange={this.updateState}/></td>
            <td><input type="radio" value="1" name="Prod_Catalog" onChange={this.updateState}/></td>
          </tr>
          <tr>
            <td className="form-group first-col" >Accessibility/Ease of use</td>
            <td><input type="radio" value="4" name="Acc_Investors"  onChange={this.updateState}/></td>
            <td><input type="radio" value="3" name="Acc_Investors"  onChange={this.updateState}/></td>
            <td><input type="radio" value="2" name="Acc_Investors"  onChange={this.updateState}/></td>
            <td><input type="radio" value="1" name="Acc_Investors"  onChange={this.updateState}/></td>
          </tr>
          <tr>
            <td className="form-group first-col" >Experience</td>
            <td><input type="radio" value="4" name="Experience"  onChange={this.updateState}/></td>
            <td><input type="radio" value="3" name="Experience"  onChange={this.updateState}/></td>
            <td><input type="radio" value="2" name="Experience"  onChange={this.updateState}/></td>
            <td><input type="radio" value="1" name="Experience"  onChange={this.updateState}/></td>
          </tr>
          </tbody>
        </table>
        <h4>Feel free to add any other comments or suggestions:</h4>
        <textarea rows="5" name="message" onChange={this.updateState} value={this.state.message}></textarea>
        <small>* The information given within the Feedback Form will be used for service improvement only and are strictly confidential.</small>
        <div className="form-group btn-block">
          <button type="submit" onClick={this.handleLogin} >Send Feedback</button>
        </div>
      </form>
    </div>

        )
    }
}

export default Reviews;