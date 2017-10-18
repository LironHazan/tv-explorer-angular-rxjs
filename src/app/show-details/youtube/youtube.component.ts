import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  @Input() url;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.url);
  }

}
