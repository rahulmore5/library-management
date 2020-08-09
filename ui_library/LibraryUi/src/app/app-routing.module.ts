import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { IssueBooksComponent } from './components/issue-books/issue-books.component';
import { IssueBooksListComponent } from './components/issue-books-list/issue-books-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'issue-book', component: IssueBooksComponent },
  { path: 'book-history', component: IssueBooksListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-book', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
