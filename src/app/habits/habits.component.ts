import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Habit }                from './habit';
import { HabitService }         from './habit.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'habits.component.html',
  styleUrls: [ 'habits.component.css' ]
})
export class HabitsComponent implements OnInit {
  habits: Habit[];
  selectedHabit: Habit;

  constructor(
    private habitService: HabitService,
    private router: Router) { }

  getHabits(): void {
    this.habitService
        .getHabits()
        .then((habits) => {
          console.log('Inside component');
          console.log(habits);
          this.habits = habits;
        });
    console.log('In getHabits');
  }

  ngOnInit(): void {
    this.getHabits();
    console.log('In ngOnInit');
  }
}
