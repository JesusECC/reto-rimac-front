import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public newUser = false;
  public loginForm: FormGroup;
  public formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  public errorMessage: any;

  constructor( private fb: FormBuilder,
    private router: Router) {
    this.loginForm = fb.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['test123', Validators.required]
    });
  }

  ngOnInit() {
  }

  // // Login With Google
  // loginGoogle() {
  //   this.authService.GoogleAuth();
  // }

  // // Login With Twitter
  // loginTwitter(): void {
  //   this.authService.signInTwitter();
  // }

  // // Login With Facebook
  // loginFacebook() {
  //   this.authService.signInFacebok();
  // }

  // // Simple Login
  // login() {
  //   this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
  // }

}
