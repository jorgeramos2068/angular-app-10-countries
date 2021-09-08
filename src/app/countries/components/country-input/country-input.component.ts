import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  public term: string = '';

  search(): void {
    this.onEnter.emit(this.term);
  }
}
