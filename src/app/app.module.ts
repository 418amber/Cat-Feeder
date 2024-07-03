import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatDishComponent } from './components/cat-dish/cat-dish.component';
import { CatFeederComponent } from './components/cat-feeder/cat-feeder.component';
import { FeederService } from './services/feeder.service';
import { provideHttpClient } from '@angular/common/http';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'facts', component: CatFactsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }, // Redirect any unknown routes to /home
];

@NgModule({
  declarations: [
    AppComponent,
    CatDishComponent,
    CatFeederComponent,
    CatFactsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [FeederService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
