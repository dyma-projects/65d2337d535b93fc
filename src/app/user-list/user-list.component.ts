import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users: string[] = [];
  public subscription: Subscription = new Subscription();
  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    // il faut initialiser les users ici avec le service
    this.subscription.add(
      this.userService.users$.subscribe((users: string[]) => {
        this.users = users;
        console.log('Observable emitted the next value: ' + this.users);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
