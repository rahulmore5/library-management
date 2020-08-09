import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
@Component({
  selector: 'app-issue-books-list',
  templateUrl: './issue-books-list.component.html',
  styleUrls: ['./issue-books-list.component.css']
})
export class IssueBooksListComponent implements OnInit {
  transactType: any = ["issue", 'return'];
  history = {
    fromDate: '',
    toDate: '',
    type: ''
  }
  transactions: any;
  constructor(private libraryservice: LibraryService) { }

  ngOnInit() {
    let data = {
      fromDate: undefined,
      toDate: undefined
    }
    this.libraryservice.getHistory(data)
      .subscribe(
        (data: { data: any }) => {
          this.transactions = data.data;
          console.log("data==", data.data);
        },
        error => {
          console.log(error);
        });
  }

  filterData() {
    let fromDate = JSON.parse(JSON.stringify(this.history.fromDate));
    let toDate = JSON.parse(JSON.stringify(this.history.toDate));
    var data = {
      fromDate: fromDate.year + "-" + (fromDate.month < 10 ? ("0" + fromDate.month) : fromDate.month) + "-" + (fromDate.day < 10 ? ("0" + fromDate.day) : fromDate.day),
      toDate: toDate.year + "-" + (toDate.month < 10 ? ("0" + toDate.month) : toDate.month) + "-" + (toDate.day < 10 ? ("0" + toDate.day) : toDate.day),
      book_type: this.history.type == "issue" ? 0 : 1
    }
    this.libraryservice.getHistory(data)
      .subscribe(
        (data: { data: any }) => {
          this.transactions = data.data;
          console.log("data==", data.data);
        },
        error => {
          console.log(error);
        });
  }
}
