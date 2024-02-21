import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[number]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberDirective,
    multi: true
  }]
})
export class NumberDirective implements ControlValueAccessor {

  constructor( private el: ElementRef) {}

  onTouched: any;
  onChange: any;

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    let posDecimal = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if (posDecimal > 0) {
      value = value.substr(0, posDecimal) + '.' + value.substr(posDecimal);
    }

    $event.target.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }
}
