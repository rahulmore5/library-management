import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { IssueBooksComponent } from './components/issue-books/issue-books.component';
import { IssueBooksListComponent } from './components/issue-books-list/issue-books-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'issue-book', component: IssueBooksComponent },
  { path: 'book-history', component: IssueBooksListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
