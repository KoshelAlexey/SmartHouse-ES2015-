import React from "react";
import ReactDOM from "react-dom";

export default class OnOffButton extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.obj;
        this.onOff = this.onOff.bind(this);
    }
    onOff(){
        if(this.state.obj.currentOnOff !== undefined){
            this.state.obj.onOff();
            this.setState({obj:this.props.obj.obj});
        }

    }
    render(){
        if(this.state.obj.currentOnOff === false || this.state.obj.workIndication === false){
            return <div className="OffButton" onClick={this.onOff}></div>;
        }
        else{
            return <div className="OnButton" onClick={this.onOff}></div>;
        }
    }
};
