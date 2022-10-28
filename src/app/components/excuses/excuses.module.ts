import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcusesListComponent } from './excuses-list.component';
import { ExcusesCardComponent } from './excuses-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ExcusesListComponent, ExcusesCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ExcusesListComponent],
})
export class ExcusesModule {}
