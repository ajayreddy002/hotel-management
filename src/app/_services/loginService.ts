import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignUpModel, ILoginModel } from '../_models/loginModel';
import { AppConstants } from '../app.constants';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(
        private httpClient: HttpClient
    ) {}
    sendSignUpData (endPoint: string, payLoad: ISignUpModel) {
        return this.httpClient.post (AppConstants.API_URL + endPoint, payLoad);
    }
    sendLoginData (endPoint: string, payLoad: ILoginModel) {
        return this.httpClient.post (AppConstants.API_URL + endPoint, payLoad);
    }
}