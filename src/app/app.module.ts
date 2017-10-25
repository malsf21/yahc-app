import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { YAHCApp } from './app.component';

import { HttpModule } from '@angular/http';
import { AppVersion } from '@ionic-native/app-version';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';

import { AboutPage } from '../pages/about/about';
import { ClientPage } from '../pages/client/client';
import { EnvironmentPage } from '../pages/environment/environment';
import { EnvironmentsPage } from '../pages/environments/environments';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    YAHCApp,
    AboutPage,
    ClientPage,
    EnvironmentPage,
    EnvironmentsPage,
    HomePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(YAHCApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    YAHCApp,
    AboutPage,
    ClientPage,
    EnvironmentPage,
    EnvironmentsPage,
    HomePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    AppVersion,
    InAppPurchase,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
