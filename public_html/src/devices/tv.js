"use strict";
import {MultimediaDevices} from "./../abstractclass/multimediadevices";

export class Tv extends MultimediaDevices {
    constructor(name, type) {
        super(name, type);
        this._brightness = "Normal";
    };
    get brightness() {
        return this._brightness;
    };
    get fullInfo() {
        this._fullInfo.Brightness = this._brightness;
        return this._fullInfo;
    };
    setLowBrightness() {
        if(this._currentOnOff === true){
            this._brightness = "Low";
        }
    };
    setNormalBrightness() {
        if(this._currentOnOff === true){
            this._brightness = "Normal";
        }
    };
    setHighBrightness() {
        if(this._currentOnOff === true){
            this._brightness = "High";
        }
    };

};