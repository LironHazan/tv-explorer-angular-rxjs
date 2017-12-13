import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../../../node_modules/rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(@Inject('tvAPI') private tvAPI, private http: HttpClient) {}

  public searchTvShow$(query) {
    return this.http.get(`${this.tvAPI}search/shows?q=:${query}/`);
  }

}
