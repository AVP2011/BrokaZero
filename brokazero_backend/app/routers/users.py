from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from app.core.db import get_session
from app.models.user import UserCreate, User, UserPublic
from passlib.context import CryptContext

router = APIRouter(prefix="/users", tags=["users"])

# Define the hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

@router.post("/", response_model=UserPublic)
async def create_user(*, session: AsyncSession = Depends(get_session), user: UserCreate):
    hashed_password = get_password_hash(user.password)

    db_user = User(
        email=user.email,
        hashed_password=hashed_password,
        is_active=True,
        is_superuser=False
    )

    session.add(db_user)
    try:
        await session.commit()
    except IntegrityError:
        await session.rollback()
        raise HTTPException(status_code=400, detail="Email already registered")

    await session.refresh(db_user)
    return db_user
