import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleImagesFormComponent } from './vehicle-images-form.component';

describe('VehicleImagesFormComponent', () => {
  let component: VehicleImagesFormComponent;
  let fixture: ComponentFixture<VehicleImagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleImagesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleImagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
