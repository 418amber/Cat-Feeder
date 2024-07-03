import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatDishComponent } from './components/cat-dish/cat-dish.component';
import { CatFeederComponent } from './components/cat-feeder/cat-feeder.component';
import { FeederService } from './services/feeder.service';
import { provideHttpClient } from '@angular/common/http';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    CatDishComponent,
    CatFeederComponent,
    CatFactsComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [FeederService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
