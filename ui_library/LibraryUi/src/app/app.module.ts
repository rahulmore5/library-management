import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { LibraryService } from './services/library.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { IssueBooksComponent } from './components/issue-books/issue-books.component';
import { IssueBooksListComponent } from './components/issue-books-list/issue-books-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    UserListComponent,
    IssueBooksComponent,
    IssueBooksListComponent,
    AddUserComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    LibraryService
  ],
  exports: [
    BookListComponent,
    UserListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
