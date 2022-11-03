import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcusesService } from '../../services/excuses.service';

@Component({
  selector: 'app-excuses-list',
  templateUrl: './excuses-list.component.html',
  styleUrls: ['./excuses-list.component.scss'],
})
export class ExcusesListComponent {
  excuses$: Observable<string[]>;
  selectedExcuse: string = '';

  constructor(private excusesService: ExcusesService) {
    this.excuses$ = this.excusesService.getRandom(6);
  }

  setSelected(excuse: any) {
    this.selectedExcuse = excuse;
  }
}
