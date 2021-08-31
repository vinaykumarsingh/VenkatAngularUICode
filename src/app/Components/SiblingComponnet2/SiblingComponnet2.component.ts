import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { concat } from 'rxjs';
import { ShareDataService } from 'src/app/Service/shareData.service';

@Component({
  selector: 'app-siblingComponnet2',
  templateUrl: './siblingComponnet2.component.html',
  styleUrls: ['./siblingComponnet2.component.css']
})
export class AppSiblingComponnet2 implements OnInit{
  twoWayBindingData = ""

  datafromSharedService:any;
  constructor(private shareDataService :ShareDataService) {
  }
  
  ngOnInit() {
  }

  setDataInService() {
    this.shareDataService.setCourses(this.twoWayBindingData);
    this.twoWayBindingData = "";
  }

}