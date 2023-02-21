import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Articles } from "src/app/shared/models/articles.model";
import { ArticlesRepository } from "../../repositories/articles.repository";

@Injectable({
    providedIn: 'root'
})

export class ArticlesService {
    constructor(private articlesRepository: ArticlesRepository) {}

    getArticles(): Observable<Articles[]> {
        return this.articlesRepository.getArticles();
    }

    createArticle(body: Articles): Observable<Articles[]> {
        return this.articlesRepository.createArticles(body);
    }

    updateArticle(body: Articles): Observable<Articles[]> {
        return this.articlesRepository.updateArticle(body);
    }
}