import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ShareDataService {
  apiEndPoints='https://jsonplaceholder.typicode.com/users'

  users:any;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
   return this.http.get(this.apiEndPoints)
  }


  setCourses(data) {
    // this.courses.push(data)
  }

}