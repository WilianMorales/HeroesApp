import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '@heroes/interfaces/hero.interface';
import { HeroesService } from '@heroes/services/heroes.service';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [`
    img {
      width: 300px;
      height: 400px;
    }`
  ],
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
        delay(2000),
        switchMap( ({ id }) => this.heroesService.getHeroById(id)),
      ).subscribe( hero => {
        if ( !hero ) return this.router.navigate(['/heroes/list-heroes']);

        this.hero = hero;
        console.log(hero);

        return;
      })
  }

  goBack(): void {
    this.router.navigateByUrl('/heroes/list-heroes');
  }

}
