import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsComponent } from './shows.component';
import { SearchComponent } from '../search/search.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import {PageNotFoundComponent} from '../not-found.component';
import { YoutubeComponent } from '../show-details/youtube/youtube.component';
import { CastComponent } from '../show-details/cast/cast.component';
import {APP_BASE_HREF} from '@angular/common';
import { AppService } from '../app.service';

const init = () => {
  TestBed.configureTestingModule({
    declarations: [
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
    providers: [AppService, {provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
      {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
      {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
      {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'},
      {provide: APP_BASE_HREF, useValue : '/' }],
  })
    .compileComponents();
};
fdescribe('ShowsComponent', () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;

  beforeEach(async(() => {
    init();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
