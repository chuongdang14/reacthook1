import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react'
import Todo from './views/Todo';

function App() {
  let [name, setName] = useState('')
  let [address, setAddress] = useState('')
  let [todos, setTodos] = useState([
    { id: 'todo 1', title: 'Watching youtube', type: 'Chuong' },
    { id: 'todo 2', title: 'Playing game', type: 'Chuong' },
    { id: 'todo 3', title: 'Coding', type: 'Tien' },
    { id: 'todo 4', title: 'Reading book', type: 'Dang' },
  ])

  const handleClickButton = () => {
    if (!address) {
      alert('Please enter value')
      return
    }
    let newTodo = {
      id: 'todo 1',
      title: address
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnChange = (e) => {
    setAddress(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello world {name}</h2>
        <Todo
          todos={todos}
          title='All titles'
        />
        <Todo
          title='Chuong titles'
          todos={todos.filter(t => t.type === 'Chuong')}
        />
        <input type='text' value={address} onChange={(e) => handleOnChange(e)} />
        <button type='button' onClick={() => handleClickButton()}>Click me</button>
      </header>
    </div>
  )
}

export default App;
