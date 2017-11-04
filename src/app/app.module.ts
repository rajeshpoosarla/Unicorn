
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';

import { HomePage } from '../pages/pages';
import { RegisterPage } from './../pages/register/register';
import { TabsPage } from '../pages/pages';

import { StudentService } from '../providers/providers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AttendenceService } from '../providers/providers'
import { RegisterService } from '../providers/providers';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
   RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentService,
    RegisterService,
    AttendenceService
  ]
})
export class AppModule {}
