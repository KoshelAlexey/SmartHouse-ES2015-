import React from "react";
import ReactDOM from "react-dom";

import MainTRable from "../components/maintable";

//import OnOffButton from "../subcomponents/onoffbutton";

export default class LampReact extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.lamp;
        console.dir(this.state);
    }

    render(){
        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table>
                    <tbody>
                        <tr>
                            <td  rowSpan="2" id="status">11</td>
                            <td id="name">12</td>
                        </tr>
                        <tr>
                        <td rowSpan="3" id="icon" ><div style = {{backgroundImage:"url(./jpg/lamplogo.jpg)", height:"100%",width:"100%"}}></div></td>
                        </tr>
                        <tr>
                            <td  rowSpan="4" id="control">31</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td rowSpan="2" id="on">OnOffButton  </td>
                        </tr>
                        <tr>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>);
    }

};
