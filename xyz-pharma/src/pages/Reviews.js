import React from "react";

class Reviews extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(
            <div className="testbox">
      <form action="/">
        <h1>Online Feedback Form</h1>
        <p>Thank you for taking the time to fill in our online feedback form. By providing us your feedback, you are helping us understand what we do well and what improvements we need to implement.</p>
        <h4>Name</h4>
        <input className="first-name" type="text" name="name" placeholder="First" />
        <input type="text" name="name" placeholder="Last" />
        <h4>Email<span>*</span></h4>
        <input type="text"/>
        <h4>How satisfied were you with:<span>*</span></h4>
        <table>
          <tr>
            <th className="first-col"></th>
            <th>Very Satisfied</th>
            <th>Satisfied</th>
            <th>Unsatisfied</th>
            <th>Very Unsatisfied</th>
          </tr>
          
          <tr>
            <td className="first-col">Key point #2</td>
            <td><input type="radio" value="none" name="point#2" /></td>
            <td><input type="radio" value="none" name="point#2" /></td>
            <td><input type="radio" value="none" name="point#2" /></td>
            <td><input type="radio" value="none" name="point#2" /></td>
          </tr>
          <tr>
            <td className="first-col">Key point #3</td>
            <td><input type="radio" value="none" name="point#3" /></td>
            <td><input type="radio" value="none" name="point#3" /></td>
            <td><input type="radio" value="none" name="point#3" /></td>
            <td><input type="radio" value="none" name="point#3" /></td>
          </tr>
          <tr>
            <td className="first-col">Key point #4</td>
            <td><input type="radio" value="none" name="point#4" /></td>
            <td><input type="radio" value="none" name="point#4" /></td>
            <td><input type="radio" value="none" name="point#4" /></td>
            <td><input type="radio" value="none" name="point#4" /></td>
          </tr>
          <tr>
            <td className="first-col">Key point #5</td>
            <td><input type="radio" value="none" name="point#5" /></td>
            <td><input type="radio" value="none" name="point#5" /></td>
            <td><input type="radio" value="none" name="point#5" /></td>
            <td><input type="radio" value="none" name="point#5" /></td>
          </tr>
        </table>
        <h4>Feel free to add any other comments or suggestions:</h4>
        <textarea rows="5"></textarea>
        <small>* The information given within the Feedback Form will be used for service improvement only and are strictly confidential.</small>
        <div className="btn-block">
          <button type="submit" href="/">Send Feedback</button>
        </div>
      </form>
    </div>

        )
    }
}

export default Reviews;