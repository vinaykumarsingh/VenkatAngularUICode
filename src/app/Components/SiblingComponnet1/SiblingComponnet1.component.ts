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
  arrayData = ['a', [], {}, true, ]
  isActive1= false;
  isActive2 = false;
  isValid =true;
  

  constructor(private shareDataService :ShareDataService) {
  }


  ngOnInit() {

  }
  getDataFromService() {
    this.shareDataService.getCourses().subscribe((data)=>{
      debugger;
      this.datafromSharedService = data
      this.isActive2= true
      this.isValid =false;
    });
  }
testMergeConflict(){
  return false;
}
}



