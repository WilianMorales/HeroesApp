import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [ `
    .mat-card {
      max-width: 400px;
      margin: 2em auto;
      text-align: center;
      padding: 20px;
    } `
  ]
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
