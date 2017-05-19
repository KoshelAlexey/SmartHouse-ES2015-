import React from "react";
import ReactDOM from "react-dom";

import ActionButton from "../subcomponents/actionbutton";
import OnOffButton from "../subcomponents/onoffbutton";

export default class ConditioningComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        this.state.selval = "0";
        this.onChange = this.onChange.bind(this);        
        this.state.obj.upTemp =this.state.obj.upTemp.bind(this.state.obj);
        this.state.obj.downTemp =this.state.obj.downTemp.bind(this.state.obj);
        this.state.obj.startProg =this.state.obj.startProg.bind(this.state.obj);
        this.state.obj.stopProg =this.state.obj.stopProg.bind(this.state.obj);
        this.refresh = this.refresh.bind(this);
    };  
    
    onChange(event){
        this.state.obj.setProg(event.target.value);
        this.setState({selval: event.target.value});
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
                            <td  rowSpan="2" className="status" id="status">
                                <output name="name" className="out" id="outstate">Cooling temperature:{this.state.obj.currentTemp}&#8451;</output>
                                <output name="name" className="out" id="outstate2">Current programm:{this.state.obj.currentProg}</output>
                            </td>

                            <td id="name"><output name="name" className="out" id="outname">{this.state.obj.name}</output></td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div className="cond icon"  ></div></td>
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
                                            <td className="cd" colSpan="2">
                                                <span style={{fontSize:"14px"}}>Prog-s:</span>
                                                <select value={this.state.selval} onChange={this.onChange}>
                                                    {this.state.obj.progList.map((p,ind)=>{return <option value={ind} key={ind}> {p.name}</option>})}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><ActionButton action={this.state.obj.stopProg} callback={this.refresh} name="Stop"/></td>
                                            <td className="cd"><ActionButton action={this.state.obj.startProg} callback={this.refresh} name="Start"/></td>
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
    }
};