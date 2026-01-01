import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/todos")
      .then(response => response.json())
      .then(data => setTodos(data.todos))          
      
  }, [])

  return (
    <>
      <div className="container fluid">
        <h1 className="mt-3">Todo List</h1>
        <div className='row'>
          {todos.map((todo) => (
            <div className='col-4'>
              <div key={todo.id} className="card m-3">
                <div className="card-body">
                  <h5 className="card-title">{todo.task}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">ID: {todo.id}</h6>
                  <p className="card-text">{todo.desc}</p>
                  <p className="card-text">Completed: {todo.completed ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
