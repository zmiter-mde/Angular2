import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Habit } from './habit';

@Injectable()
export class HabitService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private habitsUrl = 'http://jsonplaceholder.typicode.com/users';  // URL to web api

  constructor(private http: Http) { }

  getHabits(): Promise<Habit[]> {
    return this.http.get(this.habitsUrl)
               .toPromise()
               .then((response) => {
                 console.log("Inside promise");
                 console.log(response);
                 console.log(response.json());
                 console.log(response.json().data);
                 return response.json() as Habit[];
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
