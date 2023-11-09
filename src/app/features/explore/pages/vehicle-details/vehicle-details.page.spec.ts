import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsPage } from './vehicle-details.page';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsPage;
  let fixture: ComponentFixture<VehicleDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
