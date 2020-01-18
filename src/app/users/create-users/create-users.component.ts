import { UserService } from './../user.service';
import { RequestCreate, ResponseCreate } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  request:RequestCreate = {
    name: '',
    job: ''
  }
  response:ResponseCreate
//  userService: any;


  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  save(){
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
    });
  }
}
