import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SAVE } from '../reducers/tv-shows';
import * as actions from './actions/search.action';
import { Router } from '@angular/router';


interface SearchState {
  shows: any;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  constructor(private router: Router, private searchService: SearchService, private store: Store<SearchState>) {
      store.select('shows');
  }

  public searchTvShow$(e: any) {
    this.store.dispatch({ type: actions.SEARCH, payload: e.target.value });
    // const obs$ = this.searchService.searchTvShow$(e.target.value);
    // if (e.keyCode === 13) {
    //   this.store.dispatch({ type: actions.SEARCH, payload: e.target.value });
    //
    //   obs$.subscribe((data) => {
    // //    this.store.dispatch({ type: SAVE, payload: data });
    //     this.router.navigate(['/shows']);
    //   });
    // }
    // return obs$;
  }
}
