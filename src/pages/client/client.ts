import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, Request, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})
export class ClientPage {

  sandbox: boolean;
  sent: boolean;
  title: string;
  url: string;
  type: string;
  status: string;
  statusC: string;
  body: string;
  bodyKeys: any;
  bodyJSON: any;
  headers: any;
  interpret: string;
  interpretJSON: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private cdRef:ChangeDetectorRef) {
    if (navParams.get("sandbox")){
      this.sandbox = navParams.get("sandbox");
    }
    else{
      this.sandbox = true;
    }
    if (navParams.get("name")){
      this.title = navParams.get("name");
    }
    else{
      this.title = "Sandbox";
    }
    if (navParams.get("type")){
      this.type = navParams.get("type");
    }
    else{
      this.type = "GET";
    }
    if (navParams.get("url")){
      this.url = navParams.get("url");
    }
    else{
      this.url = "https://www.foaas.com/caniuse/YAHS/Matt";
    }
    this.sent = false;
    this.status = "Not Sent";
    this.statusC = "dark";
    this.interpret = "json";
    this.interpretJSON = true;
  }

  formatData(data){
    console.log(data)
    this.body = data["_body"]
    if (this.interpretJSON){
      this.bodyJSON = JSON.parse(this.body)
      this.bodyKeys = Object.keys(JSON.parse(this.body));
      console.log(this.bodyKeys)
    }
    this.status = String(data.status) + " " + data.statusText;
    if (data.status === 200){
      this.statusC = "secondary";
    }
    else{
      this.statusC = "danger";
      if (data.status === 0){
        this.status = "0 Error"
      }
    }
    this.headers = data["headers"]
  }

  getData(){
    // initialize loader
    this.http.get(this.url).subscribe(
      data => {
        // stop loader w/ success toast
        this.sent = true;
        this.formatData(data)
        this.cdRef.detectChanges();
      },
      err => {
        // stop loader w/ error toast
        this.sent = true;
        this.formatData(err)
        this.cdRef.detectChanges();
      }
    );
  }
}
