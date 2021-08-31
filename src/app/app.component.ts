import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { ShareDataService } from './Service/shareData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testData = "test data1"
  datafromSharedService:any;

  constructor(private shareDataService :ShareDataService) {
  }


  ngOnInit() {
    // this.datafromSharedService = this.shareDataService.getCourses();
    // console.log(this.datafromSharedService);
    // console.log('datafromSharedService======>', this.datafromSharedService)
  }
}