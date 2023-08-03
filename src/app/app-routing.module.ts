import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { SimpleCalculatorComponent } from './Components/simple-calculator/simple-calculator.component';
import { AuthGuard } from './helpers/auth.guard';

const ComponentModule = () => import('./Components/components.module').then(x => x.ComponentModule);

const routes: Routes = [
  // { path: 'account', loadChildren: ComponentModule },
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo: '' },
  { path: 'loggedin', loadChildren: ComponentModule, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
  // ,
  // { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
