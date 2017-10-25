import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClientPage } from '../client/client'

@Component({
  selector: 'page-environment',
  templateUrl: 'environment.html'
})
export class EnvironmentPage {

  name: string;
  presets: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name")
    this.presets = [
      { "name": "The Best Page", "type": "preset", "color": "primary", "icon": "leaf"},
      { "name": "The Meh Page", "type": "preset", "color": "secondary", "icon": "beaker"},
      { "name": "The Worst Page", "type": "preset", "color": "danger", "icon": "cog"}
    ];
  }

  toSandbox(){
    this.navCtrl.push(ClientPage, { "type": "sandbox"})
  }

  toPreset(preset){
    console.log(preset)
    this.navCtrl.push(ClientPage, preset)
  }

}
