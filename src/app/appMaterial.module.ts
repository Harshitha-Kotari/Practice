import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule
    ]
})
export class AppMaterialModule { }