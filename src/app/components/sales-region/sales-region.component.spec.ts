import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRegionComponent } from './sales-region.component';

describe('SalesRegionComponent', () => {
  let component: SalesRegionComponent;
  let fixture: ComponentFixture<SalesRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
