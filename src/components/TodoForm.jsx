import { useState } from "react"


function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');
    const [isValid, setIsValid] = useState(false);
    

    const handleChange = (e) => {
        setTask(e.target.value);
        if (e.target.value.length >= 2) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            addTodo(task);
            setTask('');
            setIsValid(false)
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">

                    <label className='mt-3'>What do you want to do?</label>

                    <input
                        className='form-control mt-3'
                        id='todoList'
                        placeholder='Enter task'
                        value={task}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-primary mt-3" disabled={!isValid}>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm