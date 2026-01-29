import joblib
import numpy as np
import pandas as pd
from sklearn.metrics import mean_absolute_error

TEMP_DIR = "temp_storage"
MODEL_FILE = f"{TEMP_DIR}/deployment_model.pkl"
COL_FILE = f"{TEMP_DIR}/feature_cols.pkl"


def calculate_confidence(predicted_days):
    """
    Returns prediction confidence score in percentage.
    Uses MAE-based heuristic.
    """

    df = pd.read_csv("data/deployment_data.csv")

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

    model = joblib.load(MODEL_FILE)
    cols = joblib.load(COL_FILE)

    X = pd.get_dummies(X)
    X = X.reindex(columns=cols, fill_value=0)

    y_pred = model.predict(X)

    # ✅ Compute MAE
    mae = mean_absolute_error(y_true, y_pred)

    # ✅ Confidence heuristic
    confidence = 100 - ((mae / predicted_days) * 100)

    # Clamp confidence range for realism
    confidence = max(50, min(confidence, 95))

    return round(float(confidence), 2)
