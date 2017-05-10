"use strict";

export class Jalousie {
    constructor(name = "Unknown Name", type = "Unknown Type"){
        this._name = ((name)=>{ if(name.length<=6 ){return name;}else{return "Device";}})(name);
        this._type = type;
        this._state = 0;
        this._fullInfo = {};
    };
    get fullInfo() {
        this._fullInfo.Name = this._name;
        this._fullInfo.Status = this._state+"%";
        return this._fullInfo;
    };
    get state() {
        return this._state;
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
        if(this._name.length <= 6 && String(s)){
            this._name = s;
        }
        else{
            this._name = "Device";
        }
    };
    openJal() {
        this._state = 0;
    };
    closeJal() {
        this._state = 100;
    };
    upJal() {
        if(this._state !== 0){
            this._state -= 25;
        }
    };
    downJal() {
        if(this._state !== 100){
            this._state += 25;
        }
    };

};