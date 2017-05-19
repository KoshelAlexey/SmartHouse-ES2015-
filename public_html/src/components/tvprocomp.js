import React from "react";
import ReactDOM from "react-dom";

import ActionButton from "../subcomponents/actionbutton";
import OnOffButton from "../subcomponents/onoffbutton";

import TvComp from "./tvcomp";

export default class TvProComp extends TvComp {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        this.state.min = 0;
        this.state.sec = 0;
        this.state.timer = [0,0];
        this.setTime = this.setTime.bind(this);
        this.setMS = this.setMS.bind(this);
        this.getTime = this.getTime.bind(this);
    };
    setMS(e){
        switch (e.target.id){
            case "min":
                this.setState({min:e.target.value});
            break;
            case "sec":
                this.setState({sec:e.target.value});
            break;
        }
    };
    setTime(){
        this.state.obj.setTimer(this.state.min,this.state.sec)
        this.setState({min:0,sec:0});
        this.getTime();
    };
    getTime(){
        let tid = setInterval(()=>{
            this.state.timer = this.state.obj.getTimer();
            if(this.state.timer === undefined){
                this.setState({timer:[0,0],obj:this.props.obj});
                clearInterval(tid);
            }
            else{
                this.setState({obj:this.props.obj});

            }
        },1000);
    };

    render(){
        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table className="mt">
                    <tbody>
                        <tr>
                            <td  rowSpan="2" className="status" id="status">
                                <output name="name" className="out" id="outstate">Brightness of tv:{this.state.obj.brightness}</output>
                                <output name="name" className="out" id="outtimer">Time left: {this.state.timer[0]}m {this.state.timer[1]}s</output>
                            </td>

                            <td id="name"><output name="name" className="out" id="outname">{this.state.obj.name}</output></td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div className="tvpro icon"  ></div></td>
                        </tr>
                        <tr>
                            <td  rowSpan="4" id="control">
                                <table className="ct">
                                    <tbody>
                                        <tr>
                                            <td className="cd"><ActionButton action={this.state.obj.prevChanel} callback={this.refresh} name="&#60;&#60;P"/></td>
                                            <td className="cd"><ActionButton action={this.state.obj.nextChanel} callback={this.refresh} name="P&#62;&#62;"/></td>
                                            <td className="cd"><output name="name" className="outtv" id="outch">{this.state.obj.currentChanel}</output></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><ActionButton action={this.state.obj.decriaseVol} callback={this.refresh} name="Vol-"/></td>
                                            <td className="cd"><ActionButton action={this.state.obj.increaseVol} callback={this.refresh} name="Vol+"/></td>
                                            <td className="cd" ><output name="name" className="outtv" id="outvol">{this.state.obj.currentVol}</output></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><button type="button" onClick={this.setBri}>Low</button></td>
                                            <td className="cd"><button type="button" onClick={this.setBri}>Normal</button></td>
                                            <td className="cd"><button type="button" onClick={this.setBri}>High</button></td>
                                        </tr>
                                        <tr className="out" >
                                            <td className="cd ">Set timer:</td>
                                            <td className="cd "><input type="number" id="min" step="1" min="1" max="60" value={this.state.min} onChange={this.setMS}></input>
                                                                <input type="number" id="sec" step="1" min="1" max="60" value={this.state.sec} onChange={this.setMS}></input>
                                            </td>
                                            <td className="cd "><button type="button" onClick={this.setTime}>Set</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                        <td rowSpan="2" id="on" onClick={this.refresh}><OnOffButton obj={this.state} /></td>
                        </tr>
                        <tr>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>);
    };
};

