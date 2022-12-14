import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Excuse } from '../../model/excuse';

@Component({
  selector: 'app-excuses-card',
  templateUrl: './excuses-card.component.html',
  styleUrls: ['./excuses-card.component.scss'],
})
export class ExcusesCardComponent {
  @Input() excuse: Excuse | null = null;

  @Output() favorite = new EventEmitter<Excuse | null>();

  addFavorite() {
    console.log('ExcusesCardComponent', 'addFavorite');
    this.favorite.emit(this.excuse);
  }
}
