import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, TranslateModule],
})
export class ProfilePageModule {}
