from fastapi import FastAPI
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

@app.get("/todos")
def get_todos():
    return {'todos': todos}

@app.post("/add_todo_item")
def add_todo_item(todo: dict):
    todos.append(todo)
    return {"message": "Todo item added successfully"}