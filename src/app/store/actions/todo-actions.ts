import { Todo } from '../../model/todo/todo';

export class AddTodo {
  static readonly type = 'ADD_TODO';

  constructor(public payload: Todo) {}
}

export class DeleteTodo {
  static readonly type = 'DELETE_TODO';

  constructor(public payload: number) {}
}
