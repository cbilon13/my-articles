import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";

@NgModule({
    declarations: [
        ArticlesComponent
    ],
    imports: [
        ArticlesRoutingModule,
        CommonModule
    ]
})

export class ArticlesModule {}