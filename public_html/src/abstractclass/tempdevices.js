"use strict";

export class TempDevices {
    constructor(name = "Unknown Name", type = "Unknown Type"){
        this._type = type;
        this._name = name;        
        this._currentTemp;
        this._fullInfo = {};
    };
    get currentTemp(){
        return _currentTemp;
    };
    get fullInfo() {
        this._toStringInfo.Name = this._name;
        this._toStringInfo.Temp = this._currentTemp + "\u2103";
        return this._toStringInfo;
    };
    get type() {
        return this._type;
    };
    set type(s) {
        if(this._type === "Unknown Type" && String(s)){
            this._type = s;            
        }
    };
    get name() {
        return this._name;
    };
    set name(s) {
        if(this._name === "Unknown Name" && String(s)){
            this._name = s;                
        }
    };    
    upTemp() {
        this._currentTemp++;
    };
    downTemp() {
        this._currentTemp--;
    };
    
};

