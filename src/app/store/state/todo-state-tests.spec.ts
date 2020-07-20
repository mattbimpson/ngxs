import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { TodoState } from './todo-state';
import { AddTodo } from '../actions/todo-actions';

describe('todo', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([TodoState])
      ]
    });

    store = TestBed.get(Store);
  });

  it('creates a todo', () => {
    store.dispatch(new AddTodo({ id: 0, name: 'test', description: 'test' }));
    const todos = store.selectSnapshot(state => state.todostate.todos);
    expect(todos.length).toBe(1);
  });
});
