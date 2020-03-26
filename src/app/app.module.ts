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
import { ButtonsComponent } from './buttons-interactions/buttons/buttons.component';
import { ChipsComponent } from './buttons-interactions/chips/chips.component';
import { ProgressSpinnerComponent } from './buttons-interactions/progress-spinner/progress-spinner.component';
import { PaginatorComponent } from './datatables/paginator/paginator.component';
import { SortHeaderComponent } from './datatables/sort-header/sort-header.component';
import { TableComponent } from './datatables/table/table.component';
import { CardComponent } from './layout/card/card.component';
import { DividerComponent } from './layout/divider/divider.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { DialogComponent } from './popups/dialog/dialog.component';
import { SnackbarComponent } from './popups/snackbar/snackbar.component';


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
    SchematicNavComponent,
    ButtonsComponent,
    ChipsComponent,
    ProgressSpinnerComponent,
    PaginatorComponent,
    SortHeaderComponent,
    TableComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    StepperComponent,
    TabsComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    DialogComponent,
    SnackbarComponent
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
