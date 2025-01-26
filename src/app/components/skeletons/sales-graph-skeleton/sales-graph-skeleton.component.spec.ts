import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGraphSkeletonComponent } from './sales-graph-skeleton.component';

describe('SalesGraphSkeletonComponent', () => {
  let component: SalesGraphSkeletonComponent;
  let fixture: ComponentFixture<SalesGraphSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesGraphSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesGraphSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
