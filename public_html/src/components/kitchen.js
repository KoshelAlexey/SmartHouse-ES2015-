import React from "react";
import ReactDOM from "react-dom";

import LampComp from "./lampcomp";
import JalousieComp from "./jalousiecomp";
import FloorComp from "./floorcomp";
import ConditioningComp from "./conditioningcomp";
import TvComp from "./tvcomp";
import TvProComp from "./tvprocomp";
import FridgeComp from "./fridgecomp";
import RadioComp from "./radiocomp";
import StoveComp from "./stovecomp";

export default class Kitchen extends React.Component{
    constructor(props){
        super(props);
        this.state={room:this.props.room};
    }
    render(){
            return(<div>
                {this.state.room.map((obj,ind)=>{
                    switch (obj.type){
                        case "Lamp":
                            return <LampComp obj={obj} key={ind}/>
                        break;
                        case "Jalousie":
                            return <JalousieComp obj={obj} key={ind}/>
                        break;
                        case "Floor":
                            return <FloorComp obj={obj} key={ind}/>
                        break;
                        case "Conditioning":
                            return <ConditioningComp obj={obj} key={ind}/>
                        break;
                        case "Tv":
                            return <TvComp obj={obj} key={ind}/>
                        break;
                        case "TvPro":
                            return <TvProComp obj={obj} key={ind}/>
                        break;
                        case "Fridge":
                            return <FridgeComp obj={obj} key={ind}/>
                        break;
                        case "Radio":
                            return <FridgeComp obj={obj} key={ind}/>
                        break;
                        case "Stove":
                            return <FridgeComp obj={obj} key={ind}/>
                        break;
                    }
                                    }
                        )
                }</div>
            )
    }
}