import { Component } from '@angular/core';
import { ProfilePageModel } from '../../model/profile-page-model';
import { Observable } from 'rxjs';
import { ProfilePageService } from './profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  profile$: Observable<ProfilePageModel | null> = this.profilePageService.get();

  constructor(private readonly profilePageService: ProfilePageService) {}
}
