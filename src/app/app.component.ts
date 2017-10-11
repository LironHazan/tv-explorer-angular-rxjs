import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { SearchService } from './search/search.service';

@Component({
  selector: 'app-root',
  providers: [SearchService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  shows = 'search a show';
  //initialCount: number = 10;

  constructor (private SearchService: SearchService) {}

  searchTvShow(data: any): void {
    console.log('shows: ', data);
    this.shows = data;
  }

}
