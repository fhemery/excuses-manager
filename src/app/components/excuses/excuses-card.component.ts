import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-excuses-card',
  templateUrl: './excuses-card.component.html',
  styleUrls: ['./excuses-card.component.scss'],
})
export class ExcusesCardComponent {
  @Input() excuse: string = '';

  @Output() selected = new EventEmitter<string>();

  select() {
    this.selected.emit(this.excuse);
  }
}
