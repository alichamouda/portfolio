import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerPatternComponent } from './corner-pattern.component';

describe('CornerPatternComponent', () => {
  let component: CornerPatternComponent;
  let fixture: ComponentFixture<CornerPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
