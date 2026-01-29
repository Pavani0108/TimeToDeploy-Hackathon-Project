from fastapi import FastAPI
from dotenv import load_dotenv
import os

# ✅ Load environment variables from .env
load_dotenv()

# Debug check
if os.getenv("GEMINI_API_KEY") is None:
    print("⚠️ GEMINI_API_KEY missing in .env")

from routes.predictor import router

app = FastAPI(title="AI Deployment Timeline Predictor")

app.include_router(router)


@app.get("/")
def home():
    return {"status": "✅ Deployment Predictor Running"}
