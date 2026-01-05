from pydantic import BaseModel

# what client sends
class TodoCreate(BaseModel):
    task: str
    description: str | None = None
    completed: bool = False

class TodoUpdate(BaseModel):
    task: str
    description: str | None = None
    completed: bool
 
class TodoStatusUpdate(BaseModel):
    id: int
    completed: bool   
# what client receives
class TodoResponse(BaseModel):
    id: int
    task: str
    description: str | None
    completed: bool

    class Config:
        from_attributes = True
