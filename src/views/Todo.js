
const Todo = (props) => {
    let { todos, title, DeleteTodo } = props
    const handleDeleteTodo = (id) => {
        DeleteTodo(id)
    }
    return (
        <div className='todos-container'>
            <div className="title">
                {title}
            </div>
            {todos.map(item => {
                return (
                    <li className='todo-child' key={item.id}>
                        {item.title} &nbsp;
                        <button type='button' onClick={() => handleDeleteTodo(item.id)}>X</button>
                    </li>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo