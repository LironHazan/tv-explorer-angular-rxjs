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


describe('AppComponent', () => {

  beforeEach(async(() => {
    init();
  }));
  fdescribe('', () => {
    fit('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
    fit(`should have as shows 'search a show'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.shows).toEqual('search a show');
    }));
    fit('should render title in a h2 tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('TV EXPLORER');
    }));

    fit('Verify app-search element appears', async(() => {
      // fakeAppService = {
      //   setShows: () => 'done'
      // };

      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.nativeElement;
      const qs = app.querySelector('app-search');
      expect(app.querySelector('app-search')).toBeTruthy();

      // fakeAppService = jasmine.createSpyObj(fakeAppService, ['setShows']); // ??
      // fakeAppService.setShows('foo').and.callFake(() => 'done');
      // const component = new AppComponent(null, null, fakeAppService);
      // component.handleShowsResult('foo');
      // expect(fakeAppService.setShows).toHaveBeenCalled();

    }));

  });

});
