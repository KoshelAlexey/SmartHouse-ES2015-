import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

export default class Kitchen extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.maps;

    }
    render(){console.dir(this.state);
        return(

            <div>Kitchen</div>
        )
    }
}