import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CatDishComponent } from './components/cat-dish/cat-dish.component';
import { CatFeederComponent } from './components/cat-feeder/cat-feeder.component';
import { RouterModule } from '@angular/router';

import { MatBadgeModule } from '@angular/material/badge';
import { MatCard, MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ 
    HomeComponent, 
    CatDishComponent, 
    CatFeederComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ]),
    MatBadgeModule,
    MatCardModule,
  ]
})
export class HomeModule { }
