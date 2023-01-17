import TodoItem from './TodoItem'

function TodoList( {todos, toggleTodo, deleteTodo } ) {
    return (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)
    )
}

export default TodoList;