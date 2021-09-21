import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { concat } from 'rxjs';
import { ShareDataService } from 'src/app/Service/shareData.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-siblingComponnet1',
  templateUrl: './siblingComponnet1.component.html',
  styleUrls: ['./siblingComponnet1.component.css']
})
export class AppSiblingComponnet1 implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'phone', 'username', 'website', 'email', 'company', 'address'];
  // displayedColumns: string[] = ['id', 'name', 'phone', 'username', 'website', 'email'];

  dataSource = []

  @ViewChild(MatPaginator) paginator: MatPaginator;


  datafromSharedService: any;
  arrayData = ['a', [], {}, true,]
  isActive1 = false;
  isActive2 = false;
  isValid = true;
  isShowTable = false;


  constructor(private shareDataService: ShareDataService) {

  }


  ngOnInit() {
  }

  hideTable() {
    this.isShowTable = false;
  }

  getDataFromService() {

    if (this.dataSource.length === 0) {
      this.shareDataService.getCourses().subscribe((data) => {
        debugger;
        this.datafromSharedService = data
        this.isActive2 = true
        this.isValid = false;
        this.dataSource = [...data]
        this.isShowTable = true;
      });
    } else {
      this.isShowTable = true;
    }

  }
  testMergeConflict() {
    return false;
  }
}



