import React from "react";
import ReactDOM from "react-dom";

import ActionButton from "../subcomponents/actionbutton";
import OnOffButton from "../subcomponents/onoffbutton";

export default class StoveComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        this.state.selval = "0";
        this.state.obj.upTemp =this.state.obj.upTemp.bind(this.state.obj);
        this.state.obj.downTemp =this.state.obj.downTemp.bind(this.state.obj);
        this.state.obj.startProg =this.state.obj.startProg.bind(this.state.obj);
        this.state.obj.stopProg =this.state.obj.stopProg.bind(this.state.obj);
        this.refresh = this.refresh.bind(this);
        this.getTime = this.getTime.bind(this);
        this.onChange = this.onChange.bind(this);
        this.start = this.start.bind(this);
        this.state.timer = "Timer: 00:00:00";
    };

    start(){
        this.state.obj.startProg();
        this.getTime();
    };
    getTime(){
        let tid = setInterval(()=>{
            this.state.timer = this.state.obj.getTimer();
            if(this.state.timer === undefined){
                this.setState({timer:"Timer: 00:00:00",obj:this.props.obj});
                clearInterval(tid);
                this.setState({obj:this.props.obj});
            }
            else{
                this.setState({obj:this.props.obj});
            }
        },1000);
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
                                <output name="name" className="out" id="outstate2">Current programm:{this.state.obj.currentProg}</output>
                                <output name="name" className="out" id="outstate">t&#8451;: {this.state.obj.currentTemp}&#160;&#160;&#160;Time: {this.state.obj.currentTime}</output>
                                <output name="name" className="out" id="outtimer">{this.state.timer}</output>
                            </td>

                            <td id="name"><output name="name" className="out" id="outname">{this.state.obj.name}</output></td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div className="stove icon"  ></div></td>
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
                                            <td className="cd"><ActionButton action={this.start} callback={this.refresh} name="Start"/></td>
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