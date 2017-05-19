import React from "react";
import ReactDOM from "react-dom";


export default class ActionButton extends React.Component {
    constructor(props){
    super(props);      
    this.state = {};    
    this.state.action = this.props.action;
    this.state.name = this.props.name;
    this.state.callback = this.props.callback;
    this.click = this.click.bind(this);    
    };
    
    click(){        
        this.state.action();
        this.state.callback();
    };
    
    render(){
        return(
                <button type="button" onClick={this.click}>{this.state.name}</button>)
    };
};