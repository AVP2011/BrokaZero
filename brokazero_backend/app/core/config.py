from pydantic_settings import BaseSettings, SettingsConfigDict
import os

class Settings(BaseSettings):
    # Use SettingsConfigDict for Pydantic V2+ to define env file
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    DATABASE_URL: str
    PROJECT_NAME: str = "BrokaZero Backend"
    API_V1_STR: str = "/api/v1"

settings = Settings()

# Optional: Print for verification during development (remove in production)
print(f"Loaded DATABASE_URL: {settings.DATABASE_URL}")