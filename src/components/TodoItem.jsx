
// deconstruct todo out of props
function TodoItem({ todo, toggleTodo, deleteTodo }) {


    return (
        <div className="mt-3 d-flex">
            <label
                style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                {todo.task}
            </label>

            <input
                className="form-check-input ms-5 me-5"
                type="checkbox"

                checked={todo.isComplete}
                
                onChange={() => toggleTodo(todo.id)}
            />

            <button
                className="btn btn-primary"
                onClick={() => deleteTodo(todo.id)}>Delete
            </button>
        </div>
    )
}

export default TodoItem