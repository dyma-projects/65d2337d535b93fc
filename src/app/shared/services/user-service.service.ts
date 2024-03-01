import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {}

  public addUser(username: string[]): void {
    this.users$.next(username);
  }
}
