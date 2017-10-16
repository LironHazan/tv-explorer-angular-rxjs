import { Component } from '@angular/core';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { SearchService } from './search/search.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  providers: [SearchService, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows = 'search a show';

  constructor (private SearchService: SearchService, private router: Router, private appService: AppService) {}

  searchTvShow(data: any): void {
    this.shows = data.map((show) => show.show);
    this.appService.setShows(this.shows);
    this.goToShows();
  }

  public goToShows() {
    this.router.navigate(['/shows']);
  }
}
