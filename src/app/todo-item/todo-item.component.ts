import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo/todo';
import { Select } from '@ngxs/store';
import { TodoState } from '../store/state/todo-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  // @Select(TodoState.getDetailByTodoId(this.todo.id || null)) detail$: Observable<any>;

  constructor() { }

  ngOnInit() {
    debugger;
  }
}
