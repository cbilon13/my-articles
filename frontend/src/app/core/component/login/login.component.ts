import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Users } from "src/app/shared/models/users.model";
import { AuthService } from "../../services/auth/auth.service";
import { UsersService } from "../../services/users/users.service";

@Component({
    selector: 'my-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    users!: Users[];
    loginForm!: FormGroup;
    
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {  }

    ngOnInit(): void {
        this.users = this.route.snapshot.data['users'];
        this.loginForm = this.fb.group({
            email: ['', [Validators.required]],
            password: ['',  [Validators.required]]
        });        
    }

    login(): void {
        const user = this.users.find(user => user.email === this.loginForm.get('email')?.value && user.username === this.loginForm.get('password')?.value);
        if (this.loginForm.valid) {
            this.authService.login(user).subscribe({
                next: () => {
                    this.authService.setLoginStatus('true');
                    this.router.navigate(['/articles']);
                },
                error: () => {
                    console.warn('Incorrect login credentials')
                    this.loginForm.get('email')?.setValue('');
                    this.loginForm.get('password')?.setValue('')
                    this.router.navigate(['/login']);
                }
            })
            
        }
    }
 }