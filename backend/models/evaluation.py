import pandas as pd
import joblib
import numpy as np
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from prophet import Prophet


TEMP_DIR = "temp_storage"
REG_MODEL = f"{TEMP_DIR}/deployment_model.pkl"
COL_FILE = f"{TEMP_DIR}/feature_cols.pkl"


def evaluate_regression_model():
    """
    Evaluates regression deployment prediction accuracy
    using MAE, RMSE, and R² score.
    """

    df = pd.read_csv("data/deployment_data.csv")

    # ✅ Updated feature set with visa_status and visa_country
    X = df[
        [
            "skill_alignment_days",
            "onboarding_tat",
            "visa_status",
            "visa_country",
            "project_golive_status"
        ]
    ]

    y_true = df["deployment_days"]

    # Load trained model + feature columns
    model = joblib.load(REG_MODEL)
    cols = joblib.load(COL_FILE)

    # Encode categoricals
    X = pd.get_dummies(X)
    X = X.reindex(columns=cols, fill_value=0)

    # Predict
    y_pred = model.predict(X)

    # Metrics
    mae = mean_absolute_error(y_true, y_pred)
    rmse = np.sqrt(mean_squared_error(y_true, y_pred))
    r2 = r2_score(y_true, y_pred)

    return {
        "MAE_days": round(float(mae), 2),
        "RMSE_days": round(float(rmse), 2),
        "R2_score": round(float(r2), 3)
    }

def evaluate_prophet_forecasting():

    # Load dataset
    df = pd.read_csv("data/deployment_data.csv")

    # Prophet expects ds and y
    prophet_df = df[["date", "deployment_days"]].rename(
        columns={"date": "ds", "deployment_days": "y"}
    )

    prophet_df["ds"] = pd.to_datetime(prophet_df["ds"])

    # ✅ Split train/test (last 20% for testing)
    split_index = int(len(prophet_df) * 0.8)

    train_df = prophet_df.iloc[:split_index]
    test_df = prophet_df.iloc[split_index:]

    # ✅ Train Prophet model
    model = Prophet()
    model.fit(train_df)

    # ✅ Forecast for test period
    future = model.make_future_dataframe(periods=len(test_df))
    forecast = model.predict(future)

    # Extract forecast values for test range
    y_pred = forecast["yhat"].tail(len(test_df)).values
    y_true = test_df["y"].values

    # ✅ Metrics
    mae = mean_absolute_error(y_true, y_pred)
    rmse = np.sqrt(mean_squared_error(y_true, y_pred))

    # Avoid division by zero
    mape = np.mean(np.abs((y_true - y_pred) / y_true)) * 100

    return {
        "Forecast_MAE_days": round(float(mae), 2),
        "Forecast_RMSE_days": round(float(rmse), 2),
        "Forecast_MAPE_percent": round(float(mape), 2)
    }