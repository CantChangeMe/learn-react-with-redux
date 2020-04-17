import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component{
 
  // state = {
  //   count:0
  // }
  
  // onKeyUp =()=>{
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }

  // onKeyDown =()=>{
  //   this.setState({
  //     count:this.state.count-1
  //   })
  // }

  render(){
    console.log("FDFDFVivek",JSON.stringify(this.props.onKeyUp))
  return (
    <div className="App">
      <h1>Count: {this.props.someValue}</h1>
      <button onClick={this.props.onKeyUp}>OnKeyUp</button>
      <br></br>
      <br></br>
      <button onClick={this.props.onKeyDown}>OnKeyDown</button>
    </div>

  );
  }
}

const mapStateToProps= (state) =>{
  console.log("VCVCVC",JSON.stringify(state.count));
  return({
    someValue:state.count
  })
}

 const mapDispatchToProps = (dispatch)=>{
   return(
   {
   onKeyUp:()=>dispatch({type:"OnKeyUp"}),
   onKeyDown:()=>dispatch({type:"OnKeyDown"})
   })
 }

export default connect(mapStateToProps,mapDispatchToProps)(App);
