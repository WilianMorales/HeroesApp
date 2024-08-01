import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [`
    .mat-card {
      max-width: 400px;
      margin: 2em auto;
      text-align: center;
      padding: 20px;
    } `
  ]
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
