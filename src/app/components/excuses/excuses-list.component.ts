import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcusesService } from '../../services/excuses.service';
import { Excuse } from '../../model/excuse';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-excuses-list',
  templateUrl: './excuses-list.component.html',
  styleUrls: ['./excuses-list.component.scss'],
})
export class ExcusesListComponent {
  excuses$: Observable<Excuse[]>;
  selectedExcuse: string = '';

  constructor(
    private excusesService: ExcusesService,
    private readonly favoriteService: FavoriteService
  ) {
    this.excuses$ = this.excusesService.getRandom(6);
  }

  setFavorite(excuse: Excuse | null) {
    console.log('ExcusesCardComponent', 'setFavorite');
    if (!excuse) {
      return;
    }
    this.favoriteService.addFavorite(excuse!).subscribe(() => {
      console.log('excuse added !');
    });
  }
}
