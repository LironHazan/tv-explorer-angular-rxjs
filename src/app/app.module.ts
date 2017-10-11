import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import { ShowsComponent } from './shows/shows/shows.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
    {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
    {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
    {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
