import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatButtonModule, TranslateModule, RouterLink],
  exports: [HeaderComponent],
})
export class HeaderModule {}
