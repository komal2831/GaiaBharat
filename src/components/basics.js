import React, { Component } from 'react';
import Child from "./child";

class Basics extends Component {
    state={
        arr : [
            {"name" : "komal", "age":"28"},
            {"name" : "sdjkf", "age":"22"},
            {"name" : "komalnfdk", "age":"25"}
        ]
    }

    applyEvent = () => {
        console.log("update value");
        this.setState({
            arr : [
                {"name" : ".....", "age":"18"},
                {"name" : "sdj..kf", "age":"12"},
                {"name" : "koma........lnfdk", "age":"15"}
            ]
        })
    }
    
    render() { 
        return (
            <div className="container">
                <h1>Hi I am komal</h1>
                <p>Hello jiiiii........................</p>
                <button onClick={()=>this.applyEvent()}>Event</button>
                <Child name = {this.state.arr[0].name} age={this.state.arr[0].age} />
                <Child name = {this.state.arr[1].name} age={this.state.arr[1].age} />
                <Child name = {this.state.arr[2].name} age={this.state.arr[2].age} />
            </div>
          );
    }
}
 
export default Basics;