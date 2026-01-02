export default function updateTodoStatus (todo, setTodoList) {
    
  if (!todo) return;

  fetch(`http://localhost:8000/update_todo_item/${todo.id}`, {
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
              todo.id === data.todo.id ? data.todo : todo
          )
      );
      
    
  });
};