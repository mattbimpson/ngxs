import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from '../../model/todo/todo';
import { AddTodo, DeleteTodo } from '../actions/todo-actions';
import { Injectable } from '@angular/core';

export class TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: 'todostate',
  defaults: {
    todos: []
  }
})
@Injectable()
export class TodoState {
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  add({getState, patchState}: StateContext<TodoStateModel>, { payload }: AddTodo) {
    const state = getState();
    patchState({
      todos: [ ...state.todos, payload]
    });
  }

  @Action(DeleteTodo)
  remove({getState, patchState}: StateContext<TodoStateModel>, { payload }: DeleteTodo) {
    patchState({
      todos: getState().todos.filter((_, index) => index !== Number(payload))
    });
  }
}
