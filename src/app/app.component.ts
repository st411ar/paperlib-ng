import { Component } from '@angular/core';
import {PaperlibService} from './paperlib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PaperlibService]
})
export class AppComponent {
  title = 'app';
}
