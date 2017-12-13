import { Component } from '@angular/core';
import { SearchService } from './search/search.service';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  providers: [SearchService, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows = [];

  constructor () {}
}
