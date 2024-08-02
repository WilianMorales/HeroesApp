import { Component, OnInit } from '@angular/core';
import { Hero } from '@heroes/interfaces/hero.interface';
import { HeroesService } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [`
    .grid-card{
      display: grip;
      gap: 1rem;
      grip-auto-flow: dense;
      grip-auto-rows: 22rem;
      grip-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }

    .featured {
      grid-column: span 2;
    }
    `
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
