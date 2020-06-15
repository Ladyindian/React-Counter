import React from "react";
import ReactDOM from "react-dom";

const App = props => {
  return <NumberOfStudent />;
};

class NumberOfStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enrolledStudent: 0,
      addToStudent: "",
      waitlistedStudent: 0,
      addToWaitlist: ""
    };
  }    
    
  
  

  incrementenrolledStudent() {
    this.setState({
      enrolledStudent: this.state.enrolledStudent + 1,
      
    });
}
  incrementwaitList() {
    this.setState({
      waitlistedStudent: this.state.waitlistedStudent + 1,
      
    });
}


  addMulToStudent() {
    this.setState({
      enrolledStudent:
        this.state.enrolledStudent + parseInt(this.state.addToStudent),
      
    });
  }

  addMulToWaitlist(){
      this.setState({
        waitlistedStudent:
        this.state.waitlistedStudent + parseInt(this.state.addToWaitlist)   
      });
  }

  render() {
    return (
      <div>
        <h1> Enrolled Students: {this.state.enrolledStudent} </h1>

        <button onClick={this.incrementenrolledStudent.bind(this)}>Add 1 Enrolled Student</button>

        <h3> Add Multiple Enrolled Students: </h3>

        <input type="number"onChange={event =>this.setState({addToStudent: event.target.value})} value=
        {this.state.addToStudent}/>
        <button onClick={this.addMulToStudent.bind(this)}>Increase Students</button>
        

        <h1>Waitlisted Students:{this.state.waitlistedStudent} </h1>

        <button onClick={this.incrementwaitList.bind(this)}>Add 1 Waitlisted Student</button>
         
        <h3> Add Multiple Waitlisted Students:</h3>

        <input type="number"onChange={event =>this.setState({addToWaitlist:event.target.value})} value=
        {this.state.addToWaitlist}/>    
        <button onClick={this.addMulToWaitlist.bind(this)}>Increase Students</button>
        
      
      </div>
    
    );
    }
}

ReactDOM.render(<App />, document.getElementById("root")