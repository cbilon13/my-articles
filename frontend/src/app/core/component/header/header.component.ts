import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

@Component({
    selector: 'article-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() title!: string;
    @Input() isCreateBtnShow: boolean = false;

    constructor(private authService: AuthService,  private router: Router) {}

    logout(): void {
        this.authService.setLoginStatus('false');
        this.router.navigate(['login'])
    }
}