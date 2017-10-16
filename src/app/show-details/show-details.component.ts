import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private appService: AppService) {}

  cast;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appService.searchCast(params.id)
        .then((data) => {
          this.cast = data;
      }).catch((err) => {console.log(err)});
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
