import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';
import {HttpModule} from '@angular/http';
import { UsersPageComponent } from './users-page/users-page.component';


const routes = [
  {path: '', component: MainPageComponent},
  {path: 'books', component: BooksPageComponent},
  {path: 'users', component: UsersPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BooksPageComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
