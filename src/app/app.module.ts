import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatDishComponent } from './cat-dish/cat-dish.component';
import { CatFeederComponent } from './cat-feeder/cat-feeder.component';
import { FeederService } from './feeder.service';

@NgModule({
  declarations: [
    AppComponent,
    CatDishComponent,
    CatFeederComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FeederService],
  bootstrap: [AppComponent]
})
export class AppModule { }
