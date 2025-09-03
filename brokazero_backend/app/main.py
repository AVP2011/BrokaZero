from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.core.config import settings
from app.core.db import create_db_and_tables

# Import the users router
from app.routers import users

# Define a lifespan context manager for startup/shutdown events
@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Handles startup and shutdown events for the FastAPI application.
    On startup, it creates database tables if they don't exist.
    """
    print("Application startup...")
    await create_db_and_tables()
    yield
    print("Application shutdown...")

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="0.1.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan,
)

# Include the users router
app.include_router(users.router)

@app.get("/")
async def root():
    """
    Welcome message for the root of the API.

    Returns a simple JSON payload with a welcome message.
    """
    return {"message": "Welcome to BrokaZero Backend!"}