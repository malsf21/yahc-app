import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EnvironmentsPage } from '../environments/environments'
import { SettingsPage } from '../settings/settings'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toEnvironments(){
    console.log("Going to EnvironmentsPage")
    this.navCtrl.parent.select(1);
  }

  toNewEnvironments(){
    console.log("Going to NewEnvironmentsPage")
    this.navCtrl.parent.select(1);
  }

  toSettings(){
    console.log("Going to SettingsPage")
    this.navCtrl.parent.select(3);
  }

}
