import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';
import {HttpModule} from '@angular/http';
import { UsersPageComponent } from './users-page/users-page.component';
import { BookProfileComponent } from './book-profile/book-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes = [
  {path: '', component: MainPageComponent},
  {path: 'books', component: BooksPageComponent},
  {path: 'books/:id', component: BookProfileComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'users/:id', component: UserProfileComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BooksPageComponent,
    UsersPageComponent,
    BookProfileComponent,
    UserProfileComponent
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
