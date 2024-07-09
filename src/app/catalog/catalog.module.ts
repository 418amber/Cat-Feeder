import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    InfiniteScrollModule,
    RouterModule.forChild([
      { path: '', component: CatalogComponent }
    ]),
  ]
})
export class CatalogModule { }
