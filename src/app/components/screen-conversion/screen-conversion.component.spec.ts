import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenConversionComponent } from './screen-conversion.component';

describe('ScreenConversionComponent', () => {
  let component: ScreenConversionComponent;
  let fixture: ComponentFixture<ScreenConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenConversionComponent]
    });
    fixture = TestBed.createComponent(ScreenConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
