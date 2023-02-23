import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Articles } from "../../models/articles.model";

declare const $: any;
@Component({
    selector: 'articles-filter',
    templateUrl: './articles-filter.component.html',
    styleUrls: ['articles-filter.component.scss']
})

export class ArticlesFilterComponent {
    @Input() articles!: Articles[];
    @Output() filteredArticles = new EventEmitter<Articles[] | null>(); 

    onSearch(val: any): void {
        const category = val.target.value;
        const term = $('#term').val();

        let filteredArticles = null;
        if (!!category && !!term) {
            filteredArticles = this.articles.filter(article => {
                // Use to get article properties
                type ObjectKey = keyof typeof article;
                // Set typings of selected category as a property to apply dynamic property
                const prop = category as ObjectKey;
                
                return article[prop].toString().includes(term);
            });
        } else {
            $('#term').val('');
        }
        
        this.filteredArticles.emit(filteredArticles);
    }
}