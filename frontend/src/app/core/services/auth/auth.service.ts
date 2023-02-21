import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));

    setLoginStatus(value: boolean): void {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', 'true');
    }

    get loginStatus(): string {
        return JSON.parse(localStorage.getItem('loggedIn') || 
        this.loggedInStatus.toString());
    }
}