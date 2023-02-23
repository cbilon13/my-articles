import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "src/app/shared/models/users.model";
import { AuthRepository } from "../../repositories/auth.repository";
import { UsersRepository } from "../../repositories/users.repository";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));

    constructor(private authRepository: AuthRepository) {}

    get loginStatus(): string {
        return JSON.parse(localStorage.getItem('loggedIn') || 
        this.loggedInStatus.toString());
    }

    setLoginStatus(value: string): void {
        this.loggedInStatus = !!value;
        localStorage.setItem('loggedIn', value);
    }

    login(body?: Users): Observable<Users> {
        return this.authRepository.login(body);
    }
}