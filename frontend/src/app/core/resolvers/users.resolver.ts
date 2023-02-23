import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Articles } from "src/app/shared/models/articles.model";
import { Users } from "src/app/shared/models/users.model";
import { ArticlesService } from "../services/articles/articles.service";
import { UsersService } from "../services/users/users.service";


@Injectable({ providedIn: 'root' })
export class UsersResolver implements Resolve<Users[]>  {
    constructor(private usersService: UsersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Users[]>{
        return this.usersService.getUsers();
    }
}