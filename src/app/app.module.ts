import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsComponent} from './forms/forms.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {ThemeService} from './theme.service';
import {AutocompleteComponent} from './forms/autocomplete/autocomplete.component';
import {CheckboxComponent} from './forms/checkbox/checkbox.component';
import {DatepickerComponent} from './forms/datepicker/datepicker.component';
import {FormfieldComponent} from './forms/formfield/formfield.component';
import {InputComponent} from './forms/input/input.component';
import {RadiobuttonComponent} from './forms/radiobutton/radiobutton.component';
import {SelectComponent} from './forms/select/select.component';
import {SlidetoggleComponent} from './forms/sidetoggle/slidetoggle.component';
import {SliderComponent} from './forms/slider/slider.component';
import {ButtonsInteractionsComponent} from './buttons-interactions/buttons-interactions.component';
import {DatatablesComponent} from './datatables/datatables.component';
import {LayoutComponent} from './layout/layout.component';
import {NavigationComponent} from './navigation/navigation.component';
import {PopupsComponent} from './popups/popups.component';
import {SchematicNavComponent} from './schematic-nav/schematic-nav.component';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {ButtonsComponent} from './buttons-interactions/buttons/buttons.component';
import {ChipsComponent} from './buttons-interactions/chips/chips.component';
import {ProgressSpinnerComponent} from './buttons-interactions/progress-spinner/progress-spinner.component';
import {PaginatorComponent} from './datatables/paginator/paginator.component';
import {SortHeaderComponent} from './datatables/sort-header/sort-header.component';
import {TableComponent} from './datatables/table/table.component';
import {CardComponent} from './layout/card/card.component';
import {DividerComponent} from './layout/divider/divider.component';
import {ExpansionPanelComponent} from './layout/expansion-panel/expansion-panel.component';
import {StepperComponent} from './layout/stepper/stepper.component';
import {TabsComponent} from './layout/tabs/tabs.component';
import {MenuComponent} from './navigation/menu/menu.component';
import {SidenavComponent} from './navigation/sidenav/sidenav.component';
import {ToolbarComponent} from './navigation/toolbar/toolbar.component';
import {DialogComponent} from './popups/dialog/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GridComponent } from './layout/grid/grid.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {IconComponent } from './buttons-interactions/buttons/icon/icon.component';
import {ProgressbarComponent } from './buttons-interactions/buttons/progressbar/progressbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';


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
    SlidetoggleComponent,
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
    GridComponent,
    IconComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatMenuModule,
    MatStepperModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
