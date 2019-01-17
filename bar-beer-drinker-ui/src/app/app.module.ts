import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { LineitemsComponent } from './lineitems/lineitems.component';
import { BeersComponent } from './beers/beers.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    DrinkerDetailsComponent,
    DrinkersComponent,
    LineitemsComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
