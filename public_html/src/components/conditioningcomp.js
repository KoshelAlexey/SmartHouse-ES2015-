import React from "react";
import ReactDOM from "react-dom";



import OnOffButton from "../subcomponents/onoffbutton";

export default class LampComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
        this.state.selval = "0";
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.onChange = this.onChange.bind(this);
    };

    inc(){
        this.state.obj.upTemp();
        this.setState({obj:this.props.obj});
    };
    dec(){
        this.state.obj.downTemp();
        this.setState({obj:this.props.obj});
    };
    start(){
        this.state.obj.startProg();
        this.setState({obj:this.props.obj});
    };
    stop(){
        this.state.obj.stopProg();
        this.setState({obj:this.props.obj});
    };
    onChange(event){
        this.state.obj.setProg(event.target.value);
        this.setState({selval: event.target.value});
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
                                            <td className="cd"><button type="button" onClick={this.dec}>Decrease</button></td>
                                            <td className="cd"><button type="button" onClick={this.inc}>Increase</button></td>
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
                                            <td className="cd"><button type="button" onClick={this.stop}>Stop</button></td>
                                            <td className="cd"><button type="button" onClick={this.start}>Start</button></td>
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