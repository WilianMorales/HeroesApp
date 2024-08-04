import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '@heroes/interfaces/hero.interface';
import { HeroesService } from '@heroes/services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe (
        switchMap( ({ id }) => this.heroesService.getHeroById(id)),
      ).subscribe( hero => {
        if ( !hero ) return this.router.navigate(['/heroes/list-heroes']);

        this.hero = hero;
        console.log(hero);


        return;
      })
  }

}
