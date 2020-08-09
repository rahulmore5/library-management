import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: ""
  };
  submitted = false;
  constructor(private libraryservice: LibraryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  saveUser() {
    const data = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      phone: this.user.phone,
      email: this.user.email,
      address: this.user.address
    };
    this.libraryservice.createUser(data)
      .subscribe(
        (response: { code: any }) => {
          if (response.code == 200) {
            this.submitted = true;
            this.router.navigate(['/users']);
          } else {
            this.submitted = false;
          }
        },
        error => {
          console.log(error);
        });
  }
}
