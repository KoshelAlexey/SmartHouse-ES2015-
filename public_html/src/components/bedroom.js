import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

export default class Bedroom extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props;

    }
    render(){
        return(
            <div>Bedroom</div>
        )
    }
}