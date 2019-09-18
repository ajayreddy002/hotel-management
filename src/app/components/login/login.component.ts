import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/_services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isnewUser = false;
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { 
    this.signUpForm = this.formBuilder.group({
      school_name: ['', Validators.required],
      user_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      school_address: ['', Validators.required],
      password: ['', Validators.required],
      role: [''],
      
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
}
