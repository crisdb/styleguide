import {Component, OnInit} from '@angular/core';
const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
export interface ITile {
  color: string;
  headerText: string;
  rows: number;
  text: string;
  componentName: string;
  direction: string;

}

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.scss']
})
export class FormsComponent implements OnInit {
  tiles: Array<ITile>;
  direction = 'row';

// add the names to the array to loop through
  setComponents() {
    this.tiles = new Array<ITile>();
    const components = [];
    components.push('autocomplete');
    components.push('checkbox');
    components.push('datepicker');
    components.push('formfield');
    components.push('radiobutton');
    components.push('select');
    components.push('slider');
    components.push('slidetoggle');
    console.log (components);

    components.forEach(component => {
      if (component === 'autocomplete') {
        const headerText = 'Auto Complete';
        this.setTile('#ccc', headerText, '', 1, component);
      }
      if (component === 'checkbox') {
        const headerText = 'Checkbox';
        this.setTile('#ccc', headerText, '', 1, component);
      }
      if (component === 'datepicker') {
        const headerText = 'Date Picker';
        this.setTile('#ccc', headerText, '', 1, component);
      }
      if (component === 'formfield') {
        const headerText = 'Form Field';
        this.setTile('#ccc', headerText, '', 1, component);
      }
      if (component === 'radiobutton') {
        const headerText = 'Radio Button';
        this.setTile('#ccc', headerText, '', 1, component);
      }
      if (component === 'select') {
        const headerText = 'Select';
        this.setTile('#ccc', headerText, '', 1, component);
      }
      if (component === 'slider') {
        const headerText = 'Slider';
        this.setTile('#ccc', headerText, '', 1, component);
      }
      if (component === 'slidetoggle') {
        const headerText = 'Slide Toggle';
        this.setTile('#ccc', headerText, '', 1, component);
      }
    });
  }

  // tslint:disable-next-line:max-line-length
  setTile(color: string, headerText: string, text: string, rows: number, componentName: string) {
    const tile = {
      color,
      headerText,
      text,
      rows,
      componentName
    };
    // bind this to your html *ngFor
    // @ts-ignore
    this.tiles.push(tile);
    console.log(JSON.stringify(this.tiles));
  }

  ngOnInit(): void {
    this.setComponents();
  }
}
