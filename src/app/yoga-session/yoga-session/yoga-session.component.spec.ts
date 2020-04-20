import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaSessionComponent } from './yoga-session.component';

describe('YogaSessionComponent', () => {
  let component: YogaSessionComponent;
  let fixture: ComponentFixture<YogaSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
