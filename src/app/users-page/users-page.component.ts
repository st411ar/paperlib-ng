import { Component, OnInit } from '@angular/core';
import {PaperlibService} from '../paperlib.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users = [];

  constructor(private paperlibService: PaperlibService) { }

  ngOnInit() {
    this.paperlibService.getUsers().subscribe(users => this.users = users);
  }

}
