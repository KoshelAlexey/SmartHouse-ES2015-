import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Kitchen from "./kitchen";
import Bedroom from "./bedroom";
import Hall from "./hall";
import Hallway from "./hallway";


export default class MainRout extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.maps;
        this.state.farm = this.props.farm;
        this.state.inpval = "Enter Name";
        this.state.selval = "choo";
        this.state.r = 0;

        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.farm = this.farm.bind(this);
        this.r=1;
        this.re = this.re.bind(this);

    }
    onFocus(){
        this.setState({inpval: ""});
    }
    onChange(event){
        switch (event.currentTarget.localName){
            case "input":
                this.setState({inpval: event.target.value});
            break;

            case "select":
                this.setState({selval: event.target.value});
            break;
        }
    }
    farm(){

        let p = window.location.pathname;
        switch(p){
            case "/kitchen":
                 this.state.farm.addDevices(this.state.inpval,this.state.selval,this.state.kitchen);
            break;
            case "/bedroom":
                this.state.farm.addDevices(this.state.inpval,this.state.selval,this.state.bedroom);
            break;
            case "/hall":
                this.state.farm.addDevices(this.state.inpval,this.state.selval,this.state.hall);
            break;
            case "/hallway":
                this.state.farm.addDevices(this.state.inpval,this.state.selval,this.state.hallway);
            break;
        }
        this.setState({inpval: "Enter Name"});
        this.setState({selval:"choo"});

    }
    re(){
        this.r++;
        this.setState({r:this.r});
    }

    render(){
        const WrapK = ()=>{
            return(<Kitchen map={this.props.maps.kitchen}/>)
        }
        const WrapB = ()=>{
            return(<Bedroom map={this.props.maps.bedroom}/>)
        }
        const WrapH = ()=>{
            return(<Hall map={this.props.maps.hall}/>)
        }
        const WrapHw = ()=>{
            return(<Hallway map={this.props.maps.hallway}/>)
        }

        return(

                <Router history={createHistory()}>

                    <div>
                        <form>
                        <div className="row rowheader" id="rowheader">
                            <div className="col-md-12 colheader" id="colheader">
                              <div className="divheader" id="divheader"></div>
                            </div>
                        </div>

                        <div className="row  rowbutton" id="rowbutton">
                            <span className="selectspan">Please, Select Room</span>
                            <div className="col-xs-12 colselect">
                                <div className="col-xs-3  ">
                                    <div className="pad">
                                    <span>Kitchen</span>
                                    <br />
                                    <Link to="/kitchen">
                                        <button type="button"
                                            className="roombutton"
                                            onClick={this.re}
                                            name="kitchen"
                                            >Open Room
                                        </button>
                                    </Link>
                                    </div>
                                </div>

                                <div className="col-xs-3 ">
                                    <div className="pad">
                                    <span>Bedroom</span>
                                    <br />
                                    <Link to="/bedroom">
                                        <button type="button"
                                            className="roombutton"
                                            name="bedroom"
                                            onClick={this.re}
                                            >Open Room
                                        </button>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-xs-3 ">
                                    <div className="pad">
                                    <span>Hall</span>
                                    <br />
                                    <Link to="/hall">
                                        <button type="button"
                                            className="roombutton"
                                            name="hall"
                                            onClick={this.re}
                                            >Open Room
                                        </button>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-xs-3 ">
                                    <div className="pad">
                                    <span>Hallway</span>
                                    <br />
                                    <Link to="/hallway">
                                        <button type="button"
                                            className="roombutton"
                                            name="hallway"
                                            onClick={this.re}
                                            >Open Room
                                        </button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row addrow">
                            <span className="selectspan" >Add devices to control panel</span>
                            <div >
                                <select className="addmar" value={this.state.selval} onChange={this.onChange}>
                                    <option disabled value="choo">Choose Devices</option>
                                    <option>Conditioning</option>
                                    <option>Floor</option>
                                    <option>Fridge</option>
                                    <option>Jalousie</option>
                                    <option>Lamp</option>
                                    <option>Radio</option>
                                    <option>Stove</option>
                                    <option>Tv</option>
                                    <option>TvPro</option>
                                </select>
                                <input className="addmar"
                                        type="text"
                                        value={this.state.inpval}
                                        onChange={this.onChange}
                                        onFocus={this.onFocus}
                                />
                                <button type='button' className="addbutton addmar" onClick={this.farm}>Add</button>
                            </div>
                        </div>

                        <div className="row  rowmain" id="rowmain">
                            <Route exact path="/" render={() => <div></div>}/>
                            <Route exact path="/kitchen" component={WrapK}/>
                            <Route exact path="/bedroom" component={WrapB}/>
                            <Route exact path="/hall" component={WrapH}/>
                            <Route exact path="/hallway" component={WrapHw}/>
                        </div>
                        </form>
                </div>
                </Router>
        )
    }
}