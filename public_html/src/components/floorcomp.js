import React from "react";
import ReactDOM from "react-dom";



import OnOffButton from "../subcomponents/onoffbutton";

export default class LampComp extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props;
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.max = this.max.bind(this);
        this.min = this.min.bind(this);
    };

    inc(){
        this.state.obj.upTemp();
        this.setState({obj:this.props.obj});
    };
    dec(){
        this.state.obj.downTemp();
        this.setState({obj:this.props.obj});
    };
    max(){
        this.state.obj.maxTemp();
        this.setState({obj:this.props.obj});
    };
    min(){
        this.state.obj.minTemp();
        this.setState({obj:this.props.obj});
    }

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
                                            <td className="cd"><button type="button" onClick={this.dec}>Decrease</button></td>
                                            <td className="cd"><button type="button" onClick={this.inc}>Increase</button></td>
                                        </tr>
                                        <tr>
                                            <td className="cd"><button type="button" onClick={this.min}>Min t&#8451;</button></td>
                                            <td className="cd"><button type="button" onClick={this.max}>Max t&#8451;</button></td>
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