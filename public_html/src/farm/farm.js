"use strict";
import {radioList} from "./../abstractclass/lists";
import {condList} from "./../abstractclass/lists";
import {stoveList} from "./../abstractclass/lists";
import {Conditioning} from "./../devices/conditioning";
import {Floor} from "./../devices/floor";
import {Fridge} from "./../devices/fridge";
import {Jalousie} from "./../devices/jalousie";
import {Lamp} from "./../devices/lamp";
import {Radio} from "./../devices/radio";
import {Stove} from "./../devices/stove";
import {Tv} from "./../devices/tv";
import {TvPro} from "./../devices/tvpro";


export class Farm {
    constructor(name = "fabric"){
        this.name = name;
        this.counters = {
            Conditioning:0,
            Floor:0,
            Fridge:0,
            Jalousie:0,
            Lamp:0,
            Radio:0,
            Stove:0,
            Tv:0,
            TvPro:0
        };
    };
    addDevices(name, type, map){
      switch (type){
          case 'Conditioning':
              (()=>{
                  map.set (["con"+this.counters[type]], new Conditioning([name+this.counters[type]], type, condList));
                  this.counters[type]++;
              })();
              break;
          case 'Floor':
              (()=>{
                  map.set (["floor"+this.counters[type]], new Floor([name+this.counters[type]],type));
                  this.counters[type]++;
              })();
              break;
          case 'Fridge':
              (()=>{
                  map.set (["fri"+this.counters[type]], new Fridge([name+this.counters[type]],type));
                  this.counters[type]++;
              })();
              break;
          case 'Jalousie':
              (()=>{
                  map.set (["jal"+this.counters[type]], new Jalousie([name+this.counters[type]],type));
                  this.counters[type]++;
              })();
              break;
          case 'Lamp':
              (()=>{
                  map.set (["lamp"+this.counters[type]], new Lamp([name+this.counters[type]],type));
                  this.counters[type]++;
              })();
              break;
          case 'Radio':
              (()=>{
                  map.set (["rad"+this.counters[type]], new Radio([name+this.counters[type]],type,radioList));
                  this.counters[type]++;
              })();
              break;
          case 'Stove':
              (()=>{
                  map.set (["stove"+this.counters[type]], new Stove([name+this.counters[type]],type,stoveList));
                  this.counters[type]++;
              })();
              break;
          case 'Tv':
              (()=>{
                  map.set (["tv"+this.counters[type]], new Tv([name+this.counters[type]],type));
                  this.counters[type]++;
              })();
              break;
          case 'TvPro':
              (()=>{
                  map.set (["tv"+this.counters[type]], new TvPro([name+this.counters[type]],type));
                  this.counters[type]++;
              })();
              break;
      }
    }
}