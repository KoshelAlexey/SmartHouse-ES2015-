"use strict";

import {OnOffDevices} from "./../abstractclass/onoffdevices";

export class Lamp extends OnOffDevices {
    constructor(name, type) {
        super(name, type);
        this._lightTemp = "Neutral";
    };
    get fullInfo() {
        super.fullInfo;
        this._fullInfo.LightTemp = this._lightTemp;
        return this._fullInfo;
    };
    get lightTemp() {
        return _lightTemp;
    };
    setColdTemp() {
        this._lightTemp = "Cold";
    };
    setNeutralTemp() {
        this._lightTemp = "Neutral";
    };
    setWarmTemp() {
        this._lightTemp = "Warm";
    };

};