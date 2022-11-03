import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ExcusesModule } from '../../components/excuses/excuses.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, ExcusesModule],
})
export class HomePageModule {}
