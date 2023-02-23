import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "src/app/shared/models/users.model";

@Injectable({
    providedIn: 'root'
})

export class AuthRepository {

    constructor(private http: HttpClient) {}

    login(body?: Users): Observable<Users> {
        return this.http.post('http://localhost:3000/auth/login', body) as Observable<Users>; 
    }
}