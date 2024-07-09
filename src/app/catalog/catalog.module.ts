import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CatalogComponent,
    ScrollToTopComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    InfiniteScrollModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: CatalogComponent }
    ]),
  ]
})
export class CatalogModule { }
