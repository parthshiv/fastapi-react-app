from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import crud, schemas

router = APIRouter(prefix="/todos", tags=["Todos"])

@router.post("/add_todo_item", response_model=schemas.TodoResponse)
def create(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    return crud.create_todo(db, todo.task, todo.description, todo.completed)

@router.get("/", response_model=list[schemas.TodoResponse])
def read_all(db: Session = Depends(get_db)):
    return crud.get_all_todos(db)

@router.get("/{todo_id}", response_model=schemas.TodoResponse)
def read_one(todo_id: int, db: Session = Depends(get_db)):
    todo = crud.get_todo(db, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

@router.put("/update_todo_item/{todo_id}", response_model=schemas.TodoResponse)
def update(todo_id: int, todo: schemas.TodoUpdate, db: Session = Depends(get_db)):
    todo = crud.update_todo(db, todo_id, todo.task, todo.completed, todo.description)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

@router.put("/update_todo_status/{todo_id}", response_model=schemas.TodoResponse)
def update_status(todo_id: int, todo: schemas.TodoStatusUpdate, db: Session = Depends(get_db)):
    todo = crud.update_todo_status(db, todo_id, todo.completed)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

@router.delete("/delete_todo_item/{todo_id}")
def delete(todo_id: int, db: Session = Depends(get_db)):
    todo = crud.delete_todo(db, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return {"message": "Todo deleted"}
