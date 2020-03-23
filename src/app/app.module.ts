import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsComponent } from './forms/forms.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AutocompleteComponent } from './forms/autocomplete/autocomplete.component';
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { DatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormfieldComponent } from './forms/formfield/formfield.component';
import { InputComponent } from './forms/input/input.component';
import { RadiobuttonComponent } from './forms/radiobutton/radiobutton.component';
import { SelectComponent } from './forms/select/select.component';
import { SidetoggleComponent } from './forms/sidetoggle/sidetoggle.component';
import { SliderComponent } from './forms/slider/slider.component';
import { ButtonsInteractionsComponent } from './buttons-interactions/buttons-interactions.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopupsComponent } from './popups/popups.component';
import { SchematicNavComponent } from './schematic-nav/schematic-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    SidetoggleComponent,
    SliderComponent,
    ButtonsInteractionsComponent,
    DatatablesComponent,
    LayoutComponent,
    NavigationComponent,
    PopupsComponent,
    SchematicNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
