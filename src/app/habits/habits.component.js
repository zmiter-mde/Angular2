"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var habit_service_1 = require('./habit.service');
var HabitsComponent = (function () {
    function HabitsComponent(habitService, router) {
        this.habitService = habitService;
        this.router = router;
    }
    HabitsComponent.prototype.getHabits = function () {
        var _this = this;
        this.habitService
            .getHabits()
            .then(function (habits) {
            console.log('Inside component');
            console.log(habits);
            _this.habits = habits;
        });
        console.log('In getHabits');
    };
    HabitsComponent.prototype.ngOnInit = function () {
        this.getHabits();
        console.log('In ngOnInit');
    };
    HabitsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'habits.component.html',
            styleUrls: ['habits.component.css']
        }), 
        __metadata('design:paramtypes', [habit_service_1.HabitService, router_1.Router])
    ], HabitsComponent);
    return HabitsComponent;
}());
exports.HabitsComponent = HabitsComponent;
//# sourceMappingURL=habits.component.js.map