import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, take } from "rxjs";
import { Articles } from "src/app/shared/models/articles.model";
import { ArticlesService } from "../services/articles/articles.service";


@Injectable({ providedIn: 'root' })
export class ArticleResolver implements Resolve<Articles>  {
    constructor(private articlesService: ArticlesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Articles>{
        const articleId = route.paramMap.get('id') as string;
        return this.articlesService.getArticleById(articleId);
    }
}