from fastapi import APIRouter
import pandas as pd

from models.skill_matcher import calculate_skill_match
from models.regression_model import predict_deployment
from models.prophet_forecaster import forecast_trend
from models.breakdown import deployment_breakdown
from models.gemini_advisor import generate_staffing_advice
from models.evaluation import evaluate_regression_model, evaluate_prophet_forecasting
from models.confidence import calculate_confidence
from models.utils import calculate_availability_date



router = APIRouter()


def deployment_risk(days):
    """
    Business meaningful deployment risk categories
    """

    if days <= 15:
        return {
            "category": "Ready to Deploy ✅",
            "client_impact": "On Track for Go-Live",
            "action": "Proceed with deployment"
        }

    elif days <= 30:
        return {
            "category": "Needs Preparation ⚠",
            "client_impact": "Possible Delay – Add Buffer",
            "action": "Start onboarding/training early"
        }

    else:
        return {
            "category": "Deployment at Risk 🔥",
            "client_impact": "SLA Breach Likely",
            "action": "Assign backup resource or escalate"
        }



@router.post("/predict")
def predict(req: dict):

    # -------------------------------
    # ✅ Input Fields
    # -------------------------------
    candidate_skills = req["candidate_skills"]
    required_skills = req["required_skills"]

    onboarding = int(req["onboarding_tat"])

    visa_status = req["visa_status"]  # Required / Not Required

    golive = req["project_golive_status"]

    # ✅ Visa Country Logic
    if visa_status == "Not Required":
        visa_country = "None"
    else:
        visa_country = req["visa_country"]

    # -------------------------------
    # ✅ Skill Match Calculation
    # -------------------------------
    match_data = calculate_skill_match(required_skills, candidate_skills)

    # -------------------------------
    # ✅ Delay Breakdown
    # -------------------------------
    breakdown, base_total = deployment_breakdown(
        match_data["estimated_gap_days"],
        onboarding,
        visa_status,
        visa_country
    )

    # -------------------------------
    # ✅ Prepare Input for Regression Model
    # -------------------------------
    input_df = pd.DataFrame([{
        "skill_alignment_days": match_data["estimated_gap_days"],
        "onboarding_tat": onboarding,

        # ✅ Updated visa features
        "visa_status": visa_status,
        "visa_country": visa_country,

        "project_golive_status": golive
    }])

    # -------------------------------
    # ✅ Deployment Timeline Prediction
    # -------------------------------
    predicted_days = float(predict_deployment(input_df))
    
    date_info = calculate_availability_date(predicted_days)

    
    confidence_score = calculate_confidence(predicted_days)


    # -------------------------------
    # ✅ Prophet Forecast Trend
    # -------------------------------
    trend = forecast_trend(days=3)

    # -------------------------------
    # ✅ Gemini AI Recommendation
    # -------------------------------
    advice = generate_staffing_advice(predicted_days, breakdown)

    # -------------------------------
    # ✅ Full Response (ALL Fields Included)
    # -------------------------------
    return {
        "predicted_days": predicted_days,
        
        "expected_candidate_deployment_date": date_info["expected_deployment_date"],

        
        "prediction_confidence_percent": confidence_score,


        "deployment_risk": deployment_risk(predicted_days),


        "visa_status": visa_status,
        "visa_country": visa_country,

        "skill_match_percent": float(match_data["match_percent"]),
        "missing_skills": list(match_data["missing_skills"]),

        "breakdown_factors": {
            k: int(v) for k, v in breakdown.items()
        },

        "future_forecast_trend": trend,

        "ai_staffing_recommendation": str(advice)
    }


@router.get("/metrics")
def metrics():
    """
    Returns ML model evaluation metrics
    """
    return {
        "regression_model_performance": evaluate_regression_model(),
        "time_series_forecasting_performance": evaluate_prophet_forecasting()
    }