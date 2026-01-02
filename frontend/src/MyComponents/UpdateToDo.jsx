import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function UpdateToDoModal({ show, handleClose, todo, setTodoList }) {

  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [completed, setCompleted] = useState(false);

  
  useEffect(() => {
    if (todo) {
      if(todo.changeRequest === 'status') {
        handleStatusChange(todo);
        return;
      }
      // console.log("Editing todo:", todo);
      setTask(todo.task);
      setDesc(todo.desc);
      setCompleted(todo.completed);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;

    fetch(`http://localhost:8000/update_todo_item/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: todo.id,
        task,
        desc,
        completed
      })
    })
    .then(response => response.json())
    .then(data => {
      // console.log("Update response:", data);
      setTodoList(prev =>
            prev.map(todo =>
                todo.id === data.todo.id ? data.todo : todo
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
                    name='desc' 
                    label="Description"
                    placeholder="Enter Description" 
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
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
