import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './store/state/todo-state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { UserState } from './store/state/user-state';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxsModule.forRoot([
      TodoState,
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
