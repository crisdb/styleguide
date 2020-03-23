import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetoggleComponent } from './sidetoggle.component';

describe('SidetoggleComponent', () => {
  let component: SidetoggleComponent;
  let fixture: ComponentFixture<SidetoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidetoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
