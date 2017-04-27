"use strict";

import {TempDevicesProg} from "./../abstractclass/tempdevicesprog";

export class Conditioning extends TempDevicesProg {
    constructor(name, type, list) {
        super(name, type, list);        
    };
    upTemp() {
        if(this._currentProg === "Custom" && this._currentTemp < 24){
            super.upTemp();
        }
    };
    downTemp() {
        if(this._currentProg === "Custom" && this._currentTemp > 10){
            super.downTemp();
        }
    };
};


