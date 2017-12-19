import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../../../node_modules/rxjs/add/operator/map';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/do';

@Injectable()
export class SearchService {

  constructor(@Inject('tvAPI') private tvAPI, private http: HttpClient, private actions$: Actions) {}


  @Effect() searchActions$ = this.actions$.ofType('SAVE')
    .do(action => {
      console.log(action);
    });

  public searchTvShow$(query) {
    return this.http.get(`${this.tvAPI}search/shows?q=:${query}/`);
  }

}
