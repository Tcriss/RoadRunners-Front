import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsView } from './posts.view';

describe('PostsComponent', () => {
  let component: UserPostsView;
  let fixture: ComponentFixture<UserPostsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostsView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
