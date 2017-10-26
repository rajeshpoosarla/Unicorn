var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var StudentService = (function () {
    function StudentService() {
        console.log('Starting StudentService');
    }
    StudentService.prototype.getStudentsSummary = function () {
        var studentASummary = new StudentCard("/assets/img/STUDENT-A.jpg", "STUDENT-A", "4 CLASSES", "8:00 am - 9:00 am");
        var studentBSummary = new StudentCard("/assets/img/STUDENT-B.jpg", "STUDENT-B", "2 CLASSES", "9:00 am - 10:00 am");
        var studentCSummary = new StudentCard("/assets/img/STUDENT-C.jpg", "STUDENT-C", "1 CLASSES", "10:00 am - 11:00 am");
        var studentDSummary = new StudentCard("/assets/img/STUDENT-D.jpg", "STUDENT-D", "5 CLASSES", "11:00 am - 12:00");
        var studentSummaryList = [
            studentASummary, studentBSummary, studentCSummary, studentDSummary
        ];
        return studentSummaryList;
    };
    return StudentService;
}());
StudentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], StudentService);
export { StudentService };
//# sourceMappingURL=student-service.js.map