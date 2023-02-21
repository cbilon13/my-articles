import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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
        private usersService: UsersService, 
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router) {  }

    ngOnInit(): void {
        this.usersService.getUsers().subscribe(users => this.users = users);
        this.loginForm = this.fb.group({
            email: ['', [Validators.required]],
            password: ['',  [Validators.required]]
        });        
    }

    login(): void {
        const isValidUser = this.users.some(user => user.email === this.loginForm.get('email')?.value && user.username === this.loginForm.get('password')?.value);
        if (this.loginForm.valid && isValidUser) {
            this.authService.setLoginStatus(true);
            this.router.navigate(['/articles']);
        }
    }
 }