"""
===========================================================
AI Deployment Timeline Predictor - Training Pipeline
-----------------------------------------------------------
This script trains:

1. Regression Model (XGBoost)
2. Time-Series Forecast Model (Prophet)

Models are stored in temp files (No DB required)

Run:
    python train.py
===========================================================
"""

import os
import logging

from models.regression_model import train_regression_model
from models.prophet_forecaster import train_prophet_model

from generate_data import generate_deployment_dataset


# ✅ Configure Logger
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)

logger = logging.getLogger(__name__)


DATA_FILE = "data/deployment_data.csv"


def ensure_dataset_exists():
    """
    Ensures dataset is available for training.
    If missing, generates synthetic dataset automatically.
    """

    if not os.path.exists(DATA_FILE):
        logger.warning("Dataset not found!")

        logger.info("Generating synthetic deployment dataset...")
        generate_deployment_dataset(rows=1000)

        logger.info("Synthetic dataset created successfully ✅")

    else:
        logger.info(f"Dataset found: {DATA_FILE}")


def train_all_models():
    """
    Full end-to-end training pipeline.
    """

    logger.info("=" * 55)
    logger.info("🚀 Starting AI Deployment Model Training Pipeline")
    logger.info("=" * 55)

    # Step 1: Dataset validation
    ensure_dataset_exists()

    # Step 2: Train regression model
    logger.info("-" * 55)
    logger.info("📌 Training Regression Model (XGBoost)...")
    logger.info("-" * 55)

    train_regression_model()
    logger.info("✅ Regression model training complete!")

    # Step 3: Train Prophet forecasting model
    logger.info("-" * 55)
    logger.info("📌 Training Time-Series Forecast Model (Prophet)...")
    logger.info("-" * 55)

    train_prophet_model()
    logger.info("✅ Prophet forecasting model training complete!")

    # Final success message
    logger.info("=" * 55)
    logger.info("✅ ALL MODELS TRAINED SUCCESSFULLY!")
    logger.info("📂 Models saved inside: temp_storage/")
    logger.info("=" * 55)


if __name__ == "__main__":
    train_all_models()
