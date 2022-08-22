
export const TodoItem = ({ todo = {}, onDeleteTodo, onToggleTodo }) => {



  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
          onClick={ () => onToggleTodo( todo.id ) }
        >
          {todo.description}
        </span>
        <buttton 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id ) }
        >
          Borrar
        </buttton>
    </li>      
  )
}
