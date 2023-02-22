import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddEditArticlesComponent } from "../core/component/add-edit-articles/add-edit-articles.component";
import { SharedModule } from "../shared/shared.module";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";

@NgModule({
    declarations: [
        ArticlesComponent,
        AddEditArticlesComponent
    ],
    imports: [
        ArticlesRoutingModule,
        SharedModule
    ]
})

export class ArticlesModule {}