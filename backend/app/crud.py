from sqlalchemy.orm import Session
from app.models import Todo

def create_todo(db: Session, task: str, description: str, completed: bool):
    todo = Todo(task=task, description=description, completed=completed)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo

def get_all_todos(db: Session):
    return db.query(Todo).all()

def get_todo(db: Session, todo_id: int):
    return db.query(Todo).filter(Todo.id == todo_id).first()

def update_todo(db: Session, todo_id: int, task: str, completed: bool, description: str):
    todo = get_todo(db, todo_id)
    if not todo:
        return None
    todo.task = task
    todo.completed = completed
    todo.description = description
    db.commit()
    db.refresh(todo)
    return todo

def delete_todo(db: Session, todo_id: int):
    todo = get_todo(db, todo_id)
    if not todo:
        return None
    db.delete(todo)
    db.commit()
    return todo
