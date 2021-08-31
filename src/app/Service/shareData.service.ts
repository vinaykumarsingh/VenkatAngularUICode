import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  
  export class ShareDataService {
    courses= ["Shared Data1", "Shared Data2", "Shared Data3", "Shared Data4", ];
    constructor() { }

    getCourses () {
        return this.courses
    }

    setCourses (data) {
      this.courses.push(data)
    }
  
  }