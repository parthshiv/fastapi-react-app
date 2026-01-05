import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ToDoList(props) {

    return (
        <>  
            <Row>
                {props.ToDoList.map((todo) => {
                    // console.log("Rendering todo:", todo);
                    return (
                        <Col sm={4} key={todo.id}>
                            <Card >
                                <Button
                                    variant="light"
                                    size="sm"
                                    title='Delete Task'
                                    onClick={() => props.onDelete(todo.id)}
                                    style={{
                                        position: 'absolute',
                                        top: '5px',
                                        right: '5px',
                                        border: 'none',
                                        padding: '2px 6px',
                                        fontWeight: 'bold'
                                    }}
                                    ><FontAwesomeIcon icon={faTimes} /></Button>
                                <Button
                                    variant="link"
                                    size="sm"
                                    onClick={() => props.onEdit(todo)}
                                    style={{
                                        position: 'absolute',
                                        top: '5px',
                                        right: '30px',
                                        textDecoration: 'none'
                                    }}
                                    >
                                    <FontAwesomeIcon icon={faPen} />
                                    </Button>
                                <Card.Body>
                                    <Card.Title>{todo.task}</Card.Title>
                                    <Card.Text>{todo.description}</Card.Text>

                                    <Button
                                        variant={todo.completed ? 'success' : 'warning'}
                                        onClick={() => props.onStatusChange({id: todo.id, completed: !todo.completed})}
                                    >
                                        {todo.completed ? 'Completed' : 'Pending'}
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row> 
        </>
    );
}
