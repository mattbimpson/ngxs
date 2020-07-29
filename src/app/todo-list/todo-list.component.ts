import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Todo } from '../model/todo/todo';
import { Observable } from 'rxjs';
import { DeleteTodo } from '../store/actions/todo-actions';
import { TodoState } from '../store/state/todo-state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  deleteId: number;

  @Select(TodoState.getTodos) todos$: Observable<Todo[]>;

  constructor(private store: Store) {}

  deleteTodo() {
    this.store.dispatch(new DeleteTodo(this.deleteId));
    this.deleteId = null;
  }
}
