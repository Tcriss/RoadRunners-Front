import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsView } from './details.view';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsView;
  let fixture: ComponentFixture<VehicleDetailsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
