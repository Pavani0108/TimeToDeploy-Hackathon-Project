from datetime import datetime, timedelta


def calculate_availability_date(predicted_days: float):
    """
    Returns today's date and expected candidate availability date
    based on predicted deployment timeline.
    """

    today = datetime.today()

    availability_date = today + timedelta(days=int(predicted_days))

    return {
        "prediction_date": today.strftime("%Y-%m-%d"),
        "expected_deployment_date": availability_date.strftime("%Y-%m-%d")
    }
