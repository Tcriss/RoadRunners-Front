import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesView } from './vehicles.view';

describe('VehiclesComponent', () => {
  let component: VehiclesView;
  let fixture: ComponentFixture<VehiclesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
