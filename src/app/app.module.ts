import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatDishComponent } from './components/cat-dish/cat-dish.component';
import { CatFeederComponent } from './components/cat-feeder/cat-feeder.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FeederService } from './services/feeder.service';
import { provideHttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';

import { Routes, RouterModule } from '@angular/router';


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
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    FeederService, 
    DataService, 
    provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
