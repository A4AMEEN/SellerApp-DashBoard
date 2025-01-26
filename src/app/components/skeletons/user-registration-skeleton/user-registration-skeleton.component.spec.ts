import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationSkeletonComponent } from './user-registration-skeleton.component';

describe('UserRegistrationSkeletonComponent', () => {
  let component: UserRegistrationSkeletonComponent;
  let fixture: ComponentFixture<UserRegistrationSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
