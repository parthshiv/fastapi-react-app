import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function UpdateToDoModal({ show, handleClose, todo, setTodoList }) {

  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  
  useEffect(() => {
    if (todo) {     
      // console.log("Editing todo:", todo);
      setTask(todo.task);
      setDescription(todo.description);
      setCompleted(todo.completed);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;

    fetch(`http://localhost:8000/todos/update_todo_item/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: todo.id,
        task,
        description,
        completed
      })
    })
    .then(response => response.json())
    .then(data => {
      // console.log("Update response:", data);
      setTodoList(prev =>
            prev.map(todo =>
                todo.id === data.id ? data : todo
            )
        );
        handleClose();
      
    });
  };

  
  if (!todo) return null; // safety

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    name='task' 
                    label="Title"
                    placeholder="Enter Title" 
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    type="text" 
                    name='description' 
                    label="Description"
                    placeholder="Enter Description" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required/>
            </Form.Group>
            <Form.Group className="mb-3" >                
                <Form.Check
                            type="checkbox"
                            label="Completed"
                            name='completed'
                            checked={completed}
                            onChange={e => setCompleted(e.target.checked)}
                        />
            </Form.Group>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UpdateToDoModal;
