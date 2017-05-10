import React from "react";
import ReactDOM from "react-dom";

import OnOffButton from "../subcomponents/onoffbutton";

export default class TvComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.setBri = this.setBri.bind(this);
        this.ren = this.ren.bind(this);
    };
    inc(){
        this.state.obj.increaseVol();
        this.setState({obj:this.props.obj});
    };
    dec(){
        this.state.obj.decriaseVol();
        this.setState({obj:this.props.obj});
    };
    prev(){
        this.state.obj.prevChanel();
        this.setState({obj:this.props.obj});
    };
    next(){
        this.state.obj.nextChanel();
        this.setState({obj:this.props.obj});
    };
    setBri(e){
        switch (e.target.textContent){
            case "Low":
                this.state.obj.setLowBrightness();
            break;
            case "Normal":
                this.state.obj.setNormalBrightness();
            break;
            case "High":
                this.state.obj.setHighBrightness();
            break;
        }
        this.setState({obj:this.props.obj});
    };
    ren(){
        this.setState({obj:this.props.obj});
    }

    render(){

        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table className="mt">
                    <tbody>
                        <tr>
                            <td  rowSpan="2" className="status" id="status">
                                <output name="name" className="out" id="outstate">Brightness of tv:{this.state.obj.brightness}</output>

                            </td>

                            <td id="name"><output name="name" className="out" id="outname">{this.state.obj.name}</output></td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div className="tv icon"  ></div></td>
                        </tr>
                        <tr>
                            <td  rowSpan="4" id="control">
                                <table className="ct">
                                    <tbody>
                                        <tr>
                                            <td className="cd"><button type="button" onClick={this.prev}>&#60;&#60;P</button></td>
                                            <td className="cd"><button type="button" onClick={this.next}>P&#62;&#62;</button></td>
                                            <td className="cd"><output name="name" className="outtv" id="outch">{this.state.obj.currentChanel}</output></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><button type="button" onClick={this.dec}>Vol-</button></td>
                                            <td className="cd"><button type="button" onClick={this.inc}>Vol+</button></td>
                                            <td className="cd" ><output name="name" className="outtv" id="outvol">{this.state.obj.currentVol}</output></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><button type="button" onClick={this.setBri}>Low</button></td>
                                            <td className="cd"><button type="button" onClick={this.setBri}>Normal</button></td>
                                            <td className="cd"><button type="button" onClick={this.setBri}>High</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                        <td rowSpan="2" id="on" onClick={this.ren}><OnOffButton obj={this.state} /></td>
                        </tr>
                        <tr>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>);
    }
}