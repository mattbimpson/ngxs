import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState } from './store/state/user-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ngxs';

  constructor(private store: Store) {}

  @Select(UserState.getUser) user$: Observable<any>;
}
