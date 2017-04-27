"use strict";

import {MultimediaDevices} from "./../abstractclass/multimediadevices";

export class Radio extends MultimediaDevices {
    constructor(name, type, list){
        super(name, type);
        this._list = list;
        this._nameChanel = list[0].name;
        this._freqChanel = list[0].freq;
        this._currentChanel = 0;
        this._df = 0;
    };
    get freqChanel() {
        return _freqChanel;
    };
    get nameChanel() {
        return _nameChanel;
    };
    get fullInfo() {
        super.fullInfo;
        this.fullInfo.Station = this._nameChanel;
        this.fullInfo.Frequency = this._freqChanel;
        return this.fullInfo;
    };
    nextChanel() {
        if(this._currentOnOff === true){
     outer: for(let i = this.freqChanel+1; ; i++){            
                for(let k = 0; k<this.list.length; k++){
                    if(i === this.list[k].freq){
                        this._nameChanel = this.list[k].name;
                        this._freqChanel = this.list[k].freq;
                        this._currentChanel = k;
                        break outer;
                    }
                    if (i > 120){i = 85;}
                };
            }
        }
    };
    prewChanel() {
        if(this._currentOnOff === true){
     outer: for(let i = this.freqChanel-1; ; i--){            
                for(let k = 0; k<this.list.length; k++){
                    if(i === this.list[k].freq){
                        this._nameChanel = this.list[k].name;
                        this._freqChanel = this.list[k].freq;
                        this._currentChanel = k;
                        break outer;
                    }
                    if (i <80 ){i = 120;}
                };
            }
        }
    };
    addChanel(station, frequency) {
        if(this._currentOnOff === true){
            this._list.push({name:station,freq:frequency});
            this._currentChanel = this._list.length - 1;
            this._nameChanel = this._list[this._currentChanel].name;
            this._freqChanel = this._list[this._currentChanel].freq;
        }
    };
    removeChanel() {
        if(this._currentOnOff === true){
            this._list.splice(this._currentChanel,1);
            if(this._list.length !== 0){
                if(this._currentChanel === this._list.length){
                    this._currentChanel -= 1;
                    this._nameChanel = this._list[this._currentChanel].name;
                    this._freqChanel = this._list[this._currentChanel].freq;
                }
                else{
                    this._nameChanel = this._list[this._currentChanel].name;
                    this._freqChanel = this._list[this._currentChanel].freq;
                }
            }
            else{
                this._currentChanel = "--";
                this._nameChanel = "--";
                this._freqChanel = "--";
            }
        }
    };
    setTimer(h, m) {
        if(this._currentOnOff === true){
            if(!isNaN(parseFloat(h))&&isFinite(h) && h>=0){
                if(!isNaN(parseFloat(m))&&isFinite(m) && m>=0){                               
                    let delay = h*3600000 + m*60000;
                    let dn = new Date;
                    this._df = dn.setHours(h,m);
                    this.onOff();
                    setTimeout (this.onOff.bind(this),delay);                    
                }
            }
        }
    };
    getTimer() {
        if(this._currentOnOff === false){
            let dn = new Date();
            let del = this._df - Number(dn);
            let h = Math.floor(del/3600000);
            let m = Math.floor((del - h*3600000)/60000);
            if(m<10){
                let timer = `Timer: ${h}:0${m}`;
                return timer;
            }
            else{
                let timer = `Timer: ${h}:${m}`;
                return timer;
            }
            
        }
    };
    
};
