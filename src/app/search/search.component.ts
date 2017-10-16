import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  constructor(private searchService: SearchService) {}

  @Output() onShowsResult = new EventEmitter();

  values;

  public searchTvShow(e: any){
    if(e.keyCode === 13){
      if(e.target.value){
        this.values = e.target.value;
        this.searchService.searchTvShow(e.target.value)
          .then((data) => {
            this.updateParentComponent(data);
          });
      }
    }
  }

  private updateParentComponent(data){
    this.onShowsResult.emit(data);
  }
}
