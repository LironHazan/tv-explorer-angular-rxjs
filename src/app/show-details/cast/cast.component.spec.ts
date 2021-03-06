import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastComponent } from './cast.component';

fdescribe('CastComponent', () => {
  let component: CastComponent;
  let fixture: ComponentFixture<CastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CastComponent', () => {
    expect(component).toBeTruthy();
  });
});
