import { DatePipe } from "@angular/common";
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Articles } from "src/app/shared/models/articles.model";
import { ArticlesService } from "../../services/articles/articles.service";

declare const $: any;

@Component({
    selector: 'add-edit-articles',
    templateUrl: './add-edit-articles.component.html',
    styleUrls: ['./add-edit-articles.component.scss']
})

export class AddEditArticlesComponent implements OnInit {
	@ViewChild('date') date!: ElementRef;

    @Input() selectedArticle!: Articles | null;
    @Output() onClose = new EventEmitter<boolean>();

    articleForm!: FormGroup;
    btnName!: string;

    constructor(private fb: FormBuilder, private articlesService: ArticlesService, public datePipe: DatePipe) {  }

    ngOnInit(): void {
       this.btnName = !!this.selectedArticle ? 'Update' : 'Create';
	   this.initDateUI();
       this.initArticleForm();
    }

    onSubmit(articleForm: FormGroup): void {
        if (articleForm.valid) {
            this.upsertArticle(articleForm);
        }
    }

	private upsertArticle(articleForm: FormGroup): void {
		const request$ = !!articleForm.get('userId')?.value 
		? this.articlesService.updateArticle(articleForm.value)
		: this.articlesService.createArticle(articleForm.value);

		request$.subscribe(ex => console.log(ex));
	}

    private initDateUI(): void {
        $(function() {
            $("#date").datepicker( {dateFormat : "yy-mm-dd"});
        }
       );
    }

	private initArticleForm(): void {
		const title = !!this.selectedArticle ? this.selectedArticle.title : '';
       	const body = !!this.selectedArticle ? this.selectedArticle.body : '';
       	const date = !!this.selectedArticle ? this.datePipe.transform(new Date(this.selectedArticle.date), 'yyyy-mm-dd')  : '';
       	const userId = !!this.selectedArticle ? this.selectedArticle.userId : '123-123';
       	const id = !!this.selectedArticle ? this.selectedArticle.id : '1';

       	this.articleForm = this.fb.group({
        	title: [title, [Validators.required]],
        	body: [body, [Validators.required]],
        	date: date,
        	userId: userId,
        	id: id
       	});
	}
}