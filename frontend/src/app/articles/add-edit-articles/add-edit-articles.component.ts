import { DatePipe } from "@angular/common";
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Articles } from "src/app/shared/models/articles.model";
import { ArticlesService } from "../../core/services/articles/articles.service";

declare const $: any;

@Component({
    selector: 'add-edit-articles',
    templateUrl: './add-edit-articles.component.html',
    styleUrls: ['./add-edit-articles.component.scss']
})

export class AddEditArticlesComponent implements OnInit {
	@ViewChild('date') date!: ElementRef;

    @Output() onClose = new EventEmitter<boolean>();

    articleForm!: FormGroup;
    btnName!: string;

    constructor(
        private fb: FormBuilder, 
        private articlesService: ArticlesService, 
        public datePipe: DatePipe,
        private route: ActivatedRoute,
        private router: Router) {  }

    ngOnInit(): void {
       const selectedArticle = this.route.snapshot.data['article'];
       this.btnName = !!selectedArticle ? 'Update' : 'Create';
	   this.initDateUI();
       this.initArticleForm(selectedArticle);
    }

    onSubmit(articleForm: FormGroup): void {
        this.setDate(articleForm);
        if (articleForm.valid) {
            this.upsertArticle(articleForm);
        }
    }

    setDate(articleForm: FormGroup): void {
        const date = $('#date').val();
        articleForm.get('date')?.setValue(date);
        articleForm.get('date')?.updateValueAndValidity();
    }

	private upsertArticle(articleForm: FormGroup): void {
		const request$ = !!articleForm.get('id')?.value 
		? this.articlesService.updateArticle(articleForm.value)
		: this.articlesService.createArticle(articleForm.value);

		request$.subscribe(() => {
            this.router.navigate(['articles']);
        });
	}

    private initDateUI(): void {
        $(function() {
            $("#date").datepicker( {dateFormat : "yy-mm-dd"});
        }
       );
    }

	private initArticleForm(article: Articles): void {
		const title = !!article ? article.title : '';
       	const body = !!article ? article.body : '';
       	const date = !!article ? this.datePipe.transform(new Date(article.date), 'yyyy-MM-dd')?.toString()  : '';
       	const userId = !!article ? article.userId : '123'; // userId can't be emptied
       	const id = !!article ? article.id : null;

       	this.articleForm = this.fb.group({
        	title: [title, [Validators.required]],
        	body: [body, [Validators.required]],
        	date: date,
        	userId: userId,
        	id: id
       	});
	}
}