import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ShowsComponent } from './shows/shows.component';
import { RouterModule }   from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowsComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'shows', component: ShowsComponent},
      {path: 'show/:id', component: ShowDetailsComponent}
    ])
  ],
  providers: [{provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
    {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
    {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
    {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
