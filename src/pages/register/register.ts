import { Student } from './../../model/student/student';
import { RegisterService } from './../../providers/register-service/register-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public student: Student;
  constructor(public navCtrl: NavController, public navParams: NavParams, public registerService: RegisterService, public formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerStudent(form): void{
    if (form.valid)
    {
      this.registerService.enroll(form.Model);
      return;
    }

    console.log('student information entered is invalid');
  }
}
