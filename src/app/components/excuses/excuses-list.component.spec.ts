import { ExcusesListComponent } from './excuses-list.component';
import { ExcusesService } from '../../services/excuses.service';
import { FavoriteService } from '../../services/favorite.service';
import { of } from 'rxjs';

describe('ExcusesListComponent', () => {
  let component: ExcusesListComponent;
  let favoriteService: FavoriteService;

  beforeEach(async () => {
    favoriteService = {} as FavoriteService;
    component = new ExcusesListComponent(
      { getRandom: () => of([]) } as unknown as ExcusesService,
      favoriteService
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the favorite service on setFavorite', function () {
    favoriteService.addFavorite = jest.fn().mockReturnValue(of(null));

    let excuse = { id: 2, excuse: '', category: '' };
    component.setFavorite(excuse);

    expect(favoriteService.addFavorite).toHaveBeenCalledWith(excuse);
  });
});
