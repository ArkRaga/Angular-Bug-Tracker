import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: string = 'http://localhost:5000/users';

  constructor(private http: HttpClient) {}
  getUsers(): Observable<USER[]> {
    return this.http.get<USER[]>(this.apiUrl);
  }
  addUser(user: USER): Observable<USER> {
    return this.http.post<USER>(this.apiUrl, user, httpOptions);
  }
  removeUser(user: USER): Observable<USER> {
    return this.http.delete<USER>(this.apiUrl + `/${user.id}`);
  }
  updateUser(user: USER): Observable<USER> {
    return this.http.patch<USER>(
      `${this.apiUrl}/${user.id}`,
      user,
      httpOptions
    );
  }
}
