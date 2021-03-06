var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentService } from '../../providers/providers';
var HomePage = (function () {
    function HomePage(navCtrl, studentService) {
        this.navCtrl = navCtrl;
        this.studentService = studentService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getStudentSummary();
    };
    HomePage.prototype.getStudentSummary = function () {
        console.log("getting student summary list");
        this.studentCardList = this.studentService.getStudentsSummary();
        console.log(this.studentCardList.length);
        this.studentCardList.forEach(function (element) {
            console.log("ImageId:" + element.ImageId);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, StudentService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map