import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  createUser(data) {
    return this.http.post(`${baseUrl}/create-user`, data);
  }

  createBook(data) {
    return this.http.post(`${baseUrl}/book`, data);
  }

  getHistory(data) {
    return this.http.post(`${baseUrl}/get-history`, data);
  }

  getAllBooks() {
    return this.http.get(`${baseUrl}/get-books`);
  }

  getAllUsers() {
    return this.http.get(`${baseUrl}/get-users`);
  }

  issueBook(data) {
    return this.http.post(`${baseUrl}/issue-book`, data);
  }
  
  returnBook(data) {
    return this.http.post(`${baseUrl}/return-book`, data);
  }
}
