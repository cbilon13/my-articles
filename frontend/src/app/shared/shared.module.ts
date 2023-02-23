import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArticlesFilterComponent } from "./component/articles-filter/articles-filter.component";

@NgModule({
    declarations: [
        ArticlesFilterComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ArticlesFilterComponent
    ],
    providers: [
        DatePipe
    ],
})

export class SharedModule {}