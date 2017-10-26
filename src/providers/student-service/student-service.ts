import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StudentCard } from '../../model/models';



/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentService {

  public constructor() {
    console.log('Starting StudentService');
  }

 public getStudentsSummary()
  {
    var studentASummary = new StudentCard("/assets/img/STUDENT-A.jpg", "STUDENT-A", "4 CLASSES", "8:00 am - 9:00 am");
    var studentBSummary = new StudentCard("/assets/img/STUDENT-B.jpg", "STUDENT-B", "2 CLASSES", "9:00 am - 10:00 am");
    var studentCSummary = new StudentCard("/assets/img/STUDENT-C.jpg", "STUDENT-C", "1 CLASSES", "10:00 am - 11:00 am");
    var studentDSummary = new StudentCard("/assets/img/STUDENT-D.jpg", "STUDENT-D", "5 CLASSES", "11:00 am - 12:00");


    var studentSummaryList:StudentCard[] =
    [
      studentASummary, studentBSummary, studentCSummary, studentDSummary
    ];

    return studentSummaryList;
  }
}
