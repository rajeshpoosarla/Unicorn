import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StudentService } from '../../providers/providers';
import { StudentCard } from '../../model/models';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  studentCardList: StudentCard[];
  studentAttendenceOptions: string[] = ["Attended", "DidNotAttend"];

  public constructor(public navCtrl: NavController, public studentService : StudentService) {
  }

  ionViewDidLoad(){
    this.getStudentSummary();
    this.studentAttendenceOptions.forEach(element => {
      console.log(element);
    });

  }

  public getStudentSummary()
  {
    console.log("getting student summary list")
    this.studentCardList = this.studentService.getStudentsSummary();
    console.log(this.studentCardList.length);

    this.studentCardList.forEach(element => {
      console.log("ImageId:" + element.ImageId);
    });
  }

  public OnAttendenceResponded()
    {
      console.log('Attendence response is received');
    }
}
