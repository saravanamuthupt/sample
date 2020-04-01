import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-page',
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.css']
})
export class DummyPageComponent implements OnInit {

  hi="Hello";
  showMe=false;
  b=['a','b','c'];

  constructor() { }

  ngOnInit() {
  }

  f1(){
    // alert('Hi');
    this.hi = 'Value changed';
    this.showMe=!this.showMe;
  }

}
