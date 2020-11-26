import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarHandlerComponent } from './star-handler.component';

describe('StarHandlerComponent', () => {
  let component: StarHandlerComponent;
  let fixture: ComponentFixture<StarHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
