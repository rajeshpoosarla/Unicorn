import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentService } from '../../providers/providers';
import { StudentSummary } from '../../app/model/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  studentSummaryList: StudentSummary[];

  public constructor(public navCtrl: NavController, public studentService : StudentService) {    
  }

  ionViewDidLoad(){
    this.getStudentSummary();
  }

  public getStudentSummary()
  {
    this.studentSummaryList = this.studentService.getStudentsSummary();
  }
}
