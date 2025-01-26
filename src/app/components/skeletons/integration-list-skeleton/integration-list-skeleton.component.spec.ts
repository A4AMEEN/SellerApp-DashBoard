import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationListSkeletonComponent } from './integration-list-skeleton.component';

describe('IntegrationListSkeletonComponent', () => {
  let component: IntegrationListSkeletonComponent;
  let fixture: ComponentFixture<IntegrationListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationListSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
