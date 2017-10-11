import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  shows: Array<any> = [];

}
