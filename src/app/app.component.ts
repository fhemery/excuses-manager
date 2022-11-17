import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'excuse-manager';
  user$: Observable<firebase.User | null>;

  constructor(private readonly userService: UserService) {
    this.user$ = this.userService.user$;
  }

  onLogout() {
    this.userService.logout();
  }
}
