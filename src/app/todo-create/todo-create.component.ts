import { Component, OnInit } from '@angular/core';
import { AddTodo } from '../store/actions/todo-actions';
import { Store, Actions, ofActionSuccessful } from '@ngxs/store';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.less']
})
export class TodoCreateComponent implements OnInit {

  name: string;
  description: string;

  constructor(private store: Store, private actions$: Actions) { }

  ngOnInit(): void {
    this.actions$.pipe(ofActionSuccessful(AddTodo)).subscribe(() => alert('Todo created!'));
  }

  addTodo() {
    this.store.dispatch(
      new AddTodo({ name: this.name, description: this.description, id: 0, detail: { dueDate: new Date(), moreInfo: 'some more info'}}));

    this.name = '';
    this.description = '';
  }
}
