import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { SearchService } from './search.service';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnDestroy {

  constructor(private searchService: SearchService) {}

  private subject = new Subject<any>();

  @Output() onShowsResult = new EventEmitter();

  values;

  public searchTvShow$(e: any): Observable <any> {
    const obs$ = this.searchService.searchTvShow$(e.target.value);
    if (e.keyCode === 13) {
      if (e.target.value) {
        this.values = e.target.value;
        obs$.subscribe((data) => {
              this.updateParentComponent(data);
          });
      }
    }
    return obs$;
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

  ngOnDestroy() {
    this.subject.unsubscribe();
  }
}
