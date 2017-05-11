"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import MainRout from "./components/mainrout";

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

import {Farm} from "./farm/farm";

import {kitchenmap} from "./abstractclass/lists";
import {bedroommap} from "./abstractclass/lists";
import {hallmap} from "./abstractclass/lists";
import {hallwaymap} from "./abstractclass/lists";

import "./css/components.css";
import "./css/view.css";

    let maps = {
        kitchen:kitchenmap,
        bedroom:bedroommap,
        hall:hallmap,
        hallway:hallwaymap};

    let f = new Farm();

ReactDOM.render(<MainRout maps={maps} farm={f}/>, document.getElementById('center'));