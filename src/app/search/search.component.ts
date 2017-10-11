import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  @Output() onShowsResult = new EventEmitter();

  @Output() public notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    this.notify.emit('msg from search component');
  }
  values = '';

  searchTvShow(e: any){
    if(e.keyCode === 13){
      if(e.target.value){
        this.values = e.target.value;
        this.searchService.searchTvShow(e.target.value)
          .then((data) => {
            console.log(data);
            this.onShowsResult.emit(data);
          });
      }
    }
  }

}
