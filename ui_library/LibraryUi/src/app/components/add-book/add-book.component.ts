import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book = {
    name: '',
    author: '',
    publication: '',
    price: '',
    edition: "",
    volume: '',
    no_of_copies: ''
  };
  submitted = false;
  constructor(private libraryservice: LibraryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  saveBook() {
    const data = {
      name: this.book.name,
      author: this.book.author,
      publication: this.book.publication,
      price: this.book.price,
      edition: this.book.edition,
      volume: this.book.volume,
      no_of_copies: this.book.no_of_copies
    };
    this.libraryservice.createBook(data)
      .subscribe(
        (response: { code: any }) => {
          if (response.code == 200) {
            this.submitted = true;
            this.router.navigate(['/books']);
          } else {
            this.submitted = false;
          }
        },
        error => {
          console.log(error);
        });
  }
}
