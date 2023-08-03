import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = JSON.parse(localStorage.getItem('user') ?? '')['LoggedInUser'];
        if (user && user != '') {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { userName: user } });
        return false;

        //const user = this.accountService.userValue;
        // if (user) {
        // authorised so return true
        //return true;
        // }

        //// not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // return false;
    }
}