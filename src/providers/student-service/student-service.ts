import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StudentSummary } from '../../app/model/models';



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
    var studentASummary = new StudentSummary("/assets/img/STUDENT-A", "STUDENT-A", "4 CLASSES");
    var studentBSummary = new StudentSummary("/assets/img/STUDENT-B", "STUDENT-B", "2 CLASSES");
    var studentCSummary = new StudentSummary("/assets/img/STUDENT-C", "STUDENT-C", "1 CLASSES");
    var studentDSummary = new StudentSummary("/assets/img/STUDENT-D", "STUDENT-D", "5 CLASSES");

 
    var studentSummaryList:StudentSummary[] = 
    [
      studentASummary, studentBSummary, studentCSummary, studentDSummary
    ];

    return studentSummaryList;
  }
}
