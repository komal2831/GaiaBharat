import React from "react"

const Child = (props) =>{
    return <div>
        <h1>My name is {props.name}. I am {props.age} year old.</h1>
    </div>
}

export default Child;