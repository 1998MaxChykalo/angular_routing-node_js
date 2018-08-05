import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProductItemComponent } from './product-item/product-item.component';
// import { ProductsListComponent } from './products-list/products-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { ProductEditComponent } from './product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent
      },
        {
          path: 'products/:id',
          component: ProductDetailsComponent,
        // resolve: { product: ProductResolver }
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        // resolve: { product: ProductResolver },
        // canDeactivate: [ProductEditGuard],
        // children: [
        //   {
        //     path: '',
        //     redirectTo: 'info',
        //     pathMatch: 'full'
        //   },
        //   {
        //     path: 'info',
        //     component: ProductEditInfoComponent
        //   },
        //   {
        //     path: 'tags',
        //     component: ProductEditTagsComponent
        //   }
        // ]
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    // ProductItemComponent,
    // ProductDetailComponent,
    // ProductEditComponent,
  ProductListComponent,
    ProductItemComponent,
    ProductEditComponent,
    ProductDetailsComponent],
  providers: [ ProductService ]
})
export class ProductModule { }
