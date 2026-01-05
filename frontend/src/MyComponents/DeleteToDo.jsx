import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function DeleteToDoModal({ show, handleClose, todo_id, fetchTodos }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/todos/delete_todo_item/${todo_id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ todo_id })
        })
        .then(res => {
          if (!res.ok) throw new Error("Delete failed");
            fetchTodos();
          handleClose();
        });
  };
  if (!todo_id) return null; // safety

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Group className="mb-3" >
                <Form.Control 
                    type="hidden" 
                    name='id' 
                    label="id"                    
                    value={todo_id}                    
                    required/>
            </Form.Group>
            
            <p>Are you sure you want to delete this todo item?</p>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default DeleteToDoModal;
