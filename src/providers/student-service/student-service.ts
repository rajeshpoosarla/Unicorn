import { CAMERA_SHY } from './../../utilities/constants';
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
    var studentASummary = new StudentCard(this.CreateStudentImage(CAMERA_SHY), "STUDENT-A", "4 CLASSES", "8:00 am - 9:00 am");
    var studentBSummary = new StudentCard(this.CreateStudentImage(CAMERA_SHY), "STUDENT-B", "2 CLASSES", "9:00 am - 10:00 am");
    var studentCSummary = new StudentCard(this.CreateStudentImage(CAMERA_SHY), "STUDENT-C", "1 CLASSES", "10:00 am - 11:00 am");
    var studentDSummary = new StudentCard(this.CreateStudentImage(CAMERA_SHY), "STUDENT-D", "5 CLASSES", "11:00 am - 12:00");

    var studentSummaryList:StudentCard[] =
    [
      studentASummary, studentBSummary, studentCSummary, studentDSummary
    ];

    return studentSummaryList;
  }

  private CreateStudentImage(rawImage: string)
  {
    if (rawImage == CAMERA_SHY)
    {
      console.log('showing camera shy image');
      return "/assets/icon/unicorn.ico";
    }

    return "/assets/img/STUDENT-A.JPG"
  }

}
