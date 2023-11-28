
const Todo = (props) => {
    let todos = props.todos
    return (
        <div className='todos-container'>
            <div className="title">
                {props.title}
            </div>
            {todos.map(item => {
                return (
                    <li className='todo-child' key={item.id}> {item.title} </li>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo