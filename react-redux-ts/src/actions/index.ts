import axios from 'axios'
import { Dispatch } from 'redux'

// ENUMS
export enum Types {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODO = 'FETCH_TODO',
  DELETE_TODO = 'DELETE_TODO'
}

//TYPES
export type Actions = FetchTodosAction | DeleteTodoAction

// INTERFACES
export interface Todo {
  id?: number,
  title?: string,
  completed?: boolean
}

export interface FetchTodosAction {
  type: Types.FETCH_TODOS,
  payload: Todo[]
}

export interface DeleteTodoAction {
  type: Types.DELETE_TODO,
  payload: number
}


// ACTIONS
const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Todo[]>(url)
  dispatch<FetchTodosAction>({
    type: Types.FETCH_TODOS,
    payload: response.data
  })
}

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: Types.DELETE_TODO,
  payload: id

})