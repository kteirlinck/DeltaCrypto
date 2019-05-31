import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { CryptoDataService } from './fetch-data/CryptoDataService';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DeltaspecComponent } from './deltaspec/deltaspec.component';
import { SniperComponent } from './sniper/sniper.component';
import { SpecbuyorderComponent } from './specbuyorder/specbuyorder.component';
import { SpecsellorderComponent } from './specsellorder/specsellorder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    DeltaspecComponent,
    SniperComponent,
    SpecbuyorderComponent,
    SpecsellorderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'deltaspec', component: DeltaspecComponent},
      { path: 'specbuyorder', component: SpecbuyorderComponent},
      { path: 'specsellorder', component: SpecsellorderComponent},
      { path: 'sniper', component: SniperComponent},
    ])
  ],
  providers: [CryptoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
