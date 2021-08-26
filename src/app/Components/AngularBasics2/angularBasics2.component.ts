import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter  } from '@angular/core';
import { concat } from 'rxjs';
@Component({
  selector: 'app-angularBasics2',
  templateUrl: './angularBasics2.component.html',
  styleUrls: ['./angularBasics2.component.css']
})
export class AppAngularBasics2 implements OnInit{
  @Output() childEvent = new EventEmitter<string>();
  @Input() dataFromParent
  dataFromChildToParent= "this from child to parent"
  constructor() {
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log("I'm in ngOnChanges")
    console.log(changes)

  }

  ngOnInit() {
    console.log("I'm in ngOnInit")

  }
  onNameChange () {
    this.childEvent.emit(this.dataFromChildToParent);
  }

}