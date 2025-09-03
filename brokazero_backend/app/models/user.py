from typing import Optional
from sqlmodel import Field, SQLModel

class UserBase(SQLModel):
    email: str = Field(unique=True, index=True)
    is_active: bool = Field(default=True)
    is_superuser: bool = Field(default=False)

# Database table model
class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    hashed_password: str

# For user creation (input schema)
class UserCreate(SQLModel):
    email: str
    password: str

# Public response model (output schema)
class UserPublic(SQLModel):
    id: int
    email: str
    is_active: bool
    is_superuser: bool

# Response for a list of users
class UsersPublic(SQLModel):
    data: list[UserPublic]
