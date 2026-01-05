export default function updateTodoStatus (todo, setTodoList) {
    
  if (!todo) return;

  fetch(`http://localhost:8000/todos/update_todo_status/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  .then(response => response.json())
  .then(data => {
    //  console.log("Update response:", data);
    setTodoList(prev =>
          prev.map(todo =>
              todo.id === data.id ? data : todo
          )
      );
      
    
  });
};