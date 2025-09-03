from fastapi import APIRouter, Depends
from sqlmodel import Session
from app.core.db import get_session
from app.models.user import UserCreate, User

# Import the password hashing utility
from passlib.context import CryptContext

router = APIRouter()

# Define the hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# A function to hash a password
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

@router.post("/users/", response_model=User)
def create_user(*, session: Session = Depends(get_session), user: UserCreate):
    # Hash the plain-text password from the request
    hashed_password = get_password_hash(user.password)

    # Create a new User object with the hashed password
    db_user = User(
        email=user.email,
        hashed_password=hashed_password,
        is_active=user.is_active,
        is_superuser=user.is_superuser
    )

    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user