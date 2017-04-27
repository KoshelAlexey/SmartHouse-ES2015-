"use strict";

import {TempDevices} from "./../abstractclass/tempdevices";

export class Fridge extends TempDevices{
    constructor(name, type) {
        super(name, type);
        this._doorState = false;
        this._openIndication = false;
        this._currentTemp = 3;
    };
    get doorState() {
        return _doorState;
    };
    get openIndication() {
        return _openIndication;
    };
    get fullInfo() {        
        this._fullInfo.Door = this._doorState;
        this._fullInfo.Indication = this._openIndication;
        return this._fullInfo;
    };
    openDoor() {
        this._doorState = true;
        this._openIndication = true;
    };
    closeDoor() {
        this._doorState = false;
        this._openIndication = false;
    };
    upTemp() {
        if(this._currentTemp <8){
            super.upTemp();
        }
    };
    downTemp() {
        if(this._currentTemp >-1){
            super.downTemp();
        }
    };
    
};