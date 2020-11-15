import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringCardComponent } from './volunteering-card.component';

describe('VolunteeringCardComponent', () => {
  let component: VolunteeringCardComponent;
  let fixture: ComponentFixture<VolunteeringCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteeringCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
