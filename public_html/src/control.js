"use strict";

export class Control {
    constructor(model){
        this._model = model;
        this._onOffButton = document.getElementById('on');      
        this._coldButton = document.getElementById('cold');
        this._neutralButton = document.getElementById('neut'); 
        this._warmButton = document.getElementById('warm'); 
        this._infoOut = document.getElementById('info');
        this._onIndication = document.getElementById('onind');
        this._offIndication = document.getElementById('offind');        
        
    };
    go(){        
        this._infoOut.innerHTML = this.toString();
        
        this._onOffButton.onclick = () =>{            
            if(this._model._currentOnOff === false){
                this._offIndication.style.visibility = 'hidden';
                this._onIndication.style.visibility = 'visible';
                this._model.onOff();
            }
            else{
                this._onIndication.style.visibility = 'hidden';
                this._offIndication.style.visibility = 'visible';
                this._model.onOff();
            }
            
        };
        
        this._coldButton.onclick = ()=>{
            this._model.setColdTemp();
            this._infoOut.innerHTML = this.toString();
        };
        
        this._neutralButton.onclick = ()=>{
            this._model.setNeutralTemp();
            this._infoOut.innerHTML = this.toString();
        };
        
        this._warmButton.onclick = ()=>{
            this._model.setWarmTemp();
            this._infoOut.innerHTML = this.toString();
        };
    };
    toString(){
        let {LightTemp} = this._model.fullInfo;
        this.info = LightTemp;
        return `Temperature of Light: ${LightTemp}`;
    }
};