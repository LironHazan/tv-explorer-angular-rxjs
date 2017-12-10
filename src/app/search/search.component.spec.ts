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
  let fix, element;

  beforeEach(async(() => {
    init();
    fix = TestBed.createComponent(SearchComponent);
    element = fix.debugElement.nativeElement;

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fix.componentInstance;
    fixture.detectChanges();
  });

  fit('should create SearchComponent', () => {
    expect(component).toBeTruthy();
  });

  fit('Verify input element appears', async(() => {
    expect(element.querySelector('input')).toBeTruthy();
  }));

  fit('calling updateParentComponent should emit foo', () => {
    component.updateParentComponent('foo');
    component.onShowsResult.subscribe((value) => {
      expect(value).toEqual('foo');
       });
  });

  // fit('calling searchTvShow with mocked event', () => {
  //   const event = {keyCode: 13, target: {value: 'foo'}};
  //   component.searchTvShow(event)
  //     .then((bar) => {
  //       expect(bar).toBeTruthy();
  //     });
  // });

});
