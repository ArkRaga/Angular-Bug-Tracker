import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { USER } from '../interfaces';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  currentUser!: USER;
  constructor(private userService: UsersService) {}
  login(user: USER): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map((u: USER[]) => {
        const exists = u.find(
          (usr) =>
            user.username === usr.username && user.password === usr.password
        );
        if (exists) {
          this.currentUser = exists;
          this.isLoggedIn = true;
          return true;
        } else {
          return false;
        }
      })
    );
  }
  logout() {}
}
