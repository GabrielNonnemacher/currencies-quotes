import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonThemeModeComponent } from './button-theme-mode.component';

describe('ButtonThemeModeComponent', () => {
  let component: ButtonThemeModeComponent;
  let fixture: ComponentFixture<ButtonThemeModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonThemeModeComponent]
    });
    fixture = TestBed.createComponent(ButtonThemeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
