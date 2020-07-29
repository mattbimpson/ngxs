import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';

export class UserStateModel {
  userId: number;
  name: string;
  lastLoggedIn: string;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    userId: null,
    name: 'guest',
    lastLoggedIn: new Date().toString()
  }
})
@Injectable()
export class UserState {

  @Selector()
  static getUser(state: UserStateModel) {
    return {
      userId: state.userId,
      name: state.name,
      lastLoggedIn: state.lastLoggedIn
    };
  }
}
