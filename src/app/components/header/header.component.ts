import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
} from '@angular/core';
import firebase from 'firebase/compat';
import { StoreService } from '../../services/store/store.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderSelectorService {
  model$ = this.store.state$.pipe(
    map((state) => ({
      displayLoginButton: !state.authInfo?.isLoggedIn,
      displayLogoutButton: !!state.authInfo?.isLoggedIn,
    }))
  );

  constructor(private readonly store: StoreService) {}
}

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

  constructor(private readonly selector: HeaderSelectorService) {
    selector.model$.subscribe(console.log);
  }
}
