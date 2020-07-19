import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { TodoState } from './todo-state';
import { AddTodo } from '../actions/todo-actions';

xdescribe('todo', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([TodoState])
      ]
    });

    store = TestBed.get(store);
  });

  it('creates a todo', () => {
    store.dispatch(new AddTodo({ id: 0, name: 'test', description: 'test' }));
    const todo = store.selectSnapshot(state => state.todos);
    expect(todo).toBe(true);
  });
});
