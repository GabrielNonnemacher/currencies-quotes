import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'quote-button-go-home',
  templateUrl: './go-home.component.html',
  styleUrls: ['./go-home.component.scss']
})
export class GoHomeComponent {

  constructor(private router: Router) {}
  
  @Output() click = new EventEmitter;

  public onClick(): void {
    this.router.navigate([""]);
  }
}
