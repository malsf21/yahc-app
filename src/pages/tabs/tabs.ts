import { Component } from '@angular/core';

import { ClientPage } from '../client/client';
import { EnvironmentsPage } from '../environments/environments';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EnvironmentsPage;
  tab3Root = ClientPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
