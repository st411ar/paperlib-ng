import { Component, OnInit } from '@angular/core';
import {PaperlibService} from '../paperlib.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {
  id;
  book;

  constructor(private paperlibService: PaperlibService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params['id']);
    this.paperlibService.getBook(this.id).subscribe(book => this.book = book);
  }

}
