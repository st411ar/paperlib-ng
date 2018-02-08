import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PaperlibService {
  constructor(private http: Http) {}

  getBooks() {
    return this.http.get('http://localhost:4999/paperlib/books');
  }
}
