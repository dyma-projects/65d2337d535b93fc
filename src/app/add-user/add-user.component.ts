import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  public userarray: string[] = [];
  constructor(private userService: UserServiceService) {}

  ngOnInit() {}

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.userarray.push(username);

      this.userService.addUser(this.userarray);
      this.el.nativeElement.value = '';
    }
  }
}
