import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from './search.service';
//  { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  constructor(private searchService: SearchService) {}

  @Output() onShowsResult = new EventEmitter();

  values;

  public searchTvShow(e: any) {
    if (e.keyCode === 13) {
      if (e.target.value) {
        this.values = e.target.value;
        return this.searchService.searchTvShow(e.target.value)
          .subscribe((data) => {
            return this.updateParentComponent(data);
          });
      }
    }
  }

  // when using toPromise:
  // public searchTvShow(e: any) {
  //   if (e.keyCode === 13) {
  //     if (e.target.value) {
  //       this.values = e.target.value;
  //       return this.searchService.searchTvShow(e.target.value)
  //         .then((data) => {
  //           this.updateParentComponent(data);
  //         })
  //         .catch((err) => {console.log(err); });
  //     }
  //   }
  // }

   updateParentComponent(data) {
    return this.onShowsResult.emit(data);
  }
}
