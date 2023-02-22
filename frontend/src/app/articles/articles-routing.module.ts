import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditArticlesComponent } from "./add-edit-articles/add-edit-articles.component";
import { ArticleResolver } from "../core/resolvers/article.resolver";
import { ArticlesComponent } from "./articles.component";

const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent
    },
    {
        path: 'create',
        component: AddEditArticlesComponent
    },
    {
        path: ':id',
        resolve: {
            article: ArticleResolver
        },
        component: AddEditArticlesComponent
    },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ArticlesRoutingModule {}