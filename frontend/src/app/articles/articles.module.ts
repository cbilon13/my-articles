import { NgModule } from "@angular/core";
import { AddEditArticlesComponent } from "./add-edit-articles/add-edit-articles.component";
import { SharedModule } from "../shared/shared.module";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";
import { HeaderComponent } from "../shared/component/header/header.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ArticlesComponent,
        AddEditArticlesComponent,
        HeaderComponent
    ],
    imports: [
        ArticlesRoutingModule,
        SharedModule
    ]
})

export class ArticlesModule {}