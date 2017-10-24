import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-environments',
  templateUrl: 'environments.html'
})
export class EnvironmentsPage {

  items : any;

  constructor(public navCtrl: NavController) {
    this.items = [
      { "name": "The Best Server", "color": "primary", "icon": "leaf"},
      { "name": "The Meh Server", "color": "secondary", "icon": "beaker"},
      { "name": "The Worst Server", "color": "danger", "icon": "cog"}
    ];
  }

  itemSelected(item){
    console.log(item)
  }

}
