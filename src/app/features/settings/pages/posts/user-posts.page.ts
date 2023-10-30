import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  templateUrl: './user-posts.page.html',
  styleUrls: ['./user-posts.page.scss']
})
export class UserPostsPage {

  user$ = this.auth.user$
  userPosts = [];

  constructor(private auth: AuthService) {}
}
