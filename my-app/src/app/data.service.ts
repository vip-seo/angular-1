import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { Observable, of } from "rxjs";

const USERS: User[] = [
  {name: 'Ivan1', age: 22},
  {name: 'Ivan2', age: 23},
  {name: 'Ivan3', age: 24},
  {name: 'Ivan4', age: 25},
  {name: 'Ivan5', age: 26},
  {name: 'Ivan6', age: 27}
];

@Injectable()
 
export class DataService {

  constructor() { }
  public getUsers(): Observable<User[]> {
    return of(USERS);
  }
  
}

