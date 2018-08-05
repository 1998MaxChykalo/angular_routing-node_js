import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
    imports: [
      RouterModule.forRoot([
        { path: 'about', component: AboutComponent },
        { path: 'login', component: LoginComponent,
          data: { title: 'Login'}},
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'products',
          data: { preload: true },
          loadChildren: './products/product.module#ProductModule'
        },
        // { path: 'products', component: ProductsListComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: NotFoundComponent },
      ]),
      ProductModule,
    ],
    providers: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
