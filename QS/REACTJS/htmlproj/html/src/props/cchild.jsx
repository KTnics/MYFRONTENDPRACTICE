import { Component } from "react";
export default class Cchild extends Component{
    render(){
        return(
            <div>
                <h1>my name is {this.props.name},{this.props.age}</h1>
            </div>
        )
    }
}