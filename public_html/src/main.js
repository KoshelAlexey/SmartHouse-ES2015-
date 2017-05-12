"use strict";

import React from "react";
import ReactDOM from "react-dom";

import MainRout from "./components/mainrout";

import {Store} from "./store/store";

import "./css/components.css";
import "./css/view.css";

    let s = new Store();

ReactDOM.render(<MainRout store={s}/>, document.getElementById('center'));