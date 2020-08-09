import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  currentUser = null;
  currentIndex = -1;
  constructor(private libraryservice: LibraryService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.retrieveusers();
  }
  retrieveusers() {
    this.libraryservice.getAllUsers()
      .subscribe(
        (data: { data: any }) => {
          this.users = data.data;
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveusers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index) {
    this.currentUser = user;
    this.currentIndex = index;
  }
  addUser() {
    this.router.navigate(['/add-user']);
  }
}
