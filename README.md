# FastAPI React PostgreSQL CRUD Application

![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?logo=fastapi)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-red)
![Alembic](https://img.shields.io/badge/Alembic-Migrations-black)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-Icons-blue?logo=fontawesome)

---

## Tools and Technologies

- FastAPI – https://fastapi.tiangolo.com
- PostgreSQL – https://www.postgresql.org
- SQLAlchemy – https://www.sqlalchemy.org
- Alembic – https://alembic.sqlalchemy.org
- Pydantic – https://docs.pydantic.dev
- Uvicorn – https://www.uvicorn.org
- React – https://react.dev
- Vite – https://vitejs.dev

---

## Project Overview

This project is a full-stack CRUD application built using FastAPI, PostgreSQL, and React (Vite).  
It follows real-world development practices such as modular backend architecture, database migrations, schema validation, and RESTful API design.

The application allows users to create, read, update, and delete todo items while maintaining proper frontend state and backend data integrity.

---

## Architecture

- React handles the frontend user interface
- FastAPI provides RESTful backend APIs
- SQLAlchemy manages ORM-based database access
- Alembic handles database schema migrations
- PostgreSQL stores persistent relational data

The frontend communicates with the backend using JSON over HTTP.

---

## Project Structure

### Backend

```text
backend/
├── app/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   └── routers/
│       └── todo.py
├── alembic/
│   └── versions/
├── alembic.ini
├── .env
└── requirements.txt
```

- FastAPI application entry point
- Centralized database connection and session management
- SQLAlchemy models for database tables
- Pydantic schemas for request and response validation
- Dedicated CRUD layer for business logic
- Router-based API separation
- Alembic migrations for schema versioning

### Frontend

```text
frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── MyComponents/
        └── AddToDo.jsx
        └── DeleteToDo.jsx
        └── Header.jsx
        └── ToDoList.jsx
        └── ToDos.jsx
        └── UpdateStatus.jsx
        └── UpdateToDo.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

- Vite-based React project setup
- Component-based UI structure
- State management using React hooks
- API communication using Fetch
- Automatic UI updates after CRUD operations

---

\## Important Commands

\### Python Virtual Environment

python -m venv venv  
venv\Scripts\activate  

Used to create and activate an isolated Python environment.

---

\### Backend Dependencies

pip install fastapi uvicorn sqlalchemy alembic psycopg2-binary python-dotenv  
pip freeze > requirements.txt  

Used to install backend dependencies and lock versions.

---

\### Database Migrations (Alembic)

alembic init alembic  
alembic revision --autogenerate -m "initial migration"  
alembic upgrade head  
alembic current  

Used to manage database schema changes safely.

---

\### Start Backend Server

uvicorn app.main:app --reload  

Used to start FastAPI development server.

---

\### React Project Setup (Vite)

npm create vite@latest frontend  
cd frontend  
npm install  
npm run dev  

Used to scaffold and run the React frontend.

---

\### Bootstrap Installation

npm install bootstrap  

Used to add Bootstrap for responsive UI styling.

---

\### Frontend Production Build

npm run build  
npm run preview  

Used to generate and preview production build.

---

## Application Flow

1. User interacts with the React UI
2. React sends HTTP requests to FastAPI
3. FastAPI validates requests using Pydantic schemas
4. CRUD logic performs database operations
5. PostgreSQL stores and retrieves data
6. FastAPI returns validated responses
7. React updates the UI state

---

## Database and Migrations

- PostgreSQL is used as the primary database
- Database schema is never modified manually
- All schema changes are applied using Alembic migrations
- Column renaming and updates preserve existing data
- Schema versions are tracked and reproducible

---

## API Design Principles

- RESTful, resource-based endpoints
- Clear separation of request and response schemas
- Backend controls default values and system state
- Strict validation prevents invalid data
- Proper HTTP status codes are consistently used

---

## Frontend Integration

- React communicates with FastAPI through HTTP APIs
- CORS is configured for frontend–backend communication
- UI refreshes automatically after create, update, and delete operations
- React Strict Mode is enabled during development

---

## Important Notes

- Trailing slashes matter in FastAPI routes
- Request payloads must exactly match backend schemas
- Nullable database fields must be optional in response schemas
- Backend is the single source of truth
- React development mode may trigger effects twice
- Swagger documentation is the API source of truth

---

## Learning Outcomes

This project demonstrates:

- Real-world FastAPI project structure
- SQLAlchemy ORM usage with Alembic migrations
- Safe frontend–backend integration
- Debugging of validation and runtime errors
- Maintainable and scalable API design

---

## Future Improvements

- Authentication and authorization
- Role-based access control
- Pagination and filtering
- Dockerized deployment
- Unit and integration testing
- React Query integration

---

## Interview Summary

This project represents production-style backend and frontend development and is suitable for demonstrating full-stack skills using FastAPI, React, and PostgreSQL.

---

## License

This project is intended for learning and demonstration purposes.

```

```
