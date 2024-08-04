import { Component, OnInit } from '@angular/core';
import { Hero } from '@heroes/interfaces/hero.interface';
import { HeroesService } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [`
    .responsive-grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 24px;
    }`
  ]
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
     .subscribe((heroes: Hero[]) => this.heroes = heroes)  ;
  }


}
