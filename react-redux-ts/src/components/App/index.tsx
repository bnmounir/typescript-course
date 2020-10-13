import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Todo, fetchTodos, deleteTodo} from '../../actions'
import {StoreState} from '../../reducers'
import './App.css';

interface AppProps {
  todos?: Todo[];
  fetchTodos?: typeof fetchTodos;
  deleteTodo?: typeof deleteTodo;
}

const Loader = (): JSX.Element => <h1>Loading</h1>

function App(props: AppProps): JSX.Element {
  let todos = useSelector((state: StoreState) => state.todos)
  const dispatch = useDispatch()


  const memoizedDispatch = useCallback(() => {
    console.log('callback')
    dispatch(fetchTodos())
  }, [dispatch]);

  useEffect(() => {
    console.log('effect')
    memoizedDispatch()
  }, [memoizedDispatch]);

  console.log('render')
  return (
    <div className="App"> 
        {(todos && todos.length > 0) ?
          <ul>
            {todos.map(todo => {
              return <ul onClick={() => dispatch(deleteTodo(todo.id as number))} key={todo.id}>{todo.title}</ul>
            })}
          </ul>
          :
          <Loader /> 
        }
    </div>
  );
}

export default App;
