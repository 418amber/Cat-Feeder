import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CatFactsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: '', component: CatFactsComponent }
    ]),
  ]
})
export class FactsModule { }
