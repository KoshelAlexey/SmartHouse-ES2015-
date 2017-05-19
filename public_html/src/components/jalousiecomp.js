import React from "react";
import ReactDOM from "react-dom";

import ActionButton from "../subcomponents/actionbutton";
import OnOffButton from "../subcomponents/onoffbutton";

export default class JalousieComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};        
        this.state.obj.upJal =this.state.obj.upJal.bind(this.state.obj);
        this.state.obj.downJal =this.state.obj.downJal.bind(this.state.obj);
        this.state.obj.openJal =this.state.obj.openJal.bind(this.state.obj);
        this.state.obj.closeJal =this.state.obj.closeJal.bind(this.state.obj);
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
                            <td  rowSpan="2" className="status" id="status"><output name="name" className="out" id="outstate">Closing percentage:{this.state.obj.state}%</output></td>

                            <td id="name"><output name="name" className="out" id="outname">{this.state.obj.name}</output></td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div className="jal icon"  ></div></td>
                        </tr>
                        <tr>
                            <td  rowSpan="4" id="control">
                                <table className="ct">
                                    <tbody>
                                        <tr>
                                            <td className="cd"><ActionButton action={this.state.obj.downJal} callback={this.refresh} name="Decrease"/></td>
                                            <td className="cd"><ActionButton action={this.state.obj.upJal} callback={this.refresh} name="Increase"/></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><ActionButton action={this.state.obj.closeJal} callback={this.refresh} name="Close"/></td>
                                            <td className="cd"><ActionButton action={this.state.obj.openJal} callback={this.refresh} name="Open"/></td>
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