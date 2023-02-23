import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "src/app/shared/models/users.model";

@Injectable({
    providedIn: 'root'
})

export class UsersRepository {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<Users[]> {
        return this.http.get('http://localhost:3000/users') as Observable<Users[]>;
    }
}