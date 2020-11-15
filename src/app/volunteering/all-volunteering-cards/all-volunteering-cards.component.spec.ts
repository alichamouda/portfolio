import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVolunteeringCardsComponent } from './all-volunteering-cards.component';

describe('AllVolunteeringCardsComponent', () => {
  let component: AllVolunteeringCardsComponent;
  let fixture: ComponentFixture<AllVolunteeringCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVolunteeringCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVolunteeringCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
