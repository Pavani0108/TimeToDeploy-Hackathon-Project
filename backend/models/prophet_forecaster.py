import pandas as pd
from prophet import Prophet
import joblib
import os

TEMP_DIR = "temp_storage"
MODEL_FILE = f"{TEMP_DIR}/prophet_model.pkl"


# ✅ Train Prophet Model
def train_prophet_model():

    df = pd.read_csv("data/deployment_data.csv")

    prophet_df = df[["date", "deployment_days"]].rename(
        columns={"date": "ds", "deployment_days": "y"}
    )

    model = Prophet()
    model.fit(prophet_df)

    joblib.dump(model, MODEL_FILE)

    print("✅ Prophet Forecast Model Stored")


# ✅ Forecast Future Deployment Trend
def forecast_trend(days=3):

    model = joblib.load(MODEL_FILE)

    future = model.make_future_dataframe(periods=days)
    forecast = model.predict(future)

    forecast_data = forecast[["ds", "yhat"]].tail(days)

    result = []
    for _, row in forecast_data.iterrows():
        result.append({
            "forecast_date": row["ds"].strftime("%Y-%m-%d"),
            "expected_avg_deployment_days": float(row["yhat"])
        })

    return result
