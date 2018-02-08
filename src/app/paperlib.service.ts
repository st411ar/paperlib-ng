import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PaperlibService {
  constructor(private http: Http) {}

  getBooks() {
    return this.http.get('http://localhost:4999/paperlib/books')
      .map(response => response.json());
  }

  getUsers() {
    return this.http.get('http://localhost:4999/paperlib/users')
      .map(response => response.json());
  }
}
