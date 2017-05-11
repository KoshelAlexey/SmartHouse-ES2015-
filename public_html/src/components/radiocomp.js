import React from "react";
import ReactDOM from "react-dom";

import OnOffButton from "../subcomponents/onoffbutton";

export default class RadioComp extends React.Component {
    constructor(props){
        super(props);
        this.state={obj:this.props.obj};
    }
    render(){
        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table className="mt">
                    <tbody>
                    <tr><td>Component coming soon...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>);
    }
}