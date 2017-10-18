import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows = [];

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.shows = this.appService.getShows();
  }

  public gotoDetail(id): void {
    this.router.navigate(['/show', id]);
  }

}
