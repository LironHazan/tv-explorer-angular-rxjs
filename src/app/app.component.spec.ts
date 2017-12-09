import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { ShowsComponent } from './shows/shows.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {PageNotFoundComponent} from './not-found.component';
import { YoutubeComponent } from './show-details/youtube/youtube.component';
import { CastComponent } from './show-details/cast/cast.component';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {

  const init = () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
        ShowsComponent,
        CastComponent,
        YoutubeComponent,
        PageNotFoundComponent,
        ShowDetailsComponent
      ],
      imports: [
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [{provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
        {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
        {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
        {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'},
        {provide: APP_BASE_HREF, useValue : '/' }],
    })
      .compileComponents();
  };
  let fixture;
  let element;
  let component;
  beforeEach(async(() => {
    init();
    fixture = TestBed.createComponent(AppComponent);
    element = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
  }));

  fdescribe('', () => {
    fit('should create the app', async(() => {
      expect(component).toBeTruthy();
    }));
    fit(`should have as shows 'search a show'`, async(() => {
      expect(component.shows).toEqual('search a show');
    }));
    fit('should render title in a h2 tag', async(() => {
        expect(element.querySelector('h2').textContent).toContain('TV EXPLORER');
    }));
    fit('Verify app-search element appears', async(() => {
      expect(element.querySelector('app-search')).toBeTruthy();
    }));

    fit('goToShows returns a router.navigation call which returns promise resolved to true', async(() => {
      component.goToShows()
        .then((boolean) => {
          expect(boolean).toBeTruthy();
        });
    }));
    fit('handleShowsResult returns goToShows ', async(() => {
      const shows = [{show: []}, {show: []}];
      component.handleShowsResult(shows)
        .then((boolean) => {
          expect(boolean).toBeTruthy();
        });
    }));


  });

});
