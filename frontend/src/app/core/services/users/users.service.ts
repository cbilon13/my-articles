import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "src/app/shared/models/users.model";
import { UsersRepository } from "../../repositories/users.repository";

@Injectable({
    providedIn: 'root'
  })

export class UsersService {
    users!: any[];

    constructor(private usersRepository: UsersRepository) {}

    getUsers(): Observable<Users[]> {
      return this.usersRepository.getUsers();
    }
}