import { useEffect, useReducer } from "react"
import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from './todoReducer'


/*const initialState = []

const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || [];
}*/

export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

  /*const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  const handleNewTodo = (todo) =>{
    const action = {
      type: '[TODO] AddTodo',
      payload: todo,
    }

    dispatchTodo(action);

  }

  const handleDeleteTodo = ( id ) => {
    dispatchTodo({
      type: '[TODO] RemoveTodo',
      payload: id,
    });
  }

  const handleToggleTodo = ( id ) => {
    dispatchTodo({
      type: '[TODO] ToggleTodo',
      payload: id,
    });
  }*/

  return (
    <>
        <h1>TodoApp({todosCount }), <small>pendientes: { pendingTodosCount }</small> </h1>
        <hr />

        <div className="row">
          <div className="col-7">
            <TodoList 
              todos={todos} 
              onDeleteTodo={ handleDeleteTodo }
              onToggleTodo={ handleToggleTodo }
            />
          </div>

          <div className="col-5">
            <h4>Agregar Todo</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>

        </div>
    </>
  )
}
