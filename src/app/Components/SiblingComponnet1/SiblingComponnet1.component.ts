import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { concat } from 'rxjs';
import { ShareDataService } from 'src/app/Service/shareData.service';

@Component({
  selector: 'app-siblingComponnet1',
  templateUrl: './siblingComponnet1.component.html',
  styleUrls: ['./siblingComponnet1.component.css']
})
export class AppSiblingComponnet1 implements OnInit{

  datafromSharedService:any;

  constructor(private shareDataService :ShareDataService) {
  }


  ngOnInit() {

  }
  getDataFromService() {
    this.shareDataService.getCourses().subscribe((data)=>{
      this.datafromSharedService = data
    });
  }

}