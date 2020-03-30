import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../theme.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-buttons-interactions',
  templateUrl: './buttons-interactions.component.html',
  styleUrls: ['./buttons-interactions.component.scss']
})
export class ButtonsInteractionsComponent implements OnInit {

  darkTheme =  new FormControl(false);
  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }

  ngOnInit(): void {
  }

}
