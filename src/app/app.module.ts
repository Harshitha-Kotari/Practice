import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './appMaterial.module';
import { AppIconModule } from './appIcon.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // SimpleCalculatorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
