import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './app.service';

const init = () => {
  TestBed.configureTestingModule({
    declarations: [
    ],
    imports: [
      HttpClientModule,
    ],
    providers: [AppService, {provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
      {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
      {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
      {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'},
      ],
  })
    .compileComponents();
};

fdescribe('AppService', () => {
  beforeEach(() => {
    init();
  });

  fit('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  fit('should setShows and retrieve shows with getShows', inject([AppService], (service: AppService) => {
    const shows = [{id: 1}, {id: 2}];
    service.setShows(shows);
    expect(service.getShows()).toEqual(shows);
  }));

  fit('should test youtubeDomain', inject([AppService], (service: AppService) => {
    const _youtubeDomain = 'https://www.youtube.com/embed/';
    expect(service.youtubeDomain()).toEqual(_youtubeDomain);
  }));
});
