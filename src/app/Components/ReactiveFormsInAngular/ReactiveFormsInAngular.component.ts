import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveFormsInAngular',
  templateUrl: './ReactiveFormsInAngular.component.html',
  styleUrls: ['./ReactiveFormsInAngular.component.css']
})
export class AppReactiveFormsInAngular implements OnInit{
  profileForm: any

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(2) ],
      lastName: ['']
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    debugger
    console.warn(this.profileForm.value);
  }

}