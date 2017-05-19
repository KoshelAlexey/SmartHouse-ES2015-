import React from "react";
import ReactDOM from "react-dom";

import ActionButton from "../subcomponents/actionbutton";
import OnOffButton from "../subcomponents/onoffbutton";

export default class FloorComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};        
        this.state.obj.upTemp =this.state.obj.upTemp.bind(this.state.obj);
        this.state.obj.downTemp =this.state.obj.downTemp.bind(this.state.obj);
        this.state.obj.maxTemp =this.state.obj.maxTemp.bind(this.state.obj);
        this.state.obj.minTemp =this.state.obj.minTemp.bind(this.state.obj);
        this.refresh = this.refresh.bind(this);
    };
    
    refresh(){        
        this.setState({obj:this.props.obj});
    };

    render(){
        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table className="mt">
                    <tbody>
                        <tr>
                            <td  rowSpan="2" className="status" id="status"><output name="name" className="out" id="outstate">Floor temperature:{this.state.obj.currentTemp}&#8451;</output></td>

                            <td id="name"><output name="name" className="out" id="outname">{this.state.obj.name}</output></td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div className="floor icon"  ></div></td>
                        </tr>
                        <tr>
                            <td  rowSpan="4" id="control">
                                <table className="ct">
                                    <tbody>
                                        <tr>
                                            <td className="cd"><ActionButton action={this.state.obj.downTemp} callback={this.refresh} name="Decrease"/></td>
                                            <td className="cd"><ActionButton action={this.state.obj.upTemp} callback={this.refresh} name="Increase"/></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><ActionButton action={this.state.obj.minTemp} callback={this.refresh} name="Min t&#8451;"/></td>
                                            <td className="cd"><ActionButton action={this.state.obj.maxTemp} callback={this.refresh} name="Max t&#8451;"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                        <td rowSpan="2" id="on"><OnOffButton obj={this.state}/></td>
                        </tr>
                        <tr>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>);
    };
};