import React from "react";
import ReactDOM from "react-dom";



import OnOffButton from "../subcomponents/onoffbutton";

export default class LampComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        this.setTemp = this.setTemp.bind(this);
    }
    setTemp(e){
        switch (e.target.textContent){
            case "Cold":
                this.state.obj.setColdTemp();
            break;
            case "Neutral":
                this.state.obj.setNeutralTemp();
            break;
            case "Warm":
                this.state.obj.setWarmTemp();
            break;
        }
        this.setState({obj:this.props.obj});
    }

    render(){

        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table className="mt">
                    <tbody>
                        <tr>
                            <td  rowSpan="2" className="status" id="status"><output name="name" className="out" id="outstate">Light Temperature:{this.state.obj.lightTemp}</output></td>

                            <td id="name"><output name="name" className="out" id="outname">{this.state.obj.name}</output></td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div className="lamp icon"  ></div></td>
                        </tr>
                        <tr>
                            <td  rowSpan="4" id="control">
                                <table className="ct">
                                    <tbody>
                                        <tr>
                                            <td colSpan="3">Choose ligth temperature</td>
                                        </tr>
                                        <tr>
                                            <td><button className="tempBut" type="button" onClick={this.setTemp}>Cold</button></td>
                                            <td><button className="tempBut" type="button" onClick={this.setTemp}>Neutral</button></td>
                                            <td><button className="tempBut" type="button" onClick={this.setTemp}>Warm</button></td>
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
