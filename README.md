🚀 TimeToDeploy-Hackathon-Project
AI-Driven Deployment Timeline Prediction System
📌 Problem Statement

Build an AI-driven system that predicts the time required to deploy a candidate or employee onto a project by analyzing historical deployment data and current readiness signals.

The system uses a combination of time series forecasting and regression models to factor in:

Skill alignment duration

Onboarding turnaround time (TAT)

Visa readiness

Project go-live status

By leveraging these signals, the solution enables delivery and staffing teams to set realistic deployment timelines, proactively identify risks, and make informed staffing decisions.

✅ Solution Overview

TimeToDeploy is designed as a backend-driven AI system with a frontend dashboard.

🔹 Regression Model (XGBoost)

Predicts candidate-specific deployment timelines based on readiness factors.

🔹 Time-Series Forecasting (Prophet)

Analyzes historical deployment trends to capture delays and seasonality patterns.

🔹 Gemini AI Advisor (LLM)

Generates explainable, business-friendly insights and staffing recommendations.

✅ Key Features

✔ Deployment time prediction (days)
✔ Candidate availability date estimation
✔ Prediction confidence score (%)
✔ Deployment risk categorization
✔ Visa readiness impact by country
✔ Historical trend-based forecasting
✔ Gemini AI-driven recommendations
✔ API metrics for evaluation

🛠️ Project Setup & Run Instructions

The project consists of:

Backend (FastAPI + ML models)

Frontend (Dashboard UI)

🔹 Backend Setup & Run
Step 1: Navigate to Backend Directory
cd backend

Step 2: Create a Virtual Environment
python -m venv env

Step 3: Activate the Virtual Environment

Windows

env\Scripts\activate


Mac / Linux

source env/bin/activate

Step 4: Install Backend Dependencies
pip install -r requirements.txt

Step 5: Run the FastAPI Backend
uvicorn app.main:app --reload


Backend will be available at:

http://127.0.0.1:8000

🔹 Frontend Setup & Run
Step 6: Navigate to Frontend Directory

Open a new terminal and run:

cd frontend

Step 7: Install Frontend Dependencies
npm install

Step 8: Run the Frontend Application
npm run dev


Frontend will start at:

http://localhost:5173

💡 Business Value

TimeToDeploy enables predictable workforce deployment by combining AI-driven forecasting with explainable insights—reducing deployment delays, optimizing staffing decisions, and accelerating revenue realization.
