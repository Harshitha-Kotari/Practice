import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../helpers/auth.guard';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },//, canActivate: [AuthGuard]
    { path: 'home/:functionName', component: HomeComponent },
    {
        path: 'calci', component: SimpleCalculatorComponent
        // ,children: [
        //     { path: 'login', component: LoginComponent },
        // { path: 'register', component: RegisterComponent }
    },
    { path: '**', redirectTo: 'home' },//error component
    { path: '', redirectTo: 'home' }
    // ]
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentRoutingModule { }