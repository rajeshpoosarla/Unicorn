import { CAMERA_SHY } from './../../utilities/constants';
import { Student } from './../../model/student/student';
import { RegisterService } from './../../providers/register-service/register-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public studentFormGroup: FormGroup;
  public student: Student;
  constructor(public navCtrl: NavController, public navParams: NavParams, public registerService: RegisterService, public formBuilder: FormBuilder) {
   this.studentFormGroup = this.formBuilder.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(1), Validators.maxLength(30)])],
      LastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(1), Validators.maxLength(30)])],
      DOB: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      Mobile: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerStudent(value: any): void{
    if (this.studentFormGroup.valid)
    {
      var localStudent = new Student('1', value.LastName,value.FirstName, value.DOB, value.Mobile, CAMERA_SHY)
      this.registerService.enroll(localStudent);
      console.log('student is enrolled' + ' ' + localStudent.FirstName + ' ' + localStudent.LastName);
      return;
    }

    console.log('student information entered is invalid');
  }
}
