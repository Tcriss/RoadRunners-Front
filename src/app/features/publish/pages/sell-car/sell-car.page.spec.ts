import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarPage } from './sell-car.page';

describe('SellCarComponent', () => {
  let component: SellCarPage;
  let fixture: ComponentFixture<SellCarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellCarPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
