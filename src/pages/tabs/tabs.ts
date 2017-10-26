import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RegisterPage } from './../register/register';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
homeTab = HomePage;
registerTab = RegisterPage;

constructor() {
    this.registerTab = RegisterPage;
    this.homeTab = HomePage;
  }
}
