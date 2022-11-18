import { Component, OnDestroy } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Excuse } from '../../model/excuse';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnDestroy {
  favoritesExcuses$: Observable<Excuse[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private readonly favoritesService: FavoriteService) {
    this.favoritesExcuses$ = this.favoritesService
      .getFavorites()
      .pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
