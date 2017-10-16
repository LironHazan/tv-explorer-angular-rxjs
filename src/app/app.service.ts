import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../../node_modules/rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  public _shows = [];

  constructor(@Inject('tvAPI') private tvAPI,
              @Inject('ytAPI') private ytAPI,
              @Inject('ytKey') private ytKey,
              private http:HttpClient) {}

  public setShows(shows) {
    this._shows = shows
  }

  public getShows() {
    return this._shows;
  }

  public searchCast(id) {
    return this.http.get(`${this.tvAPI}shows/${id}/cast`)
      .toPromise();
  }

  public searchVideos(query) {
    return this.http.get(`${this.ytAPI}?q=${query}&part=snippet&key=${this.ytKey}`)
      .toPromise();
  }

}
