import { Component } from '@angular/core';
import { AddTodo } from '../store/actions/todo-actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.less']
})
export class TodoCreateComponent {

  name: string;
  description: string;

  constructor(private store: Store) { }

  addTodo() {
    this.store.dispatch(new AddTodo({ name: this.name, description: this.description, id: 0 }));

    this.name = '';
    this.description = '';
  }
}
