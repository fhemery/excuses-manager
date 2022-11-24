import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Reducer = (state: ApplicationState, action: Action) => ApplicationState;
interface AuthenticationInfo {
  isLoggedIn: boolean;
  email: string;
}

interface ProfileInfo {
  userName: string;
}

interface ApplicationState {
  authInfo?: AuthenticationInfo;
  profileInfo?: ProfileInfo;
}

export interface Action {
  type: string;
  payload?: any;
}

export class LoggedInAction implements Action {
  type = 'LoggedIn';
  constructor(readonly payload: { email: string }) {}
}

const loggedInReducer: Reducer = (state, action) => ({
  ...state,
  authInfo: { isLoggedIn: true, email: action.payload.email },
});

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private state: ApplicationState = {};
  private stateSubject$ = new BehaviorSubject<ApplicationState>(this.state);
  state$ = this.stateSubject$.asObservable();

  private reducers = new Map<string, Reducer>();
  constructor() {
    this.registerReducer('LoggedIn', loggedInReducer);
  }

  dispatch(action: Action) {
    const reducer = this.reducers.get(action.type);
    if (!!reducer) {
      const newState = reducer(this.state, action);
      this.state = newState;
      this.stateSubject$.next(newState);
      console.log('Set new state to', newState);
    }
  }

  registerReducer(actionType: string, reducer: Reducer) {
    this.reducers.set(actionType, reducer);
  }
}
