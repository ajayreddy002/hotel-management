import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor (
        private router: Router,
        private authService: AuthService
    ) {}
    canActivate(next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {
            let url: string = state.url;
            return this.existingUser(url);
    }

    existingUser(url: string): boolean {
        return this.authService.isLoggedInMethod;
    }
}