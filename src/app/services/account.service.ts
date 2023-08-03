import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


import { environment } from 'src/environments/environment';
import { User } from '../models/Users';
@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';//values can be [Start,Center,End,Left,Right]
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';//values can be [Top,bottom]
    durationInSeconds = 5;

    constructor(private router: Router, private http: HttpClient, private _snackBar: MatSnackBar) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        //This is the Non-Null Assertion Operator, which is specific to TypeScript (not regular JavaScript). The ! operator is used when the developer is certain that the value will not be null or undefined.
        //null and undefined will not be checked
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue?.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }

    openSnackBar() {
        this._snackBar.open('Success!', 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
        });
    }
}