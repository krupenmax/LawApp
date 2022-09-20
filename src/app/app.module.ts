import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { PricesComponent } from './prices/prices.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { CivilHelpComponent } from './civil-help/civil-help.component';
import { LivingHelpComponent } from './living-help/living-help.component';
import { FamilyHelpComponent } from './family-help/family-help.component';
import { ArbitrazhHelpComponent } from './arbitrazh-help/arbitrazh-help.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AboutComponent, PricesComponent, ContactsComponent, HomeComponent, CivilHelpComponent, LivingHelpComponent, FamilyHelpComponent, ArbitrazhHelpComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule { }
