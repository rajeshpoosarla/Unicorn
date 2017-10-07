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
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { StudentSummary } from '../../app/model/models';
/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        console.log('Starting StudentService');
    }
    StudentService.prototype.getStudentsSummary = function () {
        var studentASummary = new StudentSummary("STUDENT-A", "STUDENT-A", "4 CLASSES");
        var studentBSummary = new StudentSummary("STUDENT-B", "STUDENT-B", "2 CLASSES");
        var studentCSummary = new StudentSummary("STUDENT-C", "STUDENT-C", "1 CLASSES");
        var studentDSummary = new StudentSummary("STUDENT-D", "STUDENT-D", "5 CLASSES");
        var studentSummaryList = {
            studentASummary: studentASummary, studentBSummary: studentBSummary, studentCSummary: studentCSummary, studentDSummary: studentDSummary
        };
        return studentSummaryList;
    };
    return StudentService;
}());
StudentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], StudentService);
export { StudentService };
//# sourceMappingURL=student-service.js.map