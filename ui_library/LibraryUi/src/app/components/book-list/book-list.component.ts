import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  currentBook = null;
  currentIndex = -1;
  title = '';
  constructor(private libraryservice: LibraryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.retrieveBooks();
  }

  retrieveBooks() {
    this.libraryservice.getAllBooks()
      .subscribe(
        (data: { data: any }) => {
          this.books = data.data;
          console.log("data==", data.data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveBooks();
    this.currentBook = null;
    this.currentIndex = -1;
  }

  setActiveBook(book, index) {
    this.currentBook = book;
    this.currentIndex = index;
  }

  addBook() {
    this.router.navigate(['/add-book']);
  }
}
