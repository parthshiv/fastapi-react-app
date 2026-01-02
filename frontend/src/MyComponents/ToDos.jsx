import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import UpdateToDoModal from './UpdateToDo';
import updateTodoStatus from './UpdateStatus';
import DeleteToDoModal from './DeleteToDo';

export default function ToDos() {
    
    const [todoList, setTodoList] = useState([])
    
    // Fetch todos when ToDos component mounts
    useEffect(() => {
        fetch("http://127.0.0.1:8000/todos")
        .then(response => response.json())
        .then(data => setTodoList(data.todos))          
        
    }, [])  
   
    // modal control
    const [showUpdate, setShowUpdate] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [deleteTodo, setDeleteTodoId] = useState(null);

    const openUpdateModal = (todo) => {
        setSelectedTodo(todo);
        setShowUpdate(true);
    };

    const handleStatusChange = (todo) => {        
        updateTodoStatus(todo, setTodoList); 
    };
    
    const openDeleteModal = (id) => {
        setDeleteTodoId(id);
        setShowUpdate(true);
    };

    const closeUpdateModal = () => {
        setShowUpdate(false);
        setSelectedTodo(null);
    };


    return (
        <>
            <AddToDo todoList={todoList} setTodoList={setTodoList} />
            <ToDoList ToDoList={todoList} onDelete={openDeleteModal} onEdit={openUpdateModal}  onStatusChange={handleStatusChange} />     
            <UpdateToDoModal
                show={showUpdate}
                handleClose={closeUpdateModal}
                todo={selectedTodo}
                setTodoList={setTodoList}
            /> 

            <DeleteToDoModal
                show={showUpdate}
                handleClose={closeUpdateModal}
                todo_id={deleteTodo}
                setTodoList={setTodoList}
            />
            
            
        </>   
  )
}
