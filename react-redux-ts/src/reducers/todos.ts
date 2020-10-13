import { Types, Actions, Todo } from '../actions'



export const todosReducer = (state: Todo[] = [], action: Actions) => {
  switch (action.type) {
    case Types.FETCH_TODOS:
      return action.payload
    case Types.DELETE_TODO:
        return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state
  }
}

