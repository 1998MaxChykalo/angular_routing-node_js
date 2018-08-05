import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  declarations: []
})
export class MaterialModule { }
