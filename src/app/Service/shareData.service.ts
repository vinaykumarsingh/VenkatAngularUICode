import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ShareDataService {
  apiEndPoints='https://jsonplaceholder.typicode.com/users'

  users:any;


  constructor(private http: HttpClient) { }

  getCourses() {
    this.http.get(this.apiEndPoints)
    .subscribe((data) => 
      {
        this.users = data;
      }
    );
  }


  setCourses(data) {
    // this.courses.push(data)
  }

}