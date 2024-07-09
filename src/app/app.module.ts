import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FeederService } from './services/feeder.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';

import { Routes, RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';
import { FactsModule } from './facts/facts.module';
import { CatalogModule } from './catalog/catalog.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'facts', 
    loadChildren: () => import('./facts/facts.module').then(m => m.FactsModule) 
  },
  { 
    path: 'catalog', 
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    HomeModule,
    FactsModule,
    CatalogModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    FeederService, 
    DataService, 
    provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
