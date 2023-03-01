import React from 'react';

class Demo extends React.Component{
    state = {location : "A", count : 1};
    shouldComponentUpdate(newProps, newState){
        console.log("shouldComponentUpdate");
        console.log("state", this.state, newState);
        return this.state.location !== newState.location || newState.count === 6;

    }
    //every component should have a render method
    render(){
        console.log("render called", this.state);
        const name = "mike";
        //every render should return something
        return(
            //Parent 
            <div>
                <h1> Demo Component</h1>
                <p> Try More</p>
                <p> Hi {name}</p>
                {this.state.count > 5 ? <p>hello from {name}</p> : null}
                <button onClick={() => this.setState({count:this.state.count+1})}>Increment</button>
                <p> {8+9}</p>
                <p> {name.toUpperCase()}</p>
                <button onClick={()=>this.setState({location:"A"})}> A </button>
                <button onClick={()=>this.setState({location:"B"})}> B </button>
            </div>
            
        )
    }
}
export default Demo;