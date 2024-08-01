import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [ `
    .grip{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    } `
  ]
})
export class LayoutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
