import { Student } from './../../model/student/student';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterService {

  public constructor(public http: Http) {
    console.log('Hello RegisterService');
  }

  public enroll(student: Student): void{
    console.log('Registering student: ' + student.FirstName);
  }
}
