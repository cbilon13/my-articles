import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Articles } from "src/app/shared/models/articles.model";

@Injectable({
    providedIn: 'root'
})

export class ArticlesRepository {
    constructor(private http: HttpClient) {}

    getArticles(): Observable<Articles[]> {
        return this.http.get('http://localhost:3000/articles') as Observable<Articles[]>;
    }
}