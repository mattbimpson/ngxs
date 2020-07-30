import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { patch, insertItem } from '@ngxs/store/operators';
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

  // @Selector()
  // static getDetail(state: TodoStateModel) {
  //   return (id: number) => {
  //     const todo = state.todos.find(x => x.id === id);
  //     if (!todo) {
  //       return null;
  //     }

  //     return todo.detail;
  //   };
  // }

  static getDetailByTodoId(id: number) {
    return createSelector([TodoState], (state: TodoStateModel) => {
      const todo = state.todos.find(x => x.id === id);
      if (!todo) {
        return null;
      }

      return todo.detail;
    });
  }

  @Action(AddTodo)
  add(ctx: StateContext<TodoStateModel>, { payload }: AddTodo) {
    const state = ctx.getState();
    const newTodo = { ...payload, id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 0 };
    ctx.setState(
      patch({
        todos: insertItem<Todo>(newTodo)
      })
    );
  }

  @Action(DeleteTodo)
  remove({getState, patchState}: StateContext<TodoStateModel>, { payload }: DeleteTodo) {
    patchState({
      todos: getState().todos.filter(item => item.id !== Number(payload))
    });
  }
}
