import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonsInteractionsComponent} from './buttons-interactions/buttons-interactions.component';
import {DatatablesComponent} from './datatables/datatables.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutComponent} from './layout/layout.component';
import {PopupsComponent} from './popups/popups.component';
import {FormsComponent} from './forms/forms.component';


const routes: Routes = [
  { path: 'button-interactions', component: ButtonsInteractionsComponent },
  { path: 'datatables', component: DatatablesComponent },
  { path: 'forms', component: FormsComponent},
  { path: 'layout', component: LayoutComponent },
  { path: 'popups', component: PopupsComponent},
  { path: 'navigation', component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
