import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Route } from '@angular/compiler/src/core';
import { MaterialModule } from './material/material.module';
import { MatFormField } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared/shared.module';

const routes: Routes = [
  // { path: 'about', component: AboutComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'welcome', component: WelcomeComponent },
  // // { path: 'products', component: ProductsListComponent },
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
