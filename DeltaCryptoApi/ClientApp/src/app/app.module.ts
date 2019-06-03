import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';

import { CryptoDataService } from './services/CryptoDataService';
import { MarketComponent } from './components/market/market.component';
import { DeltaspecComponent } from './components/deltaspec/deltaspec.component';
import { SniperComponent } from './components/sniper/sniper.component';
import { SpecbuyorderComponent } from './components/specbuyorder/specbuyorder.component';
import { SpecsellorderComponent } from './components/specsellorder/specsellorder.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { MybuyordersComponent } from './components/mybuyorders/mybuyorders.component';
import { MysellordersComponent } from './components/mysellorders/mysellorders.component';
import { DeltacryptoService } from './services/deltacrypto.service';
import { DeltamboService } from './services/deltambo.service';
import { DeltamsoService } from './services/deltamso.service';
import { DeltawalletService } from './services/deltawallet.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MarketComponent,
    DeltaspecComponent,
    SniperComponent,
    SpecbuyorderComponent,
    SpecsellorderComponent,
    PortfolioComponent,
    WalletComponent,
    MybuyordersComponent,
    MysellordersComponent,
    PageNotFoundComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'market', component: MarketComponent },
      { path: 'sniper', component: SniperComponent },
      { path: 'deltaspec', component: DeltaspecComponent},
      { path: 'specbuyorder', component: SpecbuyorderComponent},
      { path: 'specsellorder', component: SpecsellorderComponent},
      { path: 'portfolio', component: PortfolioComponent},
      { path: 'wallet', component: WalletComponent},
      { path: 'mybuyorders', component: MybuyordersComponent},
      { path: 'mysellorders', component: MysellordersComponent},
      { path: 'callback', component: CallbackComponent },
      { path: '', redirectTo: "home", pathMatch: "full"},
      { path: '**', component: PageNotFoundComponent},
    ])
  ],
  providers: [CryptoDataService,DeltacryptoService,DeltamboService,DeltamsoService,DeltawalletService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
