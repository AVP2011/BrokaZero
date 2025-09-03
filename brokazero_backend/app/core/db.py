from typing import AsyncGenerator
from sqlmodel import SQLModel
from app.core.config import settings
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

# Create async engine
engine = create_async_engine(settings.DATABASE_URL, echo=True, future=True)

# Session factory
async_session_maker = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

# Initialize models & tables
async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)

# Call this in lifespan
async def create_db_and_tables():
    await init_models()

# This is the async generator function that was missing
async def get_session() -> AsyncGenerator:
    async with async_session_maker() as session:
        yield session