"use strict";

import {TempDevices} from "./tempdevices";

export class TempDevicesProg extends TempDevices {
    constructor(name, type, list) {
        super(name, type);
        this._progList = list;
        this._currentProg = list[0].name;
        this._currentTemp = list[0].temp;
        this._workIndication = false;
    };
    get currentProg() {
        return _currentProg;
    };
    get currentTemp() {
        return _currentTemp;
    };
    get workIndication(){
        return _workIndication;
    };
    get fullInfo() {        
        this._fullInfo.Programm = this._currentProg;
        this._fullInfo.Indication = this._workIndication;
        return this._fullInfo;
    };
    getProg() {
        return this._progList;
    };
    setProg(a) {
        if(!isNaN(parseFloat(a))&&isFinite(a)){
            if(a < this._progList.length && a >= 0){
                this._currentProg = this._progList[a].name;
                this._currentTemp = this._progList[a].temp;                
            }
        }
    };
    startProg() {
        this._workIndication = true;
    };
    stopProg() {
        this._workIndication = false;
    };
    
};

