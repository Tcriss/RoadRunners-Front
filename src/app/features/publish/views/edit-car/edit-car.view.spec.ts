import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarView } from './edit-car.view';

describe('EditCarComponent', () => {
  let component: EditCarView;
  let fixture: ComponentFixture<EditCarView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCarView]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCarView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
