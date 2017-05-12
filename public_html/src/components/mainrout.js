import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Kitchen from "./kitchen";
import Bedroom from "./bedroom";
import Hall from "./hall";
import Hallway from "./hallway";

import En from "../subcomponents/selecten";
import Dis from "../subcomponents/selectdis";


export default class MainRout extends React.Component{
    constructor(props){
        super(props);
        this.state= {store:this.props.store};
        this.state.inpval = "Enter name 6 letter max";
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
                 this.state.store.addDevices(this.state.inpval,this.state.selval,"kitchen");
            break;
            case "/bedroom":
                this.state.store.addDevices(this.state.inpval,this.state.selval,"bedroom");
            break;
            case "/hall":
                this.state.store.addDevices(this.state.inpval,this.state.selval,"hall");
            break;
            case "/hallway":
                this.state.store.addDevices(this.state.inpval,this.state.selval,"hallway");
            break;
        }
        this.setState({inpval: "Enter name 6 letter max"});
        this.setState({selval:"choo"});

    }
    re(){
        this.r++;
        this.setState({r:this.r});
    }

    render(){
        const WrapK = ()=>{
            return(<Kitchen room={this.props.store.rooms.kitchen}/>)
        }
        const WrapB = ()=>{
            return(<Bedroom room={this.props.store.rooms.bedroom}/>)
        }
        const WrapH = ()=>{
            return(<Hall room={this.props.store.rooms.hall}/>)
        }
        const WrapHw = ()=>{
            return(<Hallway room={this.props.store.rooms.hallway}/>)
        }

        const WrapConEn = ()=>{
            return(<En name="Conditioning"/>)
        }
        const WrapFloorEn = ()=>{
            return(<En name="Floor"/>)
        }
        const WrapFridgeEn = ()=>{
            return(<En name="Fridge"/>)
        }
        const WrapFridgeDis = ()=>{
            return(<Dis name="Fridge"/>)
        }
        const WrapJalEn = ()=>{
            return(<En name="Jalousie"/>)
        }
        const WrapJalDis = ()=>{
            return(<Dis name="Jalousie"/>)
        }
        const WrapLampEn = ()=>{
            return(<En name="Lamp"/>)
        }
        const WrapRadioEn = ()=>{
            return(<En name="Radio"/>)
        }
        const WrapRadioDis = ()=>{
            return(<Dis name="Radio"/>)
        }
        const WrapStoveEn = ()=>{
            return(<En name="Stove"/>)
        }
        const WrapStoveDis = ()=>{
            return(<Dis name="Stove"/>)
        }
        const WrapTvEn = ()=>{
            return(<En name="Tv"/>)
        }
        const WrapTvDis = ()=>{
            return(<Dis name="Tv"/>)
        }
        const WrapTvProEn = ()=>{
            return(<En name="TvPro"/>)
        }
        const WrapTvProDis = ()=>{
            return(<Dis name="TvPro"/>)
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
                                    <Route path="/" component={WrapConEn}/>
                                    <Route path="/" component={WrapFloorEn}/>

                                    <Route exact path="/kitchen" component={WrapFridgeEn}/>
                                    <Route exact path="/bedroom" component={WrapFridgeDis}/>
                                    <Route exact path="/hall" component={WrapFridgeDis}/>
                                    <Route exact path="/hallway" component={WrapFridgeDis}/>

                                    <Route exact path="/kitchen" component={WrapJalEn}/>
                                    <Route exact path="/bedroom" component={WrapJalEn}/>
                                    <Route exact path="/hall" component={WrapJalEn}/>
                                    <Route exact path="/hallway" component={WrapJalDis}/>

                                    <Route path="/" component={WrapLampEn}/>

                                    <Route exact path="/kitchen" component={WrapRadioDis}/>
                                    <Route exact path="/bedroom" component={WrapRadioEn}/>
                                    <Route exact path="/hall" component={WrapRadioDis}/>
                                    <Route exact path="/hallway" component={WrapRadioDis}/>

                                    <Route exact path="/kitchen" component={WrapStoveEn}/>
                                    <Route exact path="/bedroom" component={WrapStoveDis}/>
                                    <Route exact path="/hall" component={WrapStoveDis}/>
                                    <Route exact path="/hallway" component={WrapStoveDis}/>

                                    <Route exact path="/kitchen" component={WrapTvEn}/>
                                    <Route exact path="/bedroom" component={WrapTvEn}/>
                                    <Route exact path="/hall" component={WrapTvDis}/>
                                    <Route exact path="/hallway" component={WrapTvDis}/>

                                    <Route exact path="/kitchen" component={WrapTvProDis}/>
                                    <Route exact path="/bedroom" component={WrapTvProDis}/>
                                    <Route exact path="/hall" component={WrapTvProEn}/>
                                    <Route exact path="/hallway" component={WrapTvProDis}/>
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