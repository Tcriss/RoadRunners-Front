import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  user$ = this.auth.user$;
  profileForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      picture: [''],
      name: [''],
      email: [''],
      password: [''],
      phoneNumber: ['']
    });
  }

}
