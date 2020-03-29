import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  // @ts-ignore
  parks: Park[] = [
    {value: 'everglades-0', viewValue: 'Everglades'},
    {value: 'tetons-1', viewValue: 'Grand Tetons'},
    {value: 'yellowstone-2', viewValue: 'Yellowstone'}
  ];

  ngOnInit(): void {
  }
}
