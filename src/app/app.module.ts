import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { PricesComponent } from './prices/prices.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AboutComponent, PricesComponent, ContactsComponent, ServicesComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule { }
