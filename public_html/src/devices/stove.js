"use strict";

import {TempDevicesProg} from "./../abstractclass/tempdevicesprog";

export class Stove extends TempDevicesProg {
    constructor(name, type, list) {
        super(name, type, list);
        this._currentTime = list[0].time;
    };
    get currentTime() {
        return this._currentTime;
    };
    setProg(a) {
        if(!isNaN(parseFloat(a))&&isFinite(a)){
            if(a < this._progList.length && a >= 0){
                this._currentProg = this._progList[a].name;
                this._currentTemp = this._progList[a].temp;
                this._currentTime = this._progList[a].time;
            }
        }
    };
    upTemp() {
        if(this._currentProg === "Custom" && this._currentTemp < 220){
            for(let i = 0; i<10; i++){
                super.upTemp();
            }
        }
    };
    downTemp() {
        if(this._currentProg === "Custom" && this._currentTemp > 10){
            for(let i = 0; i<10; i++){
                super.downTemp();
            }
        }
    };
    startProg() {
        let t = String(this._currentTime);
        let [h,m] = t.split(".");
        if(!isNaN(parseFloat(h))&&isFinite(h) && h>=0){
            if(!isNaN(parseFloat(m))&&isFinite(m) && m>=0){
                let delay = h*3600000 + m*60000;
                let dn = new Date;
                this._df = Number(dn) + delay;
                this._workIndication = true;
                setTimeout (this.stopProg.bind(this),delay);
            }
        }
    };
    stopProg() {
        this._workIndication = false;
    };
    getTimer() {
        if(this._workIndication === true){
            let dn = new Date();
            let del = this._df - Number(dn);
            let h = Math.floor(del/3600000);
            let m = Math.floor((del - h*3600000)/60000);
            let s = Math.floor((del - (h*3600000+m*60000))/1000);
            if(h<10){
                h = "0" + h;
            };
            if(m<10){
                m = "0" + m;
            };
            if(s<10){
                s = "0" + s;
            };
            let timer = `Timer: ${h}:${m}:${s}`;
            return timer;
        }
        
    };
};