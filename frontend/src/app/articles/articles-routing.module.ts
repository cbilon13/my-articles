import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { ArticlesComponent } from "./articles.component";

const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ArticlesRoutingModule {}