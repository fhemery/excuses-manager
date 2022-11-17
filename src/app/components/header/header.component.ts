import { Component, EventEmitter, Input, Output } from '@angular/core';
import firebase from 'firebase/compat';

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
}
