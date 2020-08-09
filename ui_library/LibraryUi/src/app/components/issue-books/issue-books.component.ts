import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent implements OnInit {
  books = {
    users: '',
    book: '',
    type: ''
  };
  users: any;
  allBooks: any;
  transactType: any = ["issue", 'return'];
  submitted = false;
  constructor(private libraryservice: LibraryService) { }

  ngOnInit() {
    this.libraryservice.getAllBooks()
      .subscribe(
        (data: { data: any }) => {
          this.allBooks = data.data;
        },
        error => {
          console.log(error);
        });
    this.libraryservice.getAllUsers()
      .subscribe(
        (data: { data: any }) => {
          this.users = data.data;
        },
        error => {
          console.log(error);
        });
  }
  saveEntry() {
    console.log("save==", this.books);
    const data = {
      userid: this.books.users,
      bookid: this.books.book
    };
    if (this.books.type == 'issue') {
      this.libraryservice.issueBook(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    } else {
      this.libraryservice.returnBook(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
  }

  newEntry() {
    this.submitted = false;
    this.books = {
      users: '',
      book: '',
      type: ""
    };
  }
}
