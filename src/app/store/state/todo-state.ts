import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
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

  @Selector()
  static getDetail(state: TodoStateModel) {
    return (id: number) => {
      const todo = state.todos.find(x => x.id === id);
      if (!todo) {
        return state;
      }

      return todo.detail;
    };
  }

  @Action(AddTodo)
  add({getState, patchState}: StateContext<TodoStateModel>, { payload }: AddTodo) {
    const state = getState();
    patchState({
      todos: [
        ...state.todos,
        { ...payload, id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 0 }
      ]
    });
  }

  @Action(DeleteTodo)
  remove({getState, patchState}: StateContext<TodoStateModel>, { payload }: DeleteTodo) {
    patchState({
      todos: getState().todos.filter((_, index) => index !== Number(payload))
    });
  }
}
