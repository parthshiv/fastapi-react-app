from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
todos = [{ "id": 1, "task": "Buy Groceries", "desc": "some details of task", "completed": False },
        { "id": 2, "task": "Buy Clothes", "desc": "some details of task", "completed": True },
        { "id": 3, "task": "Go to Movie", "desc": "some details of task", "completed": False },
        { "id": 4, "task": "Go to Mall", "desc": "some details of task", "completed": False },
        { "id": 5, "task": "Go to Airport", "desc": "some details of task", "completed": False },
        { "id": 6, "task": "Go to Railway Station", "desc": "some details of task", "completed": True }]


@app.get("/")
def home():
    return {"message": "Hello, World from FastAPI!"}

# Get All Todo Items
@app.get("/todos")
def get_todos():
    return {'todos': todos}

# Add Todo Item
@app.post("/add_todo_item")
def add_todo_item(todo: dict):
    todos.append(todo)
    return {"message": "Todo item added successfully"}

# Update Todo Item
@app.put("/update_todo_item/{todo_id}")
def update_todo_item(todo_id: int, todo: dict):
    change_type = todo.get("changeRequest")
    for index, item in enumerate(todos):
        if item['id'] == todo_id:   
            if change_type == 'status': # only update status field
                item['completed'] = todo['completed']
                return {"status": "status updated", "todo": item}
            else:
                todos[index] = todo  # update all fields
                return {"status": "updated", "todo": todo}
    raise HTTPException(status_code=404, detail="Todo not found")

# Delete Todo Item
@app.delete("/delete_todo_item/{todo_id}")
def delete_todo_item(todo_id: int, todo: dict):
    for index, item in enumerate(todos):
        if item['id'] == todo_id:            
            todos.pop(index)
            return {"status": "deleted", "todos": todos}
    raise HTTPException(status_code=404, detail="Todo not found")