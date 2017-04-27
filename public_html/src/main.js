"use strict";

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
import {Control} from "./control";
import {Farm} from "./farm/farm";

import {kitchen} from "./abstractclass/collections";
import {bedroom} from "./abstractclass/collections";
import {hall} from "./abstractclass/collections";
import {hallway} from "./abstractclass/collections";


            let f = new Farm();
            f.addDevices("C1","Conditioning",kitchen);
            f.addDevices("C1","Conditioning",hall);
            f.addDevices("C1","Conditioning",hall);
            f.addDevices("C1","Conditioning",bedroom);
            f.addDevices("C1","Conditioning",bedroom);


            let l = new Lamp("L1","lamp");

            let v = new Control(l);
            v.go();
            let t = new Tv("Tv1","tv");
            let tp = new TvPro("Tv2","tv");
            let r = new Radio("R1","radio",radioList);
            let j = new Jalousie("jal", "jalousie");
            let fl = new Floor("FL","tempfloor");
            let fr = new Fridge("fr1", "fridge");
            let c = new Conditioning("con1", "conditioning", condList);


import React from "react";