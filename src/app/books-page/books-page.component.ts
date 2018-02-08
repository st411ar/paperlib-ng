import { Component, OnInit } from '@angular/core';
import {PaperlibService} from '../paperlib.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  constructor(private paperlibService: PaperlibService) { }

  ngOnInit() {
    this.paperlibService.getBooks().subscribe(books => console.log(books));
  }

}
