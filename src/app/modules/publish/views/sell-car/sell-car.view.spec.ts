import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarView } from './sell-car.view';

describe('SellCarComponent', () => {
  let component: SellCarView;
  let fixture: ComponentFixture<SellCarView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellCarView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
