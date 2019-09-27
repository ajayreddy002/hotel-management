import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/_services/loginService';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isnewUser = false;
  signUpForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService
  ) { 
    this.signUpForm = this.formBuilder.group({
      school_name: ['', Validators.required],
      user_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      school_address: ['', Validators.required],
      password: ['', Validators.required],
      roll: [1],
      
    })
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  newUser = () => {
    this.isnewUser = !this.isnewUser;
  }

  postSignUp = () => {
    if(this.signUpForm.valid) {
      const formModel = this.signUpForm.value;
      console.log(this.signUpForm.value);
      this.loginService.sendSignUpData('school', formModel)
      .subscribe(
        data => {
          alert(data + 'success')
        }, err => {
          alert(err + 'err')
        }
      );
    } else {
      alert("Enter Valid Details");
    }
  }
  existingUser = () => {
    if(this.loginForm.valid) {
      const formModel = this.loginForm.value;
      console.log(this.loginForm.value);
      this.loginService.sendLoginData('login',formModel)
      .subscribe(
        (data: any) => {
          console.log(data)
          this.authService.setLoginData(data.result);
        }, err => {
          alert(err + 'err')
        }
      );
    } else {
      alert("Enter Valid Details");
    }
  }
}
