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

<<<<<<< HEAD
  public constructor(public navCtrl: NavController, public studentService : StudentService) {
=======
  public constructor(public navCtrl: NavController, public studentService : StudentService) {    
>>>>>>> 4efe88bce583150037f80e9e50b06210ef09a4ea
  }

  ionViewDidLoad(){
    this.getStudentSummary();
  }

  public getStudentSummary()
  {
<<<<<<< HEAD
    console.log("getting student summary list")
    this.studentSummaryList = this.studentService.getStudentsSummary();
    console.log(this.studentSummaryList.length);
=======
    this.studentSummaryList = this.studentService.getStudentsSummary();
>>>>>>> 4efe88bce583150037f80e9e50b06210ef09a4ea
  }
}
