// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { CastComponent } from './cast/cast.component';
// import { YoutubeComponent } from './youtube/youtube.component';
// import { ShowDetailsComponent } from './show-details.component';
// import { HttpClientModule } from '@angular/common/http';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
//
//
// const init = () => {
//   TestBed.configureTestingModule({
//     declarations: [
//       CastComponent,
//       YoutubeComponent,
//       ShowDetailsComponent,
//     ],
//     imports: [
//       HttpClientModule,
//       NgbModal // track open issue https://github.com/angular/angular/issues/15763
//     ],
//     providers: [{provide: 'tvAPI', useValue: 'http://api.tvmaze.com/'},
//       {provide: 'ytAPI', useValue: 'https://www.googleapis.com/youtube/v3/search'},
//       {provide: 'ytKey', useValue: 'AIzaSyBFflDzcHx0z3lTTZdvLGphfC1LXgFg_cg'},
//       {provide: 'ytDomain', useValue: 'https://www.youtube.com/embed/'}
//     ],
//   })
//     .compileComponents();
// };
//
// fdescribe('ShowDetailsComponent', () => {
//   let component: ShowDetailsComponent;
//   let fixture: ComponentFixture<ShowDetailsComponent>;
//   let fix, element;
//
//   beforeEach(async(() => {
//     init();
//     fix = TestBed.createComponent(ShowDetailsComponent);
//     element = fix.debugElement.nativeElement;
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ShowDetailsComponent);
//     component = fix.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create ShowDetailsComponent', () => {
//     expect(component).toBeTruthy();
//   });
// });
