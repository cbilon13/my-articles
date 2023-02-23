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
    isOpenAddEditForm: boolean = false;

    selectedArticle!: Articles;
    allArticles!: Articles[];

    title = 'Articles';
    constructor(private articlesService: ArticlesService) {  }
    // trackBy: identify
    ngOnInit(): void {
        this.articlesService.getArticles().subscribe(articles => {
            this.articles = articles;
            this.allArticles = articles;

            const test = articles[0];
            console.log(new Date(test.date));
        });
    }

    filter(articles: Articles[] | null): void {
        this.articles = articles ?? this.allArticles;
    }

    openAddEditForm() {
        this.isOpenAddEditForm = !this.isOpenAddEditForm;
    }
}