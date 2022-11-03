import { Injectable } from '@angular/core';
import { ExcusesHttpService } from './excuses-http.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExcusesService {
  constructor(private readonly httpService: ExcusesHttpService) {}

  getRandom(nb: number): Observable<string[]> {
    return this.httpService
      .getRandomExcuses(nb)
      .pipe(map((excuses) => excuses.map((e) => e.excuse)));
  }
}
