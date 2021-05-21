import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeetupComponent } from './meetup.component';

describe('MeetupComponent', () => {
  let component: MeetupComponent;
  let fixture: ComponentFixture<MeetupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
