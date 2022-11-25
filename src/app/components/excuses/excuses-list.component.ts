import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExcusesService } from '../../services/excuses.service';
import { Excuse } from '../../model/excuse';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-excuses-list',
  templateUrl: './excuses-list.component.html',
  styleUrls: ['./excuses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExcusesListComponent {
  excuses: Excuse[] = [
    { id: 1, excuse: "J'avais aqua-poney 1", category: 'bidon' },
    { id: 2, excuse: "J'avais aqua-poney 2", category: 'bidon' },
    { id: 3, excuse: "J'avais aqua-poney 3", category: 'bidon' },
    { id: 4, excuse: "J'avais aqua-poney 4", category: 'bidon' },
    { id: 5, excuse: "J'avais aqua-poney 5", category: 'bidon' },
    { id: 6, excuse: "J'avais aqua-poney 6", category: 'bidon' },
  ];
  selectedExcuse: string = '';

  constructor(
    private excusesService: ExcusesService,
    private readonly favoriteService: FavoriteService
  ) {}

  setFavorite(excuse: Excuse | null) {
    console.log('ExcusesCardComponent', 'setFavorite');
    if (!excuse) {
      return;
    }
    this.favoriteService.addFavorite(excuse!).subscribe(() => {
      console.log('excuse added !');
    });
  }

  bump() {
    this.excuses = this.excuses.map((e) => ({ ...e, id: e.id + 1 }));
  }
}
