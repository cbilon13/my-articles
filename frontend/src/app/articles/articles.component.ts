import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../core/services/articles/articles.service";
import { Articles } from "../shared/models/articles.model";

@Component({
    selector: 'my-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    articles!: Articles[];
    isCreate: boolean = false;

    selectedArticle!: Articles;
    allArticles!: Articles[];
    constructor(private articlesService: ArticlesService) { console.log('ArticlesComponent') }
    // trackBy: identify
    ngOnInit(): void {
        this.articlesService.getArticles().subscribe(articles => {
            this.articles = articles;
            this.allArticles = articles;
        });
    }

    filter(articles: Articles[] | null): void {
        console.log(this.allArticles);
        this.articles = articles ?? this.allArticles;
    }

    edit(article: Articles): void {
        this.isCreate = true;
        this.selectedArticle = article;
    }

    create(state: boolean): void {
        this.isCreate = state;
    }

    close(state: boolean): void {
        this.isCreate = !state;
    }
}