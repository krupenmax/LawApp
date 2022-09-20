import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PricesComponent } from './prices/prices.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { CivilHelpComponent } from './civil-help/civil-help.component';
import { FamilyHelpComponent } from './family-help/family-help.component';
import { LivingHelpComponent } from './living-help/living-help.component';
import { ArbitrazhHelpComponent } from './arbitrazh-help/arbitrazh-help.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'prices', component: PricesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'civil-help', component: CivilHelpComponent},
  { path: 'living-help', component: LivingHelpComponent},
  { path: 'family-help', component: FamilyHelpComponent},
  { path: 'arbitrazh-help', component: ArbitrazhHelpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
