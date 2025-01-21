import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Hero } from '@heroes/interfaces/hero.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById( id: string ): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${id}`)
      .pipe(
        catchError( error => of(undefined))
      )
  }

  getSuggestions( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${ query }&_limit=6`);
  }

  addHero( hero: Hero ): Observable<Hero> {
    return this.http.post<Hero>(`${ this.baseUrl }/heroes`, hero);
  }

  updateHero( hero: Hero ): Observable<Hero> {
    if( !hero.id ) throw Error('El ID del heroe es requerido.');

    return this.http.patch<Hero>(`${ this.baseUrl }/heroes/edit/${hero.id}`, hero);
  }

  deleteHeroById( id: string ): Observable<boolean> {
    return this.http.delete(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(false) ),
        map( resp => true )
      );
  }
}
