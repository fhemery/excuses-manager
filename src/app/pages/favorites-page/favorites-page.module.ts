import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page.component';
import { ExcusesModule } from '../../components/excuses/excuses.module';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, ExcusesModule],
})
export class FavoritesPageModule {}
