import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StudentCard } from '../../app/model/models';



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
    var studentASummary = new StudentCard("/assets/img/STUDENT-A.jpg", "STUDENT-A", "4 CLASSES");
    var studentBSummary = new StudentCard("/assets/img/STUDENT-B.jpg", "STUDENT-B", "2 CLASSES");
    var studentCSummary = new StudentCard("/assets/img/STUDENT-C.jpg", "STUDENT-C", "1 CLASSES");
    var studentDSummary = new StudentCard("/assets/img/STUDENT-D.jpg", "STUDENT-D", "5 CLASSES");


    var studentSummaryList:StudentCard[] =
    [
      studentASummary, studentBSummary, studentCSummary, studentDSummary
    ];

    return studentSummaryList;
  }
}
