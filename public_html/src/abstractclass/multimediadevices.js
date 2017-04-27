"use strict";

import {OnOffDevices} from "./onoffdevices";

export class MultimediaDevices extends OnOffDevices{
    constructor(name, type) {
        super(name, type);
        this._currentChanel = 1;
        this._currentVol = 10;
    };
    get currentVol(){
        return this._currentVol;
    };
    get fullInfo() {        
        this._fullInfo.Chanel = this._currentChanel;
        this._fullInfo.Volume = this._currentVol;
        return this._fullInfo;
    };
    get currentChanel() {
        if (this._currentOnOff === true){
            return this._currentChanel;
        }
    };
    set currentChanel(currentChanel) {
        if (this._currentOnOff === true){
            if(!isNaN(parseFloat(currentChanel))&&isFinite(currentChanel)){
                if(currentChanel <= 99 && currentChanel >= 0){
                    this._currentChanel = currentChanel;
                }
            }
        }
    };
    nextChanel() {
        if(this._currentOnOff === true){
            if (this._currentChanel < 99){
                this._currentChanel ++;
            }
            else{
                this._currentChanel = 0;
            }
        }
    };
    prewChanel() {
        if(this._currentOnOff === true){
            if (this._currentChanel > 0){
                this._currentChanel --;
            }
            else{
                this._currentChanel = 99;
            }
        }
    };
    decriaseVol() {
        if(this._currentOnOff === true && this._currentVol > 0){
            this._currentVol --;
        }
    };
    increaseVol() {
        if(this._currentOnOff === true && this._currentVol < 32){
            this._currentVol ++;
        }
    };
    
};