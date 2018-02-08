import { Component, OnInit } from '@angular/core';
import {PaperlibService} from '../paperlib.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id;
  user;

  constructor(private paperlibService: PaperlibService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params['id']);
    this.paperlibService.getUser(this.id).subscribe(user => this.user = user);
  }

}
