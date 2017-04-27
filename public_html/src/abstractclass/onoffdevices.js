"use strict";

export class OnOffDevices{
    constructor(name = "Unknown Name", type = "Unknown Type") {
        this._type = type;
        this._name = name;        
        this._currentOnOff = false;
        this._fullInfo = {};
    };
    get currentOnOff() {
        return this._currentOnOff;
    };    
    get fullInfo() {
        this._fullInfo.Name = this._name;
        this._fullInfo.Status = this._currentOnOff;
        return this._fullInfo;
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
    onOff() {
        if(this._currentOnOff === false){
            this._currentOnOff = true;                    
        }
        else{
            this._currentOnOff = false;                    
        }       
    };
    
};