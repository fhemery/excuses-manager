import { Component, EventEmitter, Input, Output } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: firebase.User | null = null;
  @Output() logout = new EventEmitter<void>();

  clickLogout() {
    this.logout.emit();
  }

  key = '';
  constructor(private readonly afMessaging: AngularFireMessaging) {}
  enableNotification() {
    this.afMessaging.requestToken // getting tokens
      .subscribe(
        (token) => {
          // USER-REQUESTED-TOKEN
          console.log('Permission granted! Save to the server!', token);
          this.key = token || '';
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
