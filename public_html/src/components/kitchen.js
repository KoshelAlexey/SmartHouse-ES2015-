import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Lamp from "./lamp";
import MainTable from "./maintable";

export default class Kitchen extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props;

    }
    render(){
        let dev = [];
        for(let a of this.state.map.values()){
            dev.push( a);
        }
        console.dir(this.state);
        console.dir(dev);
            return(<div>
                {dev.map((d,ind)=>{
                    if(d.type == "Lamp"){
                        return <Lamp d={d} key={ind}/>
                    }
                                   }
                        )
                }</div>
        )
    }
}