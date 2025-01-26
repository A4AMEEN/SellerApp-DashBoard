import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsLoadComponent } from './stats-load.component';

describe('StatsLoadComponent', () => {
  let component: StatsLoadComponent;
  let fixture: ComponentFixture<StatsLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
