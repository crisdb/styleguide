import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ThemeService} from '../theme.service';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {
  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }

  darkTheme = new FormControl(false);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
