import React from "react";
import ReactDOM from "react-dom";

export default class MainTable extends React.Component {
    render(){
        return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="location">
                <table>
                    <tbody>
                        <tr>
                            <td  rowSpan="2" id="status">11</td>
                            <td id="name">12</td>
                        </tr>
                        <tr>
                            <td rowSpan="3" id="icon">21</td>
                        </tr>
                        <tr>
                            <td  rowSpan="4" id="control">31</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td rowSpan="2" id="on">OnOffButton </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>;
    }
};