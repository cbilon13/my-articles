import { Component } from "@angular/core";

@Component({
    selector: 'my-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
    constructor() { console.log('ArticlesComponent') }
}