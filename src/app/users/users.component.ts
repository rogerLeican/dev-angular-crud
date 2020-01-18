import { ResponseUsers } from './user.model';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getUsers()
      .subscribe(res => this.responseUsers = res)
  }

}
