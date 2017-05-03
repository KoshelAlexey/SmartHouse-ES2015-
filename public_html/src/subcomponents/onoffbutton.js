import React from "react";
import ReactDOM from "react-dom";

export default class OnOffButton extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.lamp;
        this.onOff.bind(this);
    }
    onOff(){
//        console.dir(this.state);
        if(this.state.Status === "true"){
            this.setState({Status:false});
        }
        else{
            this.setState({Status:true});
        }

    }
    render(){
        if(this.state.Status === true){
            return <div className="OnButton" onClick={this.onOff}></div>;
        }
        else{
            return <div className="OffButton" onClick={this.onOff}></div>;
        }
    }
};
//ReactDOM.render(<OnOffButton />, document.getElementById('one'));