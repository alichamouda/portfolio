import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsBannerComponent } from './my-projects-banner.component';

describe('MyProjectsBannerComponent', () => {
  let component: MyProjectsBannerComponent;
  let fixture: ComponentFixture<MyProjectsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
