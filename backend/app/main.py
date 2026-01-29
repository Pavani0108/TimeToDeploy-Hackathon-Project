import sys
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# ✅ Add backend root to PYTHONPATH
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

load_dotenv()

from routes.predictor import router

app = FastAPI(title="AI Deployment Timeline Predictor")

origins = [
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def home():
    return {"status": "Running ✅"}
