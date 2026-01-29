# 🚀 TimeToDeploy-Hackathon-Project  
### AI-Driven Deployment Timeline Prediction System

---

## 📌 Problem Statement

Delivery and staffing teams often struggle to accurately estimate how long it will take to deploy a candidate onto a project.

This system predicts deployment time by analyzing:

- Skill alignment duration (missing skill gaps)
- Onboarding turnaround time (TAT)
- Visa readiness with country-based delay impact
- Project go-live urgency
- Historical deployment trends

---

## ✅ Solution Overview

This backend system is powered by:

### 🔹 Regression Model (XGBoost)
Predicts candidate-specific deployment timeline based on readiness factors.

### 🔹 Time-Series Forecasting (Prophet)
Forecasts overall staffing trend delays across upcoming days.

### 🔹 Gemini AI Advisor (LLM)
Generates actionable staffing recommendations based on delay breakdown.

---

## ✅ Key Features

✔ Deployment time prediction (days)  
✔ Candidate availability date estimation  
✔ Prediction confidence score (%)  
✔ Deployment risk category with staffing action  
✔ Visa delay breakdown by country  
✔ Forecast trend insight using Prophet  
✔ Gemini AI recommendation for delivery planning  
✔ Metrics endpoint for evaluation  


# ✅ Backend Run Steps

### Step 1: Create a Virtual Environment

Create a virtual environment using the command:

From folder structure: TimeToDeploy-Hackathon-Project\backend 
python -m venv env

# Activate it:

# Windows:

env\Scripts\activate

# Mac/Linux:

source env/bin/activate

# Step 2: Install the Requirements

Install the requirements using the command:

pip install -r requirements.txt

# Step 3: Generate the Synthetic Data

Generate the Synthetic data by running the command:

python generate_data.py


This creates a realistic dataset with:

Skill gap delays

Onboarding turnaround variation

Visa delays by country

Deployment timelines for training

# Step 4: Train the Models

Train the models using the command:

python train.py


This trains:

✅ XGBoost Regression Model
✅ Prophet Forecasting Model

Models are saved temporarily inside:

app/temp_storage/

# Step 5: Run the FastAPI Backend

Run the project by using the command:

uvicorn app.main:app --reload


Server will start at:

http://127.0.0.1:8000