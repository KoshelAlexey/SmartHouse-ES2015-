"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import MainRout from "./components/mainrout";
//import LampReact from "./components/lamp";

import {radioList} from "./abstractclass/lists";
import {condList} from "./abstractclass/lists";
import {stoveList} from "./abstractclass/lists";
import {Conditioning} from "./devices/conditioning";
import {Floor} from "./devices/floor";
import {Fridge} from "./devices/fridge";
import {Jalousie} from "./devices/jalousie";
import {Lamp} from "./devices/lamp";
import {Radio} from "./devices/radio";
import {Stove} from "./devices/stove";
import {Tv} from "./devices/tv";
import {TvPro} from "./devices/tvpro";

//import {Control} from "./control";

import {Farm} from "./farm/farm";

import {kitchenmap} from "./abstractclass/lists";
import {bedroommap} from "./abstractclass/lists";
import {hallmap} from "./abstractclass/lists";
import {hallwaymap} from "./abstractclass/lists";

    let maps = {
        kitchen:kitchenmap,
        bedroom:bedroommap,
        hall:hallmap,
        hallway:hallwaymap};


            let f = new Farm();
//            f.addDevices("C1","Conditioning",kitchenmap);
//            f.addDevices("C1","Conditioning",hallmap);
//            f.addDevices("C1","Conditioning",hallmap);
//            f.addDevices("C1","Conditioning",bedroommap);
//            f.addDevices("C1","Conditioning",bedroommap);
//            console.dir(kitchenmap);

//            let l = new Lamp("L1","lamp");

//            let v = new Control(l);
//            v.go();

            let t = new Tv("Tv1","tv");
            let tp = new TvPro("Tv2","tv");
            let r = new Radio("R1","radio",radioList);
            let j = new Jalousie("jal", "jalousie");
            let fl = new Floor("FL","tempfloor");
            let fr = new Fridge("fr1", "fridge");
            let c = new Conditioning("con1", "conditioning", condList);

ReactDOM.render(<MainRout maps={maps} farm={f}/>, document.getElementById('center'));
//ReactDOM.render(<LampReact lamp={l.fullInfo}/>, document.getElementById('rowmain'));kitchen={kitchenmap} bedroom={bedroommap} hall={hallmap} hallway={hallwaymap}