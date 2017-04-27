"use strict";

import {TempDevices} from "./../abstractclass/tempdevices";

export class Floor extends TempDevices {
    constructor(name, type) {
        super(name, type);
        this._currentTemp = 30;
    };
    get currentTemp() {
        return _currentTemp;
    };
    upTemp() {
        if(this._currentTemp <35){
            super.upTemp();
        }
    };
    downTemp() {
        if(this._currentTemp >26){
            super.downTemp();
        }
    };
};
