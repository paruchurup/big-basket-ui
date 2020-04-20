import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaSessionCreateComponent } from './yoga-session-create.component';

describe('YogaSessionCreateComponent', () => {
  let component: YogaSessionCreateComponent;
  let fixture: ComponentFixture<YogaSessionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaSessionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaSessionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
