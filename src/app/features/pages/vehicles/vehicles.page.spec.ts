import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesPage } from './vehicles.page';

describe('VehiclesComponent', () => {
  let component: VehiclesPage;
  let fixture: ComponentFixture<VehiclesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
