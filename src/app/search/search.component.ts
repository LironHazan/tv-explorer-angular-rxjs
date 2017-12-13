import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SAVE } from '../reducers/tv-shows';
import { Router } from '@angular/router';


interface Shows {
  shows: any;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  shows: Observable<any>;

  constructor(private router: Router, private searchService: SearchService, private store: Store<Shows>) {
    this.shows = store.select('shows');
  }
  values;

  public searchTvShow$(e: any): Observable <any> {
    const obs$ = this.searchService.searchTvShow$(e.target.value);
    if (e.keyCode === 13) {
      if (e.target.value) {
        this.values = e.target.value;
          obs$.subscribe((data) => {
            this.store.dispatch({ type: SAVE, payload: data });
            this.router.navigate(['/shows']);
          });
      }
    }
    return obs$;
  }
}
