import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class PaperlibService {
  constructor(private http: Http) {}

  getBooks() {
    this.http.get('').pipe(map(response => response.json()));

    return this.http.get('http://localhost:4999/paperlib/books')
      .pipe(map(response => response.json()));
  }

  getBook(id) {
    return this.http.get('http://localhost:4999/paperlib/books/' + id)
      .pipe(map(response => response.json()));
  }

  getUsers() {
    return this.http.get('http://localhost:4999/paperlib/users')
      .pipe(map(response => response.json()));
  }

  getUser(id) {
    return this.http.get('http://localhost:4999/paperlib/users/' + id)
      .pipe(map(response => response.json()));
  }
}
