import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';

const init = () => {
  TestBed.configureTestingModule({
    declarations: [
      SearchComponent,
    ],
    imports: [
      HttpClientModule,
    ],
    providers: [SearchService, {provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
      {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
      {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
      {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'}
      ],
  })
    .compileComponents();
};

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    init();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
