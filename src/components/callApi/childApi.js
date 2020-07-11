import React, { Component } from 'react';

class ChildApi extends Component {
    state = {
        data : this.props.title
    }
    render() { 
        // console.log(this.state.data);
        return ( 
            <div>
               " {this.state.data}"
            </div>
         );
    }
}
 
export default ChildApi;