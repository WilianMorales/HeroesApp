import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '@heroes/interfaces/hero.interface';

@Component({
  selector: 'app-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styles: [
  ]
})
export class SearchHeroPageComponent implements OnInit {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
