import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from './game';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders(
    {  'Content-Type':'application/json' })
};


@Injectable({ providedIn: 'root' })
export class GameService {
    private gamesUrl =  'https://7yo3rjp04a.execute-api.ap-southeast-2.amazonaws.com/dev/GameApiQuery'//'https://api-endpoint.igdb.com/games';  // URL to web api
    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }
  getColumns(): string[]{ 
          return ["Name", "Cover"];
  };        
      /* GET games whose name contains search term */
  searchGames(term: string): Observable<Game[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    let result = this.http.get<Game[]>(`${this.gamesUrl}?search=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Game[]>('searchHeroes', []))
    );
    this.log('found them!');
    return result;
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Error Encountered' + JSON.stringify(error));
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  
}