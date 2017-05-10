"use strict";

import {Tv} from "./tv";

export class TvPro extends Tv {
    constructor(name, type) {
        super(name, type);
        this._df;
    };
    setTimer(a, b) {
        if(this._currentOnOff === true){
            if(!isNaN(parseFloat(a))&&isFinite(a) && !isNaN(parseFloat(b))&&isFinite(b) && a>=0 && b>=0){
                let delay = a*60000 + b*1000;
                let dn = new Date();
                this._df = Number(dn) + delay;
                setTimeout (this.onOff.bind(this), delay);
            }
        }
    };
    getTimer() {
        if(this._currentOnOff === true){
            let dn = new Date();
            let del = this._df - Number(dn);
            let m = 0;
            let s = 0;
            if(del >0){
                m = Math.floor(del/60000);
                s = Math.floor((del - m*60000)/1000);
            }

            return [m,s];
        }
    };
};