import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo/todo';
import { Store } from '@ngxs/store';
import { TodoState } from '../store/state/todo-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  detail$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.detail$ = this.store.select(TodoState.getDetailByTodoId(this.todo.id));
  }
}
