import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AttendenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AttendenceService {

  constructor(public http: Http) {
    console.log('Hello AttendenceProvider Provider');
  }

public HandleStudentAttendence()
{
  // if attended update the status in db

  // if did not attend update the status in db
  // then send sms to the parent
}

}
