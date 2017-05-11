import React from "react";
import ReactDOM from "react-dom";

import OnOffButton from "../subcomponents/onoffbutton";

export default class JalousieComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        console.dir(this.state);
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    };

    inc(){
        this.state.obj.upJal();
        this.setState({obj:this.props.obj});
    };
    dec(){
        this.state.obj.downJal();
        this.setState({obj:this.props.obj});
    };
    open(){
        this.state.obj.openJal();
        this.setState({obj:this.props.obj});
    };
    close(){
        this.state.obj.closeJal();
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
                                            <td className="cd"><button type="button" onClick={this.dec}>Decrease</button></td>
                                            <td className="cd"><button type="button" onClick={this.inc}>Increase</button></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><button type="button" onClick={this.close}>Close</button></td>
                                            <td className="cd"><button type="button" onClick={this.open}>Open</button></td>
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