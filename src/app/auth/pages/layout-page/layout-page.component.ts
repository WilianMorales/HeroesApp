import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [ `
    .grid{
      height: 100%;
      justify-content: center;
      align-items: center;
      margin: 0;
    } `
  ]
})
export class LayoutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
