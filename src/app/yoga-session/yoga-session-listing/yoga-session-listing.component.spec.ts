import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaSessionListingComponent } from './yoga-session-listing.component';

describe('YogaSessionListingComponent', () => {
  let component: YogaSessionListingComponent;
  let fixture: ComponentFixture<YogaSessionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaSessionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaSessionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
