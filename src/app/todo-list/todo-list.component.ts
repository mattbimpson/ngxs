import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Todo } from '../model/todo/todo';
import { Observable } from 'rxjs';
import { DeleteTodo } from '../store/actions/todo-actions';
import { TodoState } from '../store/state/todo-state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent {

  deleteIndex: number;
  // selectedTodoId: number;

  @Select(TodoState.getTodos) todos$: Observable<Todo[]>;
  // detail$: Observable<any>;

  constructor(private store: Store) {}

  deleteTodo() {
    this.store.dispatch(new DeleteTodo(this.deleteIndex));
    this.deleteIndex = null;
  }

  // showDetail(id: number) {
  //   this.detail$ = this.store.select(TodoState.getDetailByTodoId(id));
  // }
}
