import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EnvironmentPage } from '../environment/environment'

@Component({
  selector: 'page-environments',
  templateUrl: 'environments.html'
})
export class EnvironmentsPage {

  environments : any;

  constructor(public navCtrl: NavController) {
    this.environments = [
      { "name": "The Best Server", "color": "primary", "icon": "leaf"},
      { "name": "The Meh Server", "color": "secondary", "icon": "beaker"},
      { "name": "The Worst Server", "color": "danger", "icon": "cog"}
    ];
  }

  toEnvironment(environment){
    console.log("To " + environment.name)
    this.navCtrl.push(EnvironmentPage, environment)
  }

}
