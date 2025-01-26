import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRegionSkeletonComponent } from './sales-region-skeleton.component';

describe('SalesRegionSkeletonComponent', () => {
  let component: SalesRegionSkeletonComponent;
  let fixture: ComponentFixture<SalesRegionSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesRegionSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesRegionSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
