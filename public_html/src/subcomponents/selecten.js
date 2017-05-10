import React from "react";
import ReactDOM from "react-dom";

export default class En extends React.Component {
        constructor(props){
            super(props);
            this.state={name:this.props.name};
        }
    render(){
        return <option>{this.state.name}</option>
    }
}