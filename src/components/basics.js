import React, { Component } from 'react';
import Child from "./child";
import basics from "./basics.css"
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry"

class Basics extends Component {
    state = {
        arr: [
            { "name": "komal", "age": "28" },
            { "name": "sdjkf", "age": "22" },
            { "name": "komalnfdk", "age": "25" }
        ],
        show: false
    }

    applyEvent = () => {
        console.log("update value");
        this.setState({
            arr: [
                { "name": ".....", "age": "18" },
                { "name": "sdj..kf", "age": "12" },
                { "name": "koma........lnfdk", "age": "15" }
            ]
        })
        this.setState({ show: true })
    }



    render() {
        // const rnd = Math.random();

        // if (rnd > 0.7) {
        //     throw new Error("somthing went roung");
        // }
        return (
            <ErrorBoundry>
                <div className="container">
                    <button className="but" onClick={() => this.applyEvent()}>Click Event</button>
                    {
                        this.state.show ?
                            <div>
                                <h1>Hi I am komal</h1>
                                <p>Hello jiiiii........................</p>

                                <Child name={this.state.arr[0].name} age={this.state.arr[0].age} />
                                <Child name={this.state.arr[1].name} age={this.state.arr[1].age} />
                                <Child name={this.state.arr[2].name} age={this.state.arr[2].age} />
                            </div> : null
                    }
                    <div>{this.state.arr.map(p => <Child name={p.name} age={p.age} />)}</div>
                </div>
            </ErrorBoundry>
        );
    }
}

export default Basics;