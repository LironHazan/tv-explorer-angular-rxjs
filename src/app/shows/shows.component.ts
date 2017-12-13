import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

interface AppState {
  shows: any;
}

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows = [];

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('shows')
      .subscribe(data => {this.shows = data; });
  }

  public gotoDetail(id): void {
    this.router.navigate(['/show', id]);
  }

}
