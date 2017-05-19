import React from "react";
import ReactDOM from "react-dom";

import ActionButton from "../subcomponents/actionbutton";
import OnOffButton from "../subcomponents/onoffbutton";

export default class TvComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        this.setBri = this.setBri.bind(this);
        this.state.obj.increaseVol =this.state.obj.increaseVol.bind(this.state.obj);
        this.state.obj.decriaseVol =this.state.obj.decriaseVol.bind(this.state.obj);
        this.state.obj.prevChanel =this.state.obj.prevChanel.bind(this.state.obj);
        this.state.obj.nextChanel =this.state.obj.nextChanel.bind(this.state.obj);
        this.refresh = this.refresh.bind(this);
    };

    refresh(){
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

    render(){

        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table className="mt">
                    <tbody>
                        <tr>
                            <td  rowSpan="2" className="status" id="status">
                                <output name="name" className="out" id="outstate">Brightness of TV:{this.state.obj.brightness}</output>

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