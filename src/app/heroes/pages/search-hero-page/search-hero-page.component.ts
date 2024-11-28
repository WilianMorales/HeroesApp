import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '@heroes/interfaces/hero.interface';
import { HeroesService } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styles: [
  ]
})
export class SearchHeroPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero? : Hero;

  constructor( private heroesService: HeroesService ) { }

  searchHero() {
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions(value)
      .subscribe( heroes => this.heroes = heroes );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if( !event.option.value ) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;
  }

}
