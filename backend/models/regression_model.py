import pandas as pd
from xgboost import XGBRegressor
import joblib
import os

TEMP_DIR = "temp_storage"
os.makedirs(TEMP_DIR, exist_ok=True)

MODEL_FILE = f"{TEMP_DIR}/deployment_model.pkl"
COL_FILE = f"{TEMP_DIR}/feature_cols.pkl"


# ✅ Train Regression Model
def train_regression_model():

    df = pd.read_csv("data/deployment_data.csv")

    X = df[
        ["skill_alignment_days",
         "onboarding_tat",
         "visa_status",
         "visa_country",
         "project_golive_status"]
    ]

    y = df["deployment_days"]

    # One-hot encoding for categorical features
    X = pd.get_dummies(X)

    model = XGBRegressor(n_estimators=200, max_depth=5)
    model.fit(X, y)

    joblib.dump(model, MODEL_FILE)
    joblib.dump(X.columns, COL_FILE)

    print("✅ Regression model trained with visa-country feature")



# ✅ Predict Deployment Days
def predict_deployment(input_df):

    model = joblib.load(MODEL_FILE)
    cols = joblib.load(COL_FILE)

    encoded = pd.get_dummies(input_df)
    encoded = encoded.reindex(columns=cols, fill_value=0)

    days = model.predict(encoded)[0]

    return float(round(days, 2))
