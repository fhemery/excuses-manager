import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { WebcamModule } from 'ngx-webcam';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, TranslateModule, WebcamModule, MatButtonModule],
})
export class ProfilePageModule {}
