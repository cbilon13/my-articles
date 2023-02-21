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

    constructor(private articlesService: ArticlesService) { console.log('ArticlesComponent') }
    // trackBy: identify
    ngOnInit(): void {
        this.articlesService.getArticles().subscribe(articles => this.articles = articles);
    }
}