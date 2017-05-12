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


export class Store {
    constructor(name = "fabric"){
        this.name = name;
//        this.counters = {
//            Conditioning:0,
//            Floor:0,
//            Fridge:0,
//            Jalousie:0,
//            Lamp:0,
//            Radio:0,
//            Stove:0,
//            Tv:0,
//            TvPro:0
//        };
        this.rooms = {"kitchen":[],"bedroom":[],"hall":[],"hallway":[]};
    };
    addDevices(name, type, map){
      switch (type){
          case 'Conditioning':
              (()=>{
                  this.rooms[map].push(new Conditioning(name, type, condList));
              })();
              break;
          case 'Floor':
              (()=>{
                  this.rooms[map].push(new Floor(name,type));
              })();
              break;
          case 'Fridge':
              (()=>{
                  this.rooms[map].push(new Fridge(name,type));
              })();
              break;
          case 'Jalousie':
              (()=>{
                  this.rooms[map].push(new Jalousie(name,type));
              })();
              break;
          case 'Lamp':
              (()=>{
                  this.rooms[map].push(new Lamp(name,type));
              })();
              break;
          case 'Radio':
              (()=>{
                  this.rooms[map].push(new Radio(name,type,radioList));
              })();
              break;
          case 'Stove':
              (()=>{
                  this.rooms[map].push(new Stove(name,type,stoveList));
              })();
              break;
          case 'Tv':
              (()=>{
                  this.rooms[map].push(new Tv(name,type));
              })();
              break;
          case 'TvPro':
              (()=>{
                  this.rooms[map].push(new TvPro(name,type));
              })();
              break;
      }
    }
}