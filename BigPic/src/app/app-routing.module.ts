import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
    imports: [
      RouterModule.forRoot([
      ]),
      ProductModule,
    ],
    providers: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
