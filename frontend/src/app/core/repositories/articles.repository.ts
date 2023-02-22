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

    getArticleById(id: string): Observable<Articles> {
        return this.http.get('http://localhost:3000/articles/' + id) as Observable<Articles>;
    }

    createArticles(body: Articles): Observable<Articles[]> {
        return this.http.post('http://localhost:3000/articles', body) as Observable<Articles[]>;
    }

    updateArticle(body: Articles): Observable<Articles[]> {
        return this.http.put('http://localhost:3000/articles/' + body.id, body) as Observable<Articles[]>;
    }
}