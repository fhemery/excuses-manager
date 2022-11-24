import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of } from 'rxjs';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import UserCredential = firebase.auth.UserCredential;
import { Router } from '@angular/router';
import { LoggedInAction, StoreService } from './store/store.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$: Observable<firebase.User | null> = this.auth.user;

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly router: Router,
    private readonly store: StoreService
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      map((res: UserCredential) => {
        if (!!res.user) {
          this.store.dispatch(
            new LoggedInAction({
              email: res.additionalUserInfo?.username || '',
            })
          );
        }
        return !!res.user;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('login');
    });
  }
}
