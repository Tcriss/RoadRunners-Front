import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileView } from './profile.view';

describe('ProfileComponent', () => {
  let component: ProfileView;
  let fixture: ComponentFixture<ProfileView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
