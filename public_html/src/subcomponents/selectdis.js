import React from "react";
import ReactDOM from "react-dom";

export default class Dis extends React.Component {
        constructor(props){
            super(props);
            this.state={name:this.props.name};
        }
    render(){
        return <option disabled>{this.state.name}</option>
    }
}