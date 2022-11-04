import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcusesListComponent } from './excuses-list.component';
import { ExcusesCardComponent } from './excuses-card.component';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ExcusesListComponent, ExcusesCardComponent],
  imports: [CommonModule, MatCardModule, TranslateModule],
  exports: [ExcusesListComponent],
})
export class ExcusesModule {}
