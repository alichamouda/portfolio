import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCertificateCardsComponent } from './all-certificate-cards.component';

describe('AllCardsComponent', () => {
  let component: AllCertificateCardsComponent;
  let fixture: ComponentFixture<AllCertificateCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCertificateCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCertificateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
