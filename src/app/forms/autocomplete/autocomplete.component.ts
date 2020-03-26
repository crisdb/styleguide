import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface User {
  name: string;
}
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
