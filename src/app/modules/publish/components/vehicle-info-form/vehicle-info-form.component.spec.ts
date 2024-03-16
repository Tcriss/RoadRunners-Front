import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInfoFormComponent } from './vehicle-info-form.component';

describe('VehicleInfoFormComponent', () => {
  let component: VehicleInfoFormComponent;
  let fixture: ComponentFixture<VehicleInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
