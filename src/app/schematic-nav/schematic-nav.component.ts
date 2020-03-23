import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faTable} from '@fortawesome/free-solid-svg-icons/faTable';
import {faWindowRestore} from '@fortawesome/free-solid-svg-icons/faWindowRestore';

@Component({
  selector: 'app-schematic-nav',
  templateUrl: './schematic-nav.component.html',
  styleUrls: ['./schematic-nav.component.scss']
})

export class SchematicNavComponent {
  isExpanded = true;
  hasBackdrop = 'false';
  faBars = faBars;
  faChevronLeft = faChevronLeft;
  faFileAlt = faFileAlt;
  faLocationArrow = faLocationArrow;
  faCheck = faCheck;
  faTable = faTable;
  faWindowRestore = faWindowRestore;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
