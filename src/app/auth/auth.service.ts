import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private router: Router){}
    isLoggedIn = false;
    get isLoggedInMethod(){
        if(localStorage.getItem('userData')){
            return this.isLoggedIn = true;
        } else {
            this.router.navigate(['login']);
            return this.isLoggedIn = false;
        }
    }
    setLoginData(userData) {
        if(userData) {
            localStorage.setItem('userData', JSON.stringify(userData[0]));
            this.router.navigate(['home/dashboard']);
        }
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}