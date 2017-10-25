import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})
export class ClientPage {

  type: string;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    if (navParams.get("type")){
      this.type = navParams.get("type");
    }
    else{
      this.type = "sandbox";
    }
    if (this.type != "preset"){
      this.title = "Sandbox";
    }
    else{
      this.title = navParams.get("name");
    }
  }

  getData(){
    this.http.get("https://www.foaas.com/caniuse/YAHS/Matt")/*.map(res => res.json())*/.subscribe(data => {
      console.log(data)
    });
  }
}
