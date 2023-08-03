import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../appMaterial.module';
import { ComponentRoutingModule } from './components-routing.module';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ComponentRoutingModule,
        AppMaterialModule
    ],
    declarations: [
        SimpleCalculatorComponent,
        HomeComponent,
        MenuComponent,
        AddUserComponent,
        EditUserComponent,
        DeleteUserComponent
    ]
})
export class ComponentModule { }