import { NgModule } from "@angular/core";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";

@NgModule({
    declarations: [
        ArticlesComponent
    ],
    imports: [
        ArticlesRoutingModule
    ]
})

export class ArticlesModule {}