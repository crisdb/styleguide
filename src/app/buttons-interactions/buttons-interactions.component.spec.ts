import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsInteractionsComponent } from './buttons-interactions.component';

describe('ButtonsInteractionsComponent', () => {
  let component: ButtonsInteractionsComponent;
  let fixture: ComponentFixture<ButtonsInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
