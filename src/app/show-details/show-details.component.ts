import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private location: Location, private appService: AppService) {}

  cast;
  show;
  videos;
  snaps; // snippet.thumbnails.default.url
  closeResult: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appService.searchCast(params.id)
        .then((data) => {
          this.cast = data;
          return this.appService.fetchShow(params.id);
      }).then((show) => {
        this.show = show;
        return this.appService.searchVideos(this.show.name);
      }).then((videos) => {
        this.videos = videos;
        this.videos = this.videos.items.reduce((acc, val) => {
          if (acc.indexOf(val.id.videoId) === -1) {
            acc.push(val);
          }
          return acc;
        }, []);
        console.log(this.videos);
      }).catch((err) => {console.log(err); });
    });
  }
  public open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  public goBack(): void {
    this.location.back();
  }
}
