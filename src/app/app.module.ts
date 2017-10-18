import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './not-found.component';
import { YoutubeComponent } from './show-details/youtube/youtube.component';
import { CastComponent } from './show-details/cast/cast.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowsComponent,
    ShowDetailsComponent,
    PageNotFoundComponent,
    YoutubeComponent,
    CastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [{provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
    {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
    {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
    {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
